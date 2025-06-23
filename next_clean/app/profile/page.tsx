"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Download, Edit, MapPin, Calendar, Trophy, Star, Award, Waves, Target, Users, Bot, MessageCircle } from 'lucide-react'
import Link from "next/link"

export default function ProfilePage() {
  const [showChatbot, setShowChatbot] = useState(false)

  const userProfile = {
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    joinDate: "March 2023",
    location: "Mumbai, Maharashtra",
    totalEvents: 28,
    totalWaste: "145 kg",
    points: 2450,
    rank: 1,
    level: "Eco Champion",
  }

  const badges = [
    {
      name: "First Cleanup",
      icon: "🌊",
      description: "Completed your first beach cleanup",
      earned: true,
      date: "Mar 2023",
    },
    { name: "Waste Warrior", icon: "♻️", description: "Collected over 50kg of waste", earned: true, date: "Jun 2023" },
    { name: "Team Leader", icon: "👥", description: "Led 5 cleanup events", earned: true, date: "Sep 2023" },
    { name: "Eco Champion", icon: "🏆", description: "Top 10 volunteer for 3 months", earned: true, date: "Dec 2023" },
    {
      name: "Plastic Buster",
      icon: "🥤",
      description: "Collected 1000+ plastic items",
      earned: true,
      date: "Jan 2024",
    },
    { name: "Marathon Cleaner", icon: "🏃", description: "Participate in 25+ events", earned: true, date: "Jan 2024" },
    { name: "Ocean Guardian", icon: "🐋", description: "Collect 200kg of waste", earned: false, progress: 72 },
    { name: "Community Builder", icon: "🤝", description: "Recruit 10 new volunteers", earned: false, progress: 60 },
  ]

  const participationHistory = [
    {
      id: 1,
      event: "Juhu Beach Cleanup Drive",
      date: "2024-01-15",
      location: "Juhu Beach",
      wasteCollected: "8.5 kg",
      duration: "3 hours",
      volunteers: 45,
      status: "Completed",
    },
    {
      id: 2,
      event: "Marine Drive Coastal Cleanup",
      date: "2024-01-10",
      location: "Marine Drive",
      wasteCollected: "6.2 kg",
      duration: "2.5 hours",
      volunteers: 32,
      status: "Completed",
    },
    {
      id: 3,
      event: "Versova Beach Community Drive",
      date: "2024-01-05",
      location: "Versova Beach",
      wasteCollected: "12.3 kg",
      duration: "4 hours",
      volunteers: 28,
      status: "Completed",
    },
    {
      id: 4,
      event: "Bandra Bandstand Cleanup",
      date: "2023-12-28",
      location: "Bandra Bandstand",
      wasteCollected: "9.1 kg",
      duration: "3.5 hours",
      volunteers: 38,
      status: "Completed",
    },
    {
      id: 5,
      event: "Chowpatty Beach Drive",
      date: "2023-12-20",
      location: "Chowpatty Beach",
      wasteCollected: "7.8 kg",
      duration: "3 hours",
      volunteers: 42,
      status: "Completed",
    },
  ]

  const nextLevelProgress = 85 // Progress towards next level

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">CleanWave</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link href="/events" className="text-gray-700 hover:text-green-600 transition-colors">
                Events
              </Link>
              <Link href="/dashboard" className="text-gray-700 hover:text-green-600 transition-colors">
                Dashboard
              </Link>
              <Link href="/profile" className="text-green-600 font-semibold">
                Profile
              </Link>
              <Link href="/organizer" className="text-gray-700 hover:text-green-600 transition-colors">
                Organizer
              </Link>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">Sign In</Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Volunteer Profile</h1>
          <p className="text-xl text-gray-600">Track your environmental impact and achievements</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <Avatar className="w-24 h-24 mx-auto border-4 border-green-200">
                    <AvatarImage src="/images/avatar-placeholder.svg" alt={userProfile.name} />
                    <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-white">
                      {userProfile.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 rounded-full"
                  >
                    <Edit className="w-3 h-3" />
                  </Button>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">{userProfile.name}</h2>
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white mb-4">
                  {userProfile.level}
                </Badge>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{userProfile.location}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {userProfile.joinDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Impact Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Global Rank</span>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-600" />
                    <span className="font-bold text-xl text-yellow-600">#{userProfile.rank}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Points</span>
                  <span className="font-bold text-xl text-green-600">{userProfile.points.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Events Joined</span>
                  <span className="font-bold text-xl text-blue-600">{userProfile.totalEvents}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Waste Collected</span>
                  <span className="font-bold text-xl text-purple-600">{userProfile.totalWaste}</span>
                </div>
              </CardContent>
            </Card>

            {/* Level Progress */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">Next Level Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-green-700">Ocean Guardian</span>
                  <span className="text-sm text-green-600">{nextLevelProgress}%</span>
                </div>
                <Progress value={nextLevelProgress} className="h-3" />
                <p className="text-sm text-green-600">Collect 55 more kg of waste to reach the next level!</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Badges Section */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-600" />
                    Badges Earned ({badges.filter((b) => b.earned).length}/{badges.length})
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {badges.map((badge, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg text-center transition-all hover:shadow-md ${
                        badge.earned
                          ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200"
                          : "bg-gray-50 border-2 border-gray-200 opacity-60"
                      }`}
                    >
                      <div className="text-3xl mb-2">{badge.icon}</div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-1">{badge.name}</h4>
                      <p className="text-xs text-gray-600 mb-2">{badge.description}</p>
                      {badge.earned ? (
                        <Badge className="bg-green-100 text-green-800 text-xs">{badge.date}</Badge>
                      ) : (
                        <div className="space-y-1">
                          <Progress value={badge.progress} className="h-1" />
                          <span className="text-xs text-gray-500">{badge.progress}%</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Participation History */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-green-600" />
                    Recent Participation History
                  </CardTitle>
                  <Button variant="outline" size="sm" className="rounded-full">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {participationHistory.map((event, index) => (
                    <div key={event.id}>
                      <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Waves className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 mb-1">{event.event}</h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(event.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Target className="w-3 h-3" />
                              <span>{event.wasteCollected}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span>{event.volunteers} volunteers</span>
                            </div>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">{event.status}</Badge>
                      </div>
                      {index < participationHistory.length - 1 && <Separator className="my-2" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certificates */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-green-600" />
                  Certificates & Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Volunteer Certificate</h4>
                        <p className="text-sm text-gray-600">2023 Annual Recognition</p>
                      </div>
                    </div>
                    <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download Certificate
                    </Button>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-500 rounded-lg flex items-center justify-center">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Impact Report</h4>
                        <p className="text-sm text-gray-600">Personal Environmental Impact</p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full rounded-full border-green-600 text-green-600 hover:bg-green-50"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setShowChatbot(!showChatbot)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white shadow-lg hover:shadow-xl transition-all animate-bounce"
        >
          <Bot className="w-6 h-6" />
        </Button>

        {showChatbot && (
          <Card className="absolute bottom-16 right-0 w-80 border-0 shadow-2xl bg-white">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bot className="w-5 h-5" />
                EcoBot Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-700">
                  Hi! I can help you with waste segregation, safety guidelines, and cleanup tips. What would you like to
                  know?
                </p>
              </div>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start text-xs rounded-full">
                  🗑️ How to segregate medical waste?
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-xs rounded-full">
                  🌊 Learn about microplastics
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-xs rounded-full">
                  🐢 Marine life protection tips
                </Button>
              </div>
              <div className="flex gap-2">
                <Input placeholder="Ask me anything..." className="flex-1 rounded-full text-sm" />
                <Button size="sm" className="rounded-full bg-blue-500 hover:bg-blue-600">
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
