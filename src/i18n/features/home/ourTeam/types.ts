// src/i18n/features/home/ourTeam/types.ts

export interface TeamPosition {
  position1: string;
  position2: string;
  position3: string;
  position4: string;
}

export interface TeamValue {
  title: string;
  description: string;
}

export interface OurTeamTranslations {
  badge: string;
  team: {
    title: string;
    description: string;
    positions: TeamPosition;
  };
  values: {
    mainTitle: string;
    description: string;
    value1: TeamValue;
    value2: TeamValue;
    value3: TeamValue;
  };
} 