
export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  thumbnail: string;
  description: string;
  year: string;
  client: string;
  fullImages: string[];
}

export enum ProjectCategory {
  CINEMATOGRAPHY = 'Cinematography',
  PHOTOGRAPHY = 'Photography',
  BRANDING = 'Branding',
  DIRECTION = 'Direction'
}

export interface NavItem {
  label: string;
  path: string;
}
