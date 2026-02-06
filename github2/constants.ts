
import { Project, ProjectCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'noir-fashion-2024',
    title: 'Noir Essence',
    category: ProjectCategory.PHOTOGRAPHY,
    thumbnail: 'https://picsum.photos/id/22/800/1000',
    description: 'A study in high-contrast monochrome fashion photography exploring the intersection of shadow and silk.',
    year: '2024',
    client: 'Vogue Alternative',
    fullImages: [
      'https://picsum.photos/id/22/1600/900',
      'https://picsum.photos/id/24/1600/900',
      'https://picsum.photos/id/26/1600/900'
    ]
  },
  {
    id: 'urban-echoes',
    title: 'Urban Echoes',
    category: ProjectCategory.CINEMATOGRAPHY,
    thumbnail: 'https://picsum.photos/id/34/800/1000',
    description: 'A cinematic short film capturing the heartbeat of night-time Tokyo through distorted lenses and neon reflections.',
    year: '2023',
    client: 'Independent Release',
    fullImages: [
      'https://picsum.photos/id/34/1600/900',
      'https://picsum.photos/id/35/1600/900',
      'https://picsum.photos/id/36/1600/900'
    ]
  },
  {
    id: 'minimal-identity',
    title: 'Aura Branding',
    category: ProjectCategory.BRANDING,
    thumbnail: 'https://picsum.photos/id/42/800/1000',
    description: 'Complete visual identity redesign for Aura, a luxury sustainable skincare line based in Paris.',
    year: '2023',
    client: 'Aura Cosmetics',
    fullImages: [
      'https://picsum.photos/id/42/1600/900',
      'https://picsum.photos/id/43/1600/900'
    ]
  },
  {
    id: 'the-last-dance',
    title: 'The Last Dance',
    category: ProjectCategory.DIRECTION,
    thumbnail: 'https://picsum.photos/id/60/800/1000',
    description: 'Directing a contemporary dance performance piece centered around the concept of fleeting moments.',
    year: '2024',
    client: 'Royal Arts Society',
    fullImages: [
      'https://picsum.photos/id/60/1600/900',
      'https://picsum.photos/id/61/1600/900'
    ]
  },
  {
    id: 'desert-mirage',
    title: 'Desert Mirage',
    category: ProjectCategory.PHOTOGRAPHY,
    thumbnail: 'https://picsum.photos/id/101/800/1000',
    description: 'Captured in the vast dunes of Sahara, this series focuses on the abstract patterns formed by wind.',
    year: '2022',
    client: 'National Geographic Contributor',
    fullImages: [
      'https://picsum.photos/id/101/1600/900',
      'https://picsum.photos/id/102/1600/900'
    ]
  },
  {
    id: 'velocity-commercial',
    title: 'Velocity X',
    category: ProjectCategory.CINEMATOGRAPHY,
    thumbnail: 'https://picsum.photos/id/107/800/1000',
    description: 'Commercial cinematography for a high-performance electric vehicle launch.',
    year: '2023',
    client: 'Zenith Motors',
    fullImages: [
      'https://picsum.photos/id/107/1600/900',
      'https://picsum.photos/id/108/1600/900'
    ]
  }
];

export const NAVIGATION = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Booking', path: '/booking' }
];
