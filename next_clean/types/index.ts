export interface User {
  id: string
  name: string
  email: string
  joinDate: string
  location: string
  totalEvents: number
  totalWaste: string
  points: number
  knowledgePoints?: number
  rank: number
  knowledgeRank?: number
  level: string
  avatar?: string
}

export interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  coordinates?: {
    lat: number
    lng: number
  }
  volunteers: number
  maxVolunteers: number
  status: "Active" | "Upcoming" | "Completed"
  organizer?: string
  image?: string
  description?: string
}

export interface Badge {
  name: string
  icon: string
  description: string
  earned: boolean
  date?: string
  progress?: number
}

export interface WasteEntry {
  id: number
  type: string
  quantity: number
  category: "plastic" | "metal" | "organic" | "glass" | "paper" | "other"
}

export interface WasteCategory {
  value: string
  label: string
  color: string
}

export interface LearningModule {
  id: number
  title: string
  description: string
  icon: any
  type: "infographic" | "carousel" | "flipcards" | "interactive"
  completed: boolean
  points: number
  duration: string
  color: string
}

export interface QuizQuestion {
  question: string
  options: string[]
  correct: number
  explanation: string
}

export interface RecyclingFact {
  myth: string
  fact: string
  detail: string
}

export interface ParticipationEvent {
  id: number
  event: string
  date: string
  location: string
  wasteCollected: string
  duration: string
  volunteers: number
  status: string
}

export interface Stat {
  label: string
  value: string
  icon: any
  change?: string
  color?: string
}
