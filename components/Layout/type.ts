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
