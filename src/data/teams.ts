import { Trophy } from 'lucide-react';

export interface Team {
  id: string;
  name: string;
  logo: string;
  league: string;
}

export const teams: Team[] = [
  // Ligue 1
  {
    id: "psg",
    name: "Paris Saint-Germain",
    logo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "om",
    name: "Olympique de Marseille",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "ol",
    name: "Olympique Lyonnais",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "monaco",
    name: "AS Monaco",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "lille",
    name: "LOSC Lille",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    "id": "bayern_munich",
    "name": "Bayern Munich",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1e/FC_Bayern_M%C3%BCnchen_logo_2017.svg",
    "league": "Bundesliga"
  },
  {
    "id": "borussia_dortmund",
    "name": "Borussia Dortmund",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Borussia_Dortmund_logo.svg",
    "league": "Bundesliga"
  },
  {
    "id": "rb_leipzig",
    "name": "RB Leipzig",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f1/RB_Leipzig_logo_2014.svg",
    "league": "Bundesliga"
  },
  {
    "id": "bayer_leverkusen",
    "name": "Bayer Leverkusen",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Bayer_04_Leverkusen_logo.svg",
    "league": "Bundesliga"
  },
  {
    "id": "borussia_monchengladbach",
    "name": "Borussia Mönchengladbach",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Borussia_Mönchengladbach_Logo_2010.svg",
    "league": "Bundesliga"
  },
  {
    "id": "vfb_stuttgart",
    "name": "VfB Stuttgart",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a6/VfB_Stuttgart_logo_2017.svg",
    "league": "Bundesliga"
  },
  {
    "id": "eintracht_frankfurt",
    "name": "Eintracht Frankfurt",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/47/Eintracht_Frankfurt_Logo_2017.svg",
    "league": "Bundesliga"
  },
  {
    "id": "wolfsburg",
    "name": "Wolfsburg",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/5f/VfL_Wolfsburg_logo_2017.svg",
    "league": "Bundesliga"
  },
  {
    "id": "fc_koln",
    "name": "FC Köln",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2c/1.FC_K%C3%B6ln_logo.svg",
    "league": "Bundesliga"
  },
  {
    "id": "union_berlin",
    "name": "Union Berlin",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/e4/1.FC_Union_Berlin_logo.svg",
    "league": "Bundesliga"
  },
  {
    "id": "hoffenheim",
    "name": "Hoffenheim",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/04/TSG_1899_Hoffenheim_logo.svg",
    "league": "Bundesliga"
  },
  {
    "id": "augsburg",
    "name": "Augsburg",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/64/FC_Augsburg_Logo_2018.svg",
    "league": "Bundesliga"
  },
  {
    "id": "mainz_05",
    "name": "Mainz 05",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c1/1_FSV_Mainz_05_logo.svg",
    "league": "Bundesliga"
  },
  {
    "id": "werder_bremen",
    "name": "Werder Bremen",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/d/df/SV_Werder_Bremen_logo.svg",
    "league": "Bundesliga"
  },
  {
    "id": "schalke_04",
    "name": "Schalke 04",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1e/FC_Schalke_04_Logo_2017.svg",
    "league": "Bundesliga"
  },
  {
    "id": "vfl_bochum",
    "name": "VfL Bochum",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/27/VfL_Bochum_logo_2021.svg",
    "league": "Bundesliga"
  },
  {
    "id": "arminia_bielefeld",
    "name": "Arminia Bielefeld",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Arminia_Bielefeld_Logo_2017.svg",
    "league": "Bundesliga"
  },
  {
    "id": "freiburg",
    "name": "Freiburg",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c6/SC_Freiburg_logo.svg",
    "league": "Bundesliga"
  },
  {
    id: "rennes",
    name: "Stade Rennais",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "nice",
    name: "OGC Nice",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "lens",
    name: "RC Lens",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "toulouse",
    name: "Toulouse FC",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "nantes",
    name: "FC Nantes",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "strasbourg",
    name: "RC Strasbourg",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "reims",
    name: "Stade de Reims",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "montpellier",
    name: "Montpellier HSC",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "lorient",
    name: "FC Lorient",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "clermont",
    name: "Clermont Foot",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "metz",
    name: "FC Metz",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "havre",
    name: "Le Havre AC",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "brest",
    name: "Stade Brestois",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },

  // Premier League
  {
    id: "arsenal",
    name: "Arsenal FC",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },
  {
    id: "chelsea",
    name: "Chelsea FC",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },
  {
    id: "liverpool",
    name: "Liverpool FC",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },
  {
    id: "mancity",
    name: "Manchester City",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },
  {
    id: "manutd",
    name: "Manchester United",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },
  {
    id: "tottenham",
    name: "Tottenham Hotspur",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },
  {
    id: "newcastle",
    name: "Newcastle United",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },
  {
    id: "westham",
    name: "West Ham United",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },
  {
    id: "brighton",
    name: "Brighton & Hove Albion",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },
  {
    id: "astonvilla",
    name: "Aston Villa",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },

  // La Liga
  {
    id: "real_madrid",
    name: "Real Madrid",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  },
  {
    id: "barcelona",
    name: "FC Barcelona",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  },
  {
    id: "atletico",
    name: "Atlético Madrid",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  },
  {
    id: "sevilla",
    name: "Sevilla FC",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  },
  {
    id: "valencia",
    name: "Valencia CF",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  },
  {
    id: "realsociedad",
    name: "Real Sociedad",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  },
  {
    id: "betis",
    name: "Real Betis",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  },
  {
    id: "villarreal",
    name: "Villarreal CF",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  },
  {
    id: "getafe",
    name: "Getafe CF",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  },
  {
    id: "osasuna",
    name: "CA Osasuna",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  },
    {
    "id": "ajax",
    "name": "Ajax",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ajax_Amsterdam_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "psv_eindhoven",
    "name": "PSV Eindhoven",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/46/PSV_Eindhoven_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "feyenoord",
    "name": "Feyenoord",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Feyenoord_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "az_alkmaar",
    "name": "AZ Alkmaar",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c9/AZ_Alkmaar_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "utrecht",
    "name": "Utrecht",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/99/FC_Utrecht_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "vitesse_arnhem",
    "name": "Vitesse Arnhem",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/69/Vitesse_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "groningen",
    "name": "Groningen",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1f/FC_Groningen_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "heerenveen",
    "name": "Heerenveen",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6e/SC_Heerenveen_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "twente",
    "name": "Twente",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1f/FCTwente_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "willem_ii",
    "name": "Willem II",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/24/Willem_II_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "sparta_rotterdam",
    "name": "Sparta Rotterdam",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Sparta_Rotterdam_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "fortuna_sittard",
    "name": "Fortuna Sittard",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/92/Fortuna_Sittard_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "nec_nijmegen",
    "name": "NEC Nijmegen",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/35/NEC_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "rkc_waalwijk",
    "name": "RKC Waalwijk",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f7/RKC_Waalwijk_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "excelsior",
    "name": "Excelsior",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Excelsior_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "pec_zwolle",
    "name": "PEC Zwolle",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/9d/PEC_Zwolle_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "cambuur",
    "name": "Cambuur",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a2/SC_Cambuur_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "emmen",
    "name": "Emmen",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/70/FC_Emmen_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "heracles_almelo",
    "name": "Heracles Almelo",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Heracles_Almelo_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "ajax",
    "name": "Ajax",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ajax_Amsterdam_logo.svg",
    "league": "Eredivisie"
  },
    {
    "id": "ajax",
    "name": "Ajax",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ajax_Amsterdam_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "psv_eindhoven",
    "name": "PSV Eindhoven",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/46/PSV_Eindhoven_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "feyenoord",
    "name": "Feyenoord",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Feyenoord_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "az_alkmaar",
    "name": "AZ Alkmaar",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c9/AZ_Alkmaar_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "utrecht",
    "name": "Utrecht",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/99/FC_Utrecht_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "vitesse_arnhem",
    "name": "Vitesse Arnhem",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/69/Vitesse_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "groningen",
    "name": "Groningen",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1f/FC_Groningen_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "heerenveen",
    "name": "Heerenveen",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6e/SC_Heerenveen_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "twente",
    "name": "Twente",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1f/FCTwente_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "willem_ii",
    "name": "Willem II",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/24/Willem_II_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "sparta_rotterdam",
    "name": "Sparta Rotterdam",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Sparta_Rotterdam_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "fortuna_sittard",
    "name": "Fortuna Sittard",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/92/Fortuna_Sittard_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "nec_nijmegen",
    "name": "NEC Nijmegen",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/35/NEC_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "rkc_waalwijk",
    "name": "RKC Waalwijk",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f7/RKC_Waalwijk_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "excelsior",
    "name": "Excelsior",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Excelsior_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "pec_zwolle",
    "name": "PEC Zwolle",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/9d/PEC_Zwolle_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "cambuur",
    "name": "Cambuur",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a2/SC_Cambuur_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "emmen",
    "name": "Emmen",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/70/FC_Emmen_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "heracles_almelo",
    "name": "Heracles Almelo",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Heracles_Almelo_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "ajax",
    "name": "Ajax",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ajax_Amsterdam_logo.svg",
    "league": "Eredivisie"
  },
  {
    "id": "fc_porto",
    "name": "FC Porto",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Futebol_Clube_do_Porto_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "benfica",
    "name": "Benfica",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f6/S.L._Benfica_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "sporting_cp",
    "name": "Sporting CP",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Sporting_CP_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "braga",
    "name": "Braga",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/28/SC_Braga_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "vitoria_sc",
    "name": "Vitória SC",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Vit%C3%B3ria_SC_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "maritimo",
    "name": "Marítimo",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/71/CS_Maritimo_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "belenenses_sad",
    "name": "Belenenses SAD",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Belenenses_SAD_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "boavista",
    "name": "Boavista",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Boavista_FC_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "nacional",
    "name": "Nacional",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/42/CS_Nacional_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "pacos_de_ferreira",
    "name": "Paços de Ferreira",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/08/Futebol_Clube_de_Pa%C3%A7os_de_Ferreira_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "rio_ave",
    "name": "Rio Ave",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/51/Rio_Ave_FC_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "arouca",
    "name": "Arouca",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Futebol_Clube_Arouca_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "famalicao",
    "name": "Famalicão",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d4/F%C3%A1brica_de_Famalic%C3%A3o_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "tondela",
    "name": "Tondela",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/08/UD_Tondela_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "moreirense",
    "name": "Moreirense",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Moreirense_FC_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "santa_clara",
    "name": "Santa Clara",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Clube_Sportivo_Santa_Clara_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "gil_vicente",
    "name": "Gil Vicente",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Gil_Vicente_FC_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "vizela",
    "name": "Vizela",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Futebol_Clube_Vizela_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "estoril_praia",
    "name": "Estoril Praia",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/67/Estoril_Praia_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "casa_pia",
    "name": "Casa Pia",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Casa_Pia_AC_logo.svg",
    "league": "Primeira Liga"
  },
  {
    "id": "flamengo",
    "name": "Flamengo",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flamengo_logo.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "palmeiras",
    "name": "Palmeiras",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Logo_Palmeiras.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "sao_paulo_fc",
    "name": "São Paulo FC",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/18/Sao_Paulo_FC_logo.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "atletico_mineiro",
    "name": "Atlético Mineiro",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Atletico_Mineiro_logo.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "gremio",
    "name": "Grêmio",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grêmio_Football_Porto_Alegre_logo.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "internacional",
    "name": "Internacional",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Internacional_logo.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "santos",
    "name": "Santos",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Santos_FC_logo.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "fluminense",
    "name": "Fluminense",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Fluminense_FC_logo.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "corinthians",
    "name": "Corinthians",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Corinthians_logo.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "vasco_da_gama",
    "name": "Vasco da Gama",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/46/Club_de_Regatas_Vasco_da_Gama_logo.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "cruzeiro",
    "name": "Cruzeiro",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/91/Cruzeiro_EC_logo.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "fortaleza",
    "name": "Fortaleza",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/59/Fortaleza_EC_logo.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "ceara",
    "name": "Ceará",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Cear%C3%A1_Sporting_Club_logo.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "bahia",
    "name": "Bahia",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Esporte_Clube_Bahia_logo.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "atletico_paranaense",
    "name": "Atlético Paranaense",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/47/Atl%C3%A9tico_Pranase_logo.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "juventude",
    "name": "Juventude",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/46/Esporte_Clube_Juventude_logo.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "cuiaba",
    "name": "Cuiabá",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Cuiab%C3%A1_Sport_Club_logo.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "goianiense",
    "name": "Goianiense",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Atl%C3%A9tico_Goianiense_logo.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "america_mineiro",
    "name": "América Mineiro",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/49/Am%C3%A9rica_Futebol_Clube_logo.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "coritiba",
    "name": "Coritiba",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Coritiba_Football_Club_logo.svg",
    "league": "Brasileirão Série A"
  },
  {
    "id": "birmingham_city",
    "name": "Birmingham City",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/53/Birmingham_City_FC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "blackburn_rovers",
    "name": "Blackburn Rovers",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/48/Blackburn_Rovers_FC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "bristol_city",
    "name": "Bristol City",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Bristol_City_FC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "cardiff_city",
    "name": "Cardiff City",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Cardiff_City_FC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "coventry_city",
    "name": "Coventry City",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/52/Coventry_City_FC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "hull_city",
    "name": "Hull City",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Hull_City_AFC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "leeds_united",
    "name": "Leeds United",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/76/Leeds_United_AFC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "leicester_city",
    "name": "Leicester City",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/37/Leicester_City_FC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "middlesbrough",
    "name": "Middlesbrough",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Middlesbrough_FC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "millwall",
    "name": "Millwall",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Millwall_FC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "norwich_city",
    "name": "Norwich City",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/19/Norwich_City_FC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "plymouth_argyle",
    "name": "Plymouth Argyle",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/64/Plymouth_Argyle_FC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "preston_north_end",
    "name": "Preston North End",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/60/Preston_North_End_FC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "qpr",
    "name": "Queens Park Rangers",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Queens_Park_Rangers_FC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "rotherham_united",
    "name": "Rotherham United",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Rotherham_United_FC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "sheffield_wednesday",
    "name": "Sheffield Wednesday",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/8/81/Sheffield_Wednesday_FC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "stoke_city",
    "name": "Stoke City",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Stoke_City_FC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "sunderland",
    "name": "Sunderland",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/20/Sunderland_AFC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "swansea_city",
    "name": "Swansea City",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/79/Swansea_City_AFC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "watford",
    "name": "Watford",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Watford_FC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "west_bromwich_albion",
    "name": "West Bromwich Albion",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/e6/West_Bromwich_Albion_FC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "ipswich_town",
    "name": "Ipswich Town",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Ipswich_Town_FC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "southampton",
    "name": "Southampton",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Southampton_FC_logo.svg",
    "league": "Championship"
  },
  {
    "id": "barnsley",
    "name": "Barnsley",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/26/Barnsley_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "bolton_wanderers",
    "name": "Bolton Wanderers",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Bolton_Wanderers_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "cambridge_united",
    "name": "Cambridge United",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Cambridge_United_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "carlisle_united",
    "name": "Carlisle United",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Carlisle_United_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "charlton_athletic",
    "name": "Charlton Athletic",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Charlton_Athletic_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "derby_county",
    "name": "Derby County",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Derby_County_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "exeter_city",
    "name": "Exeter City",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Exeter_City_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "fleetwood_town",
    "name": "Fleetwood Town",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/69/Fleetwood_Town_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "lincoln_city",
    "name": "Lincoln City",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/17/Lincoln_City_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "morecambe",
    "name": "Morecambe",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/34/Morecambe_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "oxford_united",
    "name": "Oxford United",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Oxford_United_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "peterborough_united",
    "name": "Peterborough United",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Peterborough_United_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "portsmouth",
    "name": "Portsmouth",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Portsmouth_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "reading",
    "name": "Reading",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/09/Reading_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "sheffield_united",
    "name": "Sheffield United",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Sheffield_United_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "shrewsbury_town",
    "name": "Shrewsbury Town",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Shrewsbury_Town_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "stevenage",
    "name": "Stevenage",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Stevenage_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "wigan_athletic",
    "name": "Wigan Athletic",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/24/Wigan_Athletic_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "wycombe_wanderers",
    "name": "Wycombe Wanderers",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/d/da/Wycombe_Wanderers_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "bristol_rovers",
    "name": "Bristol Rovers",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/98/Bristol_Rovers_FC_logo.svg",
    "league": "League One"
  },
  {
    "id": "afc_wimbledon",
    "name": "AFC Wimbledon",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/fd/AFC_Wimbledon_logo.svg",
    "league": "League Two"
  },
  {
    "id": "barrow",
    "name": "Barrow",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/35/Barrow_AFC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "bradford_city",
    "name": "Bradford City",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Bradford_City_AFC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "colchester_united",
    "name": "Colchester United",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Colchester_United_FC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "crawley_town",
    "name": "Crawley Town",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/65/Crawley_Town_FC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "gillingham",
    "name": "Gillingham",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Gillingham_FC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "grimsby_town",
    "name": "Grimsby Town",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/24/Grimsby_Town_FC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "hartlepool_united",
    "name": "Hartlepool United",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/99/Hartlepool_United_FC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "harrogate_town",
    "name": "Harrogate Town",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Harrogate_Town_AFC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "leyton_orient",
    "name": "Leyton Orient",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/22/Leyton_Orient_FC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "mansfield_town",
    "name": "Mansfield Town",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/37/Mansfield_Town_FC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "newport_county",
    "name": "Newport County",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Newport_County_AFC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "northampton_town",
    "name": "Northampton Town",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/95/Northampton_Town_FC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "notts_county",
    "name": "Notts County",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Notts_County_FC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "salford_city",
    "name": "Salford City",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Salford_City_FC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "stevenage",
    "name": "Stevenage",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/94/Stevenage_FC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "sutton_united",
    "name": "Sutton United",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Sutton_United_FC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "swindon_town",
    "name": "Swindon Town",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/16/Swindon_Town_FC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "tranmere_rovers",
    "name": "Tranmere Rovers",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tranmere_Rovers_FC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "walsall",
    "name": "Walsall",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/62/Walsall_FC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "stockport_county",
    "name": "Stockport County",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/38/Stockport_County_FC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "crewe_alexandra",
    "name": "Crewe Alexandra",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Crewe_Alexandra_FC_logo.svg",
    "league": "League Two"
  },
  {
    "id": "aldershot_town",
    "name": "Aldershot Town",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/18/Aldershot_Town_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "barnet",
    "name": "Barnet",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/39/Barnet_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "boreham_wood",
    "name": "Boreham Wood",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Boreham_Wood_FC_logo.svg",
    "league": "National League"
  },
    {
    "id": "bromley",
    "name": "Bromley",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Bromley_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "chesterfield",
    "name": "Chesterfield",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Chesterfield_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "dagenham_redbridge",
    "name": "Dagenham & Redbridge",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Dagenham_%26_Redbridge_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "eastleigh",
    "name": "Eastleigh",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Eastleigh_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "gateshead",
    "name": "Gateshead",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Gateshead_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "grimsby_town",
    "name": "Grimsby Town",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/24/Grimsby_Town_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "halifax_town",
    "name": "Halifax Town",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Halifax_Town_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "maidenhead_united",
    "name": "Maidenhead United",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Maidenhead_United_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "notts_county",
    "name": "Notts County",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Notts_County_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "oxford_city",
    "name": "Oxford City",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Oxford_City_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "solihull_moors",
    "name": "Solihull Moors",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Solihull_Moors_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "southend_united",
    "name": "Southend United",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Southend_United_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "torquay_united",
    "name": "Torquay United",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Torquay_United_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "woking",
    "name": "Woking",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Woking_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "wealdstone",
    "name": "Wealdstone",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Wealdstone_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "yeovil_town",
    "name": "Yeovil Town",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Yeovil_Town_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "wrexham",
    "name": "Wrexham",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wrexham_AFC_logo.svg",
    "league": "National League"
  },
  {
    "id": "dorking_wanderers",
    "name": "Dorking Wanderers",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Dorking_Wanderers_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "aldershot_town",
    "name": "Aldershot Town",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/18/Aldershot_Town_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "maidstone_united",
    "name": "Maidstone United",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/33/Maidstone_United_FC_logo.svg",
    "league": "National League"
  },
  {
    "id": "alaves",
    "name": "Alavés",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/64/Deportivo_Alav%C3%A9s_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "athletic_bilbao",
    "name": "Athletic Bilbao",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Athletic_Bilbao_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "atletico_madrid",
    "name": "Atlético Madrid",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/56/Atletico_Madrid_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "barcelona",
    "name": "Barcelona",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/47/FC_Barcelona_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "real_betis",
    "name": "Real Betis",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Real_Betis_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "cadiz",
    "name": "Cádiz",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/e4/C%C3%A1diz_CF_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "celta_vigo",
    "name": "Celta Vigo",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Real_Celta_de_Vigo_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "getafe",
    "name": "Getafe",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Getafe_CF_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "girona",
    "name": "Girona",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Girona_FC_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "granada",
    "name": "Granada",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Granada_CF_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "real_madrid",
    "name": "Real Madrid",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/56/Real_Madrid_CF_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "mallorca",
    "name": "Mallorca",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/74/Real_Mallorca_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "osasuna",
    "name": "Osasuna",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/ec/CA_Osasuna_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "rayo_vallecano",
    "name": "Rayo Vallecano",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/92/Rayo_Vallecano_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "real_sociedad",
    "name": "Real Sociedad",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Real_Sociedad_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "sevilla_fc",
    "name": "Sevilla FC",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/50/Sevilla_FC_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "valencia",
    "name": "Valencia",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Valencia_CF_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "villarreal",
    "name": "Villarreal",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Villarreal_CF_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "real_valladolid",
    "name": "Real Valladolid",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Real_Valladolid_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "almeria",
    "name": "Almería",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c2/UD_Almer%C3%ADa_logo.svg",
    "league": "La Liga"
  },
  {
    "id": "andorra",
    "name": "Andorra",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/97/FC_Andorra_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "amorebieta",
    "name": "Amorebieta",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4c/SD_Amorebieta_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "burgos",
    "name": "Burgos",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/23/Burgos_CF_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "cartagena",
    "name": "Cartagena",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Fc_cartagena_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "eibar",
    "name": "Eibar",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/01/SD_Eibar_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "gimnastic_tarragona",
    "name": "Gimnàstic Tarragona",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/74/Club_Gimn%C3%A0stic_de_Tarragona_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "granada_2",
    "name": "Granada",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Granada_CF_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "las_palmas",
    "name": "Las Palmas",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/46/UD_Las_Palmas_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "levante",
    "name": "Levante",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Levante_UD_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "mirandes",
    "name": "Mirandés",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/ec/CD_Mirand%C3%A9s_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "ponferradina",
    "name": "Ponferradina",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/16/SD_Ponferradina_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "real_oviedo",
    "name": "Real Oviedo",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/76/Real_Oviedo_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "real_zaragoza",
    "name": "Real Zaragoza",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Real_Zaragoza_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "racing_santander",
    "name": "Racing Santander",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Racing_de_Santander_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "real_sociedad_b",
    "name": "Real Sociedad B",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/66/Real_Sociedad_B_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "tenerife",
    "name": "Tenerife",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/43/CD_Tenerife_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "fuenlabrada",
    "name": "Fuenlabrada",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a7/CF_Fuenlabrada_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "albacete",
    "name": "Albacete",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Albacete_Balompié_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "huesca",
    "name": "Huesca",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a3/SD_Huesca_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "ibiza",
    "name": "Ibiza",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/3e/UD_Ibiza_logo.svg",
    "league": "La Liga 2"
  },
  {
    "id": "cordoba",
    "name": "Córdoba",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Cordoba_CF_logo.svg",
    "league": "Primera Federación"
  },
  {
    "id": "castellon",
    "name": "Castellón",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/e4/SD_Castellon_logo.svg",
    "league": "Primera Federación"
  },
  {
    "id": "badajoz",
    "name": "Badajoz",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/22/CD_Badajoz_logo.svg",
    "league": "Primera Federación"
  },
  {
    "id": "real_madrid_castilla",
    "name": "Real Madrid Castilla",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/14/Real_Madrid_CF_logo.svg",
    "league": "Primera Federación"
  },
  {
    "id": "fuenlabrada_2",
    "name": "Fuenlabrada",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a7/CF_Fuenlabrada_logo.svg",
    "league": "Primera Federación"
  },
  {
    "id": "rayo_majadahonda",
    "name": "Rayo Majadahonda",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Rayo_Majadahonda_logo.svg",
    "league": "Primera Federación"
  },
  {
    "id": "cultural_leonesa",
    "name": "Cultural Leonesa",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/94/Cultural_Leonesa_logo.svg",
    "league": "Primera Federación"
  },
  {
    "id": "san_sebastian_de_los_reyes",
    "name": "San Sebastián de los Reyes",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2e/San_Sebasti%C3%A1n_de_los_Reyes_CF_logo.svg",
    "league": "Primera Federación"
  },
  {
    "id": "atletico_sanluqueno",
    "name": "Atlético Sanluqueño",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/15/Atletico_Sanluqueno_CF_logo.svg",
    "league": "Primera Federación"
  },
  {
    "id": "melilla",
    "name": "Melilla",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/44/UD_Melilla_logo.svg",
    "league": "Primera Federación"
  },
  {
    "id": "pontevedra",
    "name": "Pontevedra",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/15/Pontevedra_CF_logo.svg",
    "league": "Primera Federación"
  },
  {
    "id": "hercules",
    "name": "Hércules",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Hercules_CF_logo.svg",
    "league": "Primera Federación"
  },
  {
    "id": "real_union",
    "name": "Real Unión",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/45/Real_Unión_logo.svg",
    "league": "Primera Federación"
  },
  {
    "id": "ud_logrones",
    "name": "UD Logroñés",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/72/UD_Logro%C3%B1es_logo.svg",
    "league": "Primera Federación"
  },
  {
    "id": "atletico_saguntino",
    "name": "Atlético Saguntino",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/69/Atl%C3%A9tico_Saguntino_logo.svg",
    "league": "Segunda Federación"
  },
  {
    "id": "badajoz_2",
    "name": "Badajoz",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/22/CD_Badajoz_logo.svg",
    "league": "Segunda Federación"
  },
  {
    "id": "cordoba_2",
    "name": "Córdoba",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Cordoba_CF_logo.svg",
    "league": "Segunda Federación"
  },
  {
    "id": "marbella",
    "name": "Marbella",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Marbella_FC_logo.svg",
    "league": "Segunda Federación"
  },
  {
    "id": "atletico_mancha_real",
    "name": "Atlético Mancha Real",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Atletico_Mancha_Real_logo.svg",
    "league": "Segunda Federación"
  },
  {
    "id": "algeciras",
    "name": "Algeciras",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Algeciras_CF_logo.svg",
    "league": "Segunda Federación"
  },
  {
    "id": "salamanca_uds",
    "name": "Salamanca UDS",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Salamanca_UDS_logo.svg",
    "league": "Segunda Federación"
  }
];

export const betTypes = {
  "1X2": ["1", "X", "2"],
  "Double Chance": ["1X", "12", "X2"],
  "Les Deux Équipes Marquent": ["Oui", "Non"],
  "Over/Under 2.5": ["Over", "Under"],
  "Score Exact": ["1-0", "2-0", "2-1", "0-0", "1-1", "2-2", "0-1", "0-2", "1-2"],
  "Buteur": ["Premier", "Dernier", "À tout moment"],
  "Nombre de Corners": ["Over 9.5", "Under 9.5"],
  "Cartons": ["Over 3.5", "Under 3.5"],
  "Personnalisé": []
} as const;

export interface Match {
  team1: Team;
  team2: Team;
  betType: string;
  betValue: string;
  customBet?: string;
}