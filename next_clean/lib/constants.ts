import type { WasteCategory, LearningModule, QuizQuestion, RecyclingFact } from "@/types"
import { Waves, Fish, Recycle, Target } from "lucide-react"

export const WASTE_CATEGORIES: WasteCategory[] = [
  { value: "plastic", label: "Plastic", color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400" },
  { value: "metal", label: "Metal", color: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400" },
  { value: "organic", label: "Organic", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" },
  { value: "glass", label: "Glass", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" },
  { value: "paper", label: "Paper", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400" },
  { value: "other", label: "Other", color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400" },
]

export const COMMON_WASTE_TYPES = {
  plastic: ["Plastic Bottles", "Plastic Bags", "Food Containers", "Straws", "Bottle Caps"],
  metal: ["Aluminum Cans", "Metal Caps", "Wire", "Small Metal Objects"],
  organic: ["Food Waste", "Seaweed", "Wood Pieces", "Leaves"],
  glass: ["Glass Bottles", "Broken Glass", "Glass Containers"],
  paper: ["Paper Cups", "Newspapers", "Cardboard", "Tissues"],
  other: ["Cigarette Butts", "Rope", "Fabric", "Electronics"],
}

export const LEARNING_MODULES: LearningModule[] = [
  {
    id: 1,
    title: "Why Marine Waste Matters",
    description: "Understanding the impact of ocean pollution",
    icon: Waves,
    type: "infographic",
    completed: true,
    points: 50,
    duration: "5 min",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Mumbai's Endangered Species",
    description: "Meet the marine life we're protecting",
    icon: Fish,
    type: "carousel",
    completed: true,
    points: 75,
    duration: "8 min",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Recycling Myths Busted",
    description: "Separating fact from fiction",
    icon: Recycle,
    type: "flipcards",
    completed: false,
    points: 100,
    duration: "10 min",
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Microplastics Deep Dive",
    description: "The invisible threat in our oceans",
    icon: Target,
    type: "interactive",
    completed: false,
    points: 125,
    duration: "12 min",
    color: "bg-orange-500",
  },
]

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "What percentage of ocean plastic comes from beaches?",
    options: ["20%", "40%", "60%", "80%"],
    correct: 2,
    explanation:
      "Studies show that approximately 60% of ocean plastic pollution originates from beach and coastal activities.",
  },
  {
    question: "How long does a plastic bottle take to decompose in the ocean?",
    options: ["50 years", "100 years", "450 years", "1000 years"],
    correct: 2,
    explanation: "Plastic bottles can take up to 450 years to fully decompose in marine environments.",
  },
  {
    question: "Which marine animal is most affected by plastic pollution in Mumbai waters?",
    options: ["Dolphins", "Sea Turtles", "Whales", "Seahorses"],
    correct: 1,
    explanation:
      "Sea turtles are particularly vulnerable as they often mistake plastic bags for jellyfish, their primary food source.",
  },
]

export const RECYCLING_FACTS: RecyclingFact[] = [
  {
    myth: "All plastic can be recycled",
    fact: "Only about 9% of all plastic ever produced has been recycled",
    detail: "Most plastics can only be recycled 1-2 times before quality degrades",
  },
  {
    myth: "Biodegradable plastic is always better",
    fact: "Biodegradable plastics need specific conditions to break down",
    detail: "In marine environments, they can persist just as long as regular plastic",
  },
  {
    myth: "Recycling symbols mean it's recyclable",
    fact: "Numbers 3, 6, and 7 are rarely accepted by recycling programs",
    detail: "Only types 1, 2, and 5 are commonly recyclable in most facilities",
  },
  {
    myth: "Washing containers isn't necessary",
    fact: "Contaminated recyclables often end up in landfills",
    detail: "Food residue can contaminate entire batches of recyclable materials",
  },
]

export const EDUCATIONAL_TIPS = [
  "Did you know? 1kg of recycled plastic saves 3.8L of oil and reduces CO2 emissions by 2kg!",
  "Microplastics are found in 90% of sea salt brands worldwide. Every cleanup helps reduce this contamination.",
  "A single plastic bottle can take up to 450 years to decompose in marine environments.",
  "Sea turtles mistake plastic bags for jellyfish, their primary food source. Your cleanup saves lives!",
  "Recycling 1 ton of plastic saves 7.4 cubic yards of landfill space.",
]
