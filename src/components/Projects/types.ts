export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  cover: string;
  github?: string;
  live?: string;
}
