export type Job = {
    company: string
    period: string
    role: string
    location: string
    description: string
    tech: string[]
    url?: string 
}

export type Project = {
    title: string 
    description: string 
    tech: string[]
    img: string
    url?: string 
}