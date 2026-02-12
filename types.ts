
export interface Project {
  title: string;
  category: 'vue' | 'react' | 'webflow' | 'laravel';
  description: string;
  image: string;
  tags: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: any; // Using any for Vue functional components or SVG elements
  tech: string[];
}
