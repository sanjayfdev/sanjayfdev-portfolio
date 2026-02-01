import { Project } from './types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Kuniko Decor (Ecommerce UI)',
    description: 'Kuniko Decor decoration items selling website UI',
    tech: ['JavaScript', 'HTML', 'CSS'],
    cover:
      'https://res.cloudinary.com/dau0woeio/image/upload/v1765717907/Kuniko_Decor_Cover_syz6e9.png',
    github: 'https://github.com/sanjayfdev/kuniko-decor',
    live: 'https://sanjayfdev.github.io/Kuniko-Decor/',
  },
  {
    id: 2,
    title: 'User Management',
    description: 'React weather app using OpenWeather API.',
    tech: ['JavaScript'],
    cover: 'https://res.cloudinary.com/dyvkdwzcj/image/upload/v1656970810/Codevertiser_xlxdje.png',
    github: 'https://github.com/yourname/weather-app',
    live: 'https://weather-app.vercel.app',
  },
  {
    id: 3,
    title: 'JobPilot – Job Application Tracker',
    description:
      'Full-stack MERN application to track job applications with authentication, status management, filtering, pagination, and dark/light mode.',
    tech: ['MERN', 'JWT', 'MongoDB Atlas', 'Tailwind CSS'],
    cover: 'https://res.cloudinary.com/dau0woeio/image/upload/v1769962461/jobpilot_bizppy.png',
    github: 'https://github.com/sanjayfdev/jobpilot-frontend',
    live: 'https://jobpilot-frontend.vercel.app/',
  },
]
