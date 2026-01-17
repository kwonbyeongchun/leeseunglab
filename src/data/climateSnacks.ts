export interface ClimateSnackSession {
  id: string;
  speaker: string;
  affiliation?: string;
  topic: string;
  description: string;
  videoUrl?: string;
  thumbnail?: string;
}

export const climateSnacksSessions: ClimateSnackSession[] = [
  {
    id: 'josh-fisher',
    speaker: 'Josh Fisher',
    topic: 'Terrestrial Biosphere Carbon Cycle',
    description: 'Discusses terrestrial biosphere carbon cycle components and future climate impacts.',
  },
  {
    id: 'asmeret-berhe',
    speaker: 'Asmeret Asefaw Berhe',
    topic: 'Soil Carbon Sequestration',
    description: "Explores soil's capacity for carbon sequestration as a nature-based solution.",
  },
  {
    id: 'rob-jackson',
    speaker: 'Rob Jackson',
    affiliation: 'Stanford',
    topic: "Methane's Climate Impact",
    description: "Addresses methane's climate impact.",
  },
  {
    id: 'sara-vicca',
    speaker: 'Sara Vicca',
    affiliation: 'University of Antwerp',
    topic: 'Negative Emission Technologies',
    description: 'Examines negative emission technologies and natural climate solutions.',
  },
  {
    id: 'susan-cook-patton',
    speaker: 'Susan Cook-Patton',
    affiliation: 'Nature Conservancy',
    topic: 'Forest Restoration',
    description: "Analyzes forest restoration's climate mitigation potential.",
  },
];
