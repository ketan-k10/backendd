"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Trophy,
  Brain,
  Waves,
  Fish,
  Recycle,
  ChevronRight,
  CheckCircle,
  XCircle,
  Star,
  Target,
  Lightbulb,
  RotateCcw,
} from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LearningHubPage() {
  const [currentQuiz, setCurrentQuiz] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completedModules, setCompletedModules] = useState([1, 2])
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  const learningModules = [
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

  const quizQuestions = [
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

  const recyclingFacts = [
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

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    setShowResult(true)
    if (answerIndex === quizQuestions[currentQuiz].correct) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuiz < quizQuestions.length - 1) {
      setCurrentQuiz(currentQuiz + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const resetQuiz = () => {
    setCurrentQuiz(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
  }

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const userProgress = {
    totalPoints: 1250,
    weeklyModules: 3,
    totalModules: 5,
    knowledgeRank: 12,
    streak: 7,
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 dark:from-[#0D1117] dark:to-[#1E1E1E]">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-[#0D1117]/90 backdrop-blur-md border-b border-green-100 dark:border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800 dark:text-[#C9D1D9]">CleanWave</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="text-gray-700 dark:text-[#C9D1D9] hover:text-green-600 dark:hover:text-[#58A6FF] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/events"
                className="text-gray-700 dark:text-[#C9D1D9] hover:text-green-600 dark:hover:text-[#58A6FF] transition-colors"
              >
                Events
              </Link>
              <Link
                href="/dashboard"
                className="text-gray-700 dark:text-[#C9D1D9] hover:text-green-600 dark:hover:text-[#58A6FF] transition-colors"
              >
                Dashboard
              </Link>
              <Link href="/learning" className="text-green-600 dark:text-[#58A6FF] font-semibold">
                Learning Hub
              </Link>
              <Link
                href="/profile"
                className="text-gray-700 dark:text-[#C9D1D9] hover:text-green-600 dark:hover:text-[#58A6FF] transition-colors"
              >
                Profile
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Button className="bg-green-600 hover:bg-green-700 dark:bg-[#58A6FF] dark:hover:bg-blue-600 text-white rounded-full px-6">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-[#C9D1D9] mb-4">🎓 Learning Hub</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Expand your knowledge and earn points while learning about marine conservation
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-[#1E1E1E]/90 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-[#C9D1D9] mb-1">
                {userProgress.totalPoints}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Knowledge Points</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 dark:bg-[#1E1E1E]/90 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-[#C9D1D9] mb-1">
                {userProgress.weeklyModules}/{userProgress.totalModules}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Modules This Week</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 dark:bg-[#1E1E1E]/90 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-[#C9D1D9] mb-1">
                #{userProgress.knowledgeRank}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Knowledge Rank</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 dark:bg-[#1E1E1E]/90 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-[#C9D1D9] mb-1">{userProgress.streak}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Day Streak</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="modules" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 dark:bg-[#1E1E1E]">
            <TabsTrigger
              value="modules"
              className="dark:data-[state=active]:bg-[#58A6FF] dark:data-[state=active]:text-white"
            >
              Learning Modules
            </TabsTrigger>
            <TabsTrigger
              value="quiz"
              className="dark:data-[state=active]:bg-[#58A6FF] dark:data-[state=active]:text-white"
            >
              Daily Quiz
            </TabsTrigger>
            <TabsTrigger
              value="facts"
              className="dark:data-[state=active]:bg-[#58A6FF] dark:data-[state=active]:text-white"
            >
              Myth Busters
            </TabsTrigger>
          </TabsList>

          {/* Learning Modules */}
          <TabsContent value="modules" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {learningModules.map((module) => (
                <Card
                  key={module.id}
                  className="border-0 shadow-lg bg-white/80 dark:bg-[#1E1E1E]/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${module.color} rounded-lg flex items-center justify-center`}>
                        <module.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        {module.completed && <CheckCircle className="w-5 h-5 text-green-500" />}
                        <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                          +{module.points} pts
                        </Badge>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-[#C9D1D9] mb-2">{module.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{module.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">📚 {module.duration}</span>
                      <Button
                        size="sm"
                        className={`${module.completed ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"} text-white rounded-full`}
                        disabled={module.completed}
                      >
                        {module.completed ? "Completed" : "Start Learning"}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Daily Quiz */}
          <TabsContent value="quiz" className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-[#1E1E1E]/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-[#C9D1D9]">
                  <Brain className="w-5 h-5 text-purple-500" />
                  Daily Ocean Knowledge Quiz
                </CardTitle>
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 dark:text-gray-400">
                    Question {currentQuiz + 1} of {quizQuestions.length}
                  </p>
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                    Score: {score}/{quizQuestions.length}
                  </Badge>
                </div>
                <Progress value={((currentQuiz + 1) / quizQuestions.length) * 100} className="h-2" />
              </CardHeader>
              <CardContent className="space-y-6">
                {currentQuiz < quizQuestions.length ? (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-[#C9D1D9]">
                      {quizQuestions[currentQuiz].question}
                    </h3>

                    <div className="grid gap-3">
                      {quizQuestions[currentQuiz].options.map((option, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className={`p-4 h-auto text-left justify-start transition-all ${
                            showResult
                              ? index === quizQuestions[currentQuiz].correct
                                ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                                : selectedAnswer === index
                                  ? "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400"
                                  : "opacity-50"
                              : "hover:bg-gray-50 dark:hover:bg-gray-800"
                          }`}
                          onClick={() => !showResult && handleQuizAnswer(index)}
                          disabled={showResult}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                showResult && index === quizQuestions[currentQuiz].correct
                                  ? "border-green-500 bg-green-500"
                                  : showResult &&
                                      selectedAnswer === index &&
                                      index !== quizQuestions[currentQuiz].correct
                                    ? "border-red-500 bg-red-500"
                                    : "border-gray-300"
                              }`}
                            >
                              {showResult && index === quizQuestions[currentQuiz].correct && (
                                <CheckCircle className="w-4 h-4 text-white" />
                              )}
                              {showResult &&
                                selectedAnswer === index &&
                                index !== quizQuestions[currentQuiz].correct && (
                                  <XCircle className="w-4 h-4 text-white" />
                                )}
                            </div>
                            <span>{option}</span>
                          </div>
                        </Button>
                      ))}
                    </div>

                    {showResult && (
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="w-5 h-5 text-blue-500 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-blue-900 dark:text-blue-400 mb-1">
                              {selectedAnswer === quizQuestions[currentQuiz].correct ? "Correct!" : "Not quite right"}
                            </h4>
                            <p className="text-blue-800 dark:text-blue-300 text-sm">
                              {quizQuestions[currentQuiz].explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={resetQuiz}
                        className="dark:border-gray-700 dark:text-[#C9D1D9] dark:hover:bg-gray-800"
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Restart Quiz
                      </Button>
                      {showResult && (
                        <Button
                          onClick={nextQuestion}
                          className="bg-purple-600 hover:bg-purple-700 text-white"
                          disabled={currentQuiz === quizQuestions.length - 1}
                        >
                          Next Question
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-[#C9D1D9] mb-2">Quiz Complete!</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      You scored {score} out of {quizQuestions.length} questions correctly.
                    </p>
                    <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 text-lg px-4 py-2">
                      +{score * 25} Knowledge Points Earned!
                    </Badge>
                    <div className="mt-6">
                      <Button onClick={resetQuiz} className="bg-purple-600 hover:bg-purple-700 text-white">
                        Take Quiz Again
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Myth Busters */}
          <TabsContent value="facts" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {recyclingFacts.map((fact, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg bg-white/80 dark:bg-[#1E1E1E]/90 backdrop-blur-sm cursor-pointer transition-all hover:shadow-xl"
                  onClick={() => toggleCard(index)}
                >
                  <CardContent className="p-6 h-48 relative overflow-hidden">
                    <div
                      className={`absolute inset-0 p-6 transition-transform duration-500 ${
                        flippedCards.includes(index) ? "transform rotate-y-180" : ""
                      }`}
                    >
                      {!flippedCards.includes(index) ? (
                        <div className="h-full flex flex-col justify-center">
                          <div className="text-center mb-4">
                            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                              <XCircle className="w-6 h-6 text-red-500" />
                            </div>
                            <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 mb-3">
                              MYTH
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-[#C9D1D9] text-center">
                            {fact.myth}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                            Click to reveal the truth
                          </p>
                        </div>
                      ) : (
                        <div className="h-full flex flex-col justify-center">
                          <div className="text-center mb-4">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                              <CheckCircle className="w-6 h-6 text-green-500" />
                            </div>
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 mb-3">
                              FACT
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-[#C9D1D9] text-center mb-2">
                            {fact.fact}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{fact.detail}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
