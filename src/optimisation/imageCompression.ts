import { compress } from 'browser-image-compression';

interface CompressionOptions {
  maxSizeMB: number;
  maxWidthOrHeight: number;
  useWebWorker: boolean;
  preserveExif: boolean;
}

const defaultOptions: CompressionOptions = {
  maxSizeMB: 1,              // Maximum size in MB
  maxWidthOrHeight: 1920,    // Max width/height while preserving aspect ratio
  useWebWorker: true,        // Use Web Worker for better performance
  preserveExif: true         // Preserve image metadata
};

/**
 * Compresses an image file or base64 string while maintaining quality
 * @param imageFile - File object or base64 string of the image
 * @param customOptions - Optional compression options to override defaults
 * @returns Promise<string> - Base64 string of the compressed image
 */
export async function compressImage(
  imageFile: File | string,
  customOptions?: Partial<CompressionOptions>
): Promise<string> {
  try {
    // Merge default options with custom options
    const options = { ...defaultOptions, ...customOptions };

    // If input is base64 string, convert to File object
    let file: File;
    if (typeof imageFile === 'string') {
      file = await base64ToFile(imageFile);
    } else {
      file = imageFile;
    }

    // Compress the image
    const compressedFile = await compress(file, options);

    // Convert compressed file to base64
    return await fileToBase64(compressedFile);
  } catch (error) {
    console.error('Error compressing image:', error);
    throw new Error('Failed to compress image');
  }
}

/**
 * Converts a base64 string to a File object
 * @param base64String - Base64 string of the image
 * @returns Promise<File>
 */
async function base64ToFile(base64String: string): Promise<File> {
  // Remove data URL prefix if present
  const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
  
  // Convert base64 to blob
  const byteString = atob(base64Data);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  
  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }
  
  const blob = new Blob([uint8Array], { type: 'image/jpeg' });
  return new File([blob], 'compressed-image.jpg', { type: 'image/jpeg' });
}

/**
 * Converts a File object to base64 string
 * @param file - File object to convert
 * @returns Promise<string> - Base64 string
 */
async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
}

/**
 * Validates if the image meets the size and dimension requirements
 * @param file - File object to validate
 * @returns Promise<boolean>
 */
export async function validateImage(file: File): Promise<boolean> {
  // Check file size (max 5MB)
  const maxSize = 5 * 1024 * 1024; // 5MB in bytes
  if (file.size > maxSize) {
    return false;
  }

  // Check dimensions
  return new Promise((resolve) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(img.src);
      resolve(img.width <= 4096 && img.height <= 4096);
    };
    img.onerror = () => resolve(false);
  });
}

/**
 * Estimates the quality level needed to achieve target file size
 * @param currentSize - Current file size in bytes
 * @param targetSize - Target file size in bytes
 * @returns number - Estimated quality level (0-1)
 */
export function estimateQualityLevel(currentSize: number, targetSize: number): number {
  // Start with high quality and adjust based on size ratio
  const sizeRatio = targetSize / currentSize;
  const baseQuality = 0.90; // Start with 90% quality
  
  let estimatedQuality = baseQuality * sizeRatio;
  
  // Ensure quality stays within reasonable bounds
  estimatedQuality = Math.min(Math.max(estimatedQuality, 0.65), 0.95);
  
  return estimatedQuality;
}