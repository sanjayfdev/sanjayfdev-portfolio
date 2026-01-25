import { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Todo App",
    description: "Vanilla JS todo app with local storage support.",
    tech: ["JavaScript"],
    cover: "https://res.cloudinary.com/dau0woeio/image/upload/v1765717907/Kuniko_Decor_Cover_syz6e9.png",
    github: "https://github.com/yourname/todo-app",
    live: "https://todo-app.vercel.app"
  },
  {
    id: 2,
    title: "Weather App",
    description: "React weather app using OpenWeather API.",
    tech: ["React", "API"],
    cover: "https://res.cloudinary.com/dyvkdwzcj/image/upload/v1656970810/Codevertiser_xlxdje.png",
    github: "https://github.com/yourname/weather-app",
    live: "https://weather-app.vercel.app"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Full-stack MERN app with auth, cart & payments.",
    tech: ["MERN", "Stripe", "JWT"],
    cover: "/projects/ecommerce.png",
    github: "https://github.com/yourname/mern-ecommerce",
    live: "https://mern-ecommerce.vercel.app"
  }
];
