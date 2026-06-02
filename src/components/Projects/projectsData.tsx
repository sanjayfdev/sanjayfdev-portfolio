import { Project } from './types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Carpel – Real-Time Streaming & Automation Platform',
    description:
      'Enterprise-grade real-time streaming and automation platform featuring ultra-low latency browser communication, Azure AD SSO, RBAC, scalable microservices, and cloud-native deployment on Azure Kubernetes Service.',
    tech: [
      'React.js',
      'Node.js',
      '.NET Core',
      'WebRTC',
      'mediasoup',
      'FFmpeg',
      'MongoDB',
      'Docker',
      'Kubernetes',
      'Azure AD',
      'Microsoft Azure',
      'Material UI',
    ],
    cover: 'https://res.cloudinary.com/dau0woeio/image/upload/v1780390221/carpel_AI_r5yjtf.jpg',
    // github: '',
    live: 'https://www.carpel.io/',
  },
  {
    id: 2,
    title: 'Kuniko Decor (Ecommerce UI)',
    description: 'Kuniko Decor decoration items selling website UI',
    tech: ['JavaScript', 'HTML', 'CSS'],
    cover:
      'https://res.cloudinary.com/dau0woeio/image/upload/v1765717907/Kuniko_Decor_Cover_syz6e9.png',
    github: 'https://github.com/sanjayfdev/kuniko-decor',
    live: 'https://sanjayfdev.github.io/Kuniko-Decor/',
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
  {
    id: 4,
    title: 'Secure Ticketing & Support System',
    description:
      'Full-stack MERN support ticket management platform with JWT authentication, role-based access control, ticket tracking, admin dashboard, status management, and secure REST APIs.',
    tech: [
      'MERN',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'bcryptjs',
      'Material UI',
    ],
    cover:
      'https://res.cloudinary.com/dau0woeio/image/upload/v1780388833/support-ticket_lgv4iu.jpg',
    github: 'https://github.com/sanjayfdev/secure-ticketing-support-system-frontend',
    live: 'https://secure-ticketing-support-system-fro.vercel.app/',
  },
  
]
