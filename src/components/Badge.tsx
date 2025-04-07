import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';

export type BadgeType = 'novice' | 'confirmé' | 'pro';

interface BadgeProps {
  type: BadgeType;
  className?: string;
}

export function getBadgeInfo(type: BadgeType) {
  switch (type) {
    case 'novice':
      return {
        icon: Star,
        color: 'bg-blue-100 text-blue-700',
        label: 'Novice'
      };
    case 'confirmé':
      return {
        icon: Award,
        color: 'bg-purple-100 text-purple-700',
        label: 'Confirmé'
      };
    case 'pro':
      return {
        icon: Trophy,
        color: 'bg-yellow-100 text-yellow-700',
        label: 'Pro'
      };
  }
}

export default function Badge({ type, className = '' }: BadgeProps) {
  const { icon: Icon, color, label } = getBadgeInfo(type);

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${color} ${className}`}>
      <Icon className="w-3 h-3 mr-1" />
      {label}
    </span>
  );
}