export type Job = {
  company: string
  position: string
  timeline: string
  project: {
    projectIsLink?: boolean
    name: string
    stuff: string | string[]
    techStack: string[]
  }[]
}

export type Newsletter = {
  industry: string
  company: string
  title: string
  subtitle: string[]
  content: string[]
}
