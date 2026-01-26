export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  cover: string;
  github?: string;
  live?: string;
}

export interface ProjectTech {
  tech : string,
  projects : Project[]
}

export interface Heading {
  id: string
  title: string
  items: Heading[]
}

export interface Testimonial {
  name: string
  title?: string
  feedback: string
  image: string
  stars: number
  // createdAt: string
}
