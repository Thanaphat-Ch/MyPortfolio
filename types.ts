import { IconType } from "react-icons/lib";

// types.ts
export type Experience = {
  id: number
  logo: string
  role: string
  company: string
  period: string
  description: string
}

export type Project = {
  id: number
  title: string
  category: string
  image: string
  description: string
  tech: string[]
  link: string
  screenshots?: string[]
}



export type PortfolioProps = {
  experiences: Experience[]
  projects: Project[]
  skills: Skill[]
}

export type Skill = {
  name: string;
  icon: IconType;
  color: string;
}