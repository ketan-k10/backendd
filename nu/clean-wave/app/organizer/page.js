"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from "recharts"
import {
  MapPin,
  Calendar,
  Users,
  Trash2,
  Waves,
  Trophy,
  QrCode,
  Bot,
  Sparkles,
  Download,
  Plus,
  Award,
  TrendingUp,
  BarChart3,
  MessageCircle,
  Mail,
  FileText,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function OrganizerDashboard() {
  const [showChatbot, setShowChatbot] = useState(false)
  const [showCreateEvent, setShowCreateEvent] = useState(false)
  const [showAITools, setShowAITools] = useState(false)
  const [aiPrompt, setAiPrompt] = useState("")
  const [generatedContent, setGeneratedContent] = useState("")

  // Sample data for charts
  const wasteTypeData = [
    { name: "Plastic", value: 45, color: "#ef4444" },
    { name: "Metal", value: 20, color: "#6b7280" },
    { name: "Organic", value: 15, color: "#22c55e" },
    { name: "Glass", value: 12, color: "#3b82f6" },
    { name: "Paper", value: 8, color: "#eab308" },
  ]

  const cleanupTrendsData = [
    { month: "Jan", waste: 120, volunteers: 45 },
    { month: "Feb", waste: 150, volunteers: 52 },
    { month: "Mar", waste: 180, volunteers: 68 },
    { month: "Apr", waste: 220, volunteers: 75 },
    { month: "May", waste: 280, volunteers: 89 },
    { month: "Jun", waste: 320, volunteers: 95 },
  ]

  const monthlyWasteData = [
    { category: "Plastic", amount: 145 },
    { category: "Metal", amount: 89 },
    { category: "Organic", amount: 67 },
    { category: "Glass", amount: 45 },
    { category: "Paper", amount: 34 },
    { category: "Other", amount: 23 },
  ]

  const organizerStats = [
    { label: "Active Events", value: "12", change: "+3", icon: Calendar, color: "text-blue-600" },
    { label: "Live Volunteers", value: "143", change: "+28", icon: Users, color: "text-green-600" },
    { label: "Waste Collected", value: "2.4T", change: "+0.3T", icon: Trash2, color: "text-purple-600" },
    { label: "Beaches Cleaned", value: "8", change: "+2", icon: Waves, color: "text-cyan-600" },
  ]

  const activeEvents = [
    { name: "Juhu Beach Cleanup", volunteers: 45, status: "Live", time: "2 hours ago" },
    { name: "Versova Beach Drive", volunteers: 32, status: "Live", time: "1 hour ago" },
    { name: "Marine Drive Cleanup", volunteers: 28, status: "Starting Soon", time: "In 30 mins" },
  ]

  const topVolunteers = [
    { rank: 1, name: "Priya Sharma", points: 2450, events: 28, badge: "🏆" },
    { rank: 2, name: "Rahul Patel", points: 2180, events: 25, badge: "🥈" },
    { rank: 3, name: "Anita Desai", points: 1950, events: 22, badge: "🥉" },
  ]

  const wasteTypeConfig = {
    Plastic: { label: "Plastic", color: "#ef4444" },
    Metal: { label: "Metal", color: "#6b7280" },
    Organic: { label: "Organic", color: "#22c55e" },
    Glass: { label: "Glass", color: "#3b82f6" },
    Paper: { label: "Paper", color: "#eab308" },
  }

  const monthlyWasteConfig = {
    amount: { label: "Waste (kg)", color: "#22c55e" },
  }

  const trendsConfig = {
    waste: { label: "Waste Collected (kg)", color: "#22c55e" },
    volunteers: { label: "Volunteers", color: "#3b82f6" },
  }

  const handleGenerateContent = (type) => {
    setShowAITools(true)
    switch (type) {
      case "social":
        setAiPrompt(
          "Create an engaging social media post about our beach cleanup drive at Juhu Beach where 45 volunteers collected 145kg of plastic waste...",
        )
        break
      case "email":
        setAiPrompt(
          "Draft a volunteer appreciation email for our recent beach cleanup event, highlighting their impact and inviting them to the next cleanup...",
        )
        break
      case "certificate":
        setAiPrompt(
          "Generate a CSR certificate template for corporate sponsors who supported our beach cleanup initiative...",
        )
        break
      case "report":
        setAiPrompt(
          "Create an environmental impact report showing our cleanup statistics: 2.4T waste collected, 127 beaches cleaned, 1,250 volunteers...",
        )
        break
    }
  }

  const simulateAIGeneration = () => {
    setGeneratedContent(
      "🤖 AI is generating your content... This would integrate with OpenAI API or similar LLM service to create personalized content based on your prompt.",
    )
    setTimeout(() => {
      if (aiPrompt.includes("social media")) {
        setGeneratedContent(`🌊 AMAZING NEWS! 🌊

Our incredible volunteers at Juhu Beach just completed another successful cleanup drive! 

✨ 45 dedicated eco-warriors
🗑️ 145kg of plastic waste removed
🐢 Countless marine lives protected
🌍 One step closer to cleaner oceans

Thank you to everyone who joined us today! Your efforts are making a real difference for Mumbai's coastline. 

Next cleanup: Versova Beach - Saturday 7 AM
Register now! 👆

#CleanWave #MumbaiBeaches #OceanConservation #PlasticFree #VolunteerLife`)
      } else if (aiPrompt.includes("email")) {
        setGeneratedContent(`Subject: Thank You for Making Waves of Change! 🌊

Dear Amazing Volunteer,

What an incredible day at Juhu Beach! Thanks to dedicated volunteers like you, we achieved something truly remarkable:

🎉 145kg of plastic waste removed from our beautiful coastline
🐢 Countless marine creatures now have a safer home
🌍 Mumbai's beaches are one step cleaner

Your commitment to environmental conservation is inspiring. Every piece of trash you collected, every moment you spent under the sun, and every step you took on the sand has made a lasting impact.

Ready for the next adventure? Join us at Versova Beach this Saturday at 7 AM!

With gratitude and ocean love,
The CleanWave Team`)
      } else {
        setGeneratedContent(
          "Generated content would appear here based on your specific prompt and AI model integration.",
        )
      }
    }, 2000)
  }

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
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Main
              </Link>
              <span className="text-green-600 font-semibold">Organizer Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <Button
                onClick={() => setShowCreateEvent(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Event
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">Admin</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Organizer Dashboard</h1>
          <p className="text-xl text-gray-600">Manage beach cleanup events and track community impact</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {organizerStats.map((stat, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <Badge className="bg-green-100 text-green-800 text-xs">{stat.change}</Badge>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Tools Section */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-500" />
              AI Content Generator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button
                onClick={() => handleGenerateContent("social")}
                variant="outline"
                className="h-20 flex flex-col items-center justify-center gap-2 rounded-xl border-purple-200 hover:bg-purple-50"
              >
                <Sparkles className="w-6 h-6 text-purple-500" />
                <span className="text-sm font-medium">Generate Social Post</span>
              </Button>
              <Button
                onClick={() => handleGenerateContent("email")}
                variant="outline"
                className="h-20 flex flex-col items-center justify-center gap-2 rounded-xl border-blue-200 hover:bg-blue-50"
              >
                <Mail className="w-6 h-6 text-blue-500" />
                <span className="text-sm font-medium">Draft Volunteer Email</span>
              </Button>
              <Button
                onClick={() => handleGenerateContent("certificate")}
                variant="outline"
                className="h-20 flex flex-col items-center justify-center gap-2 rounded-xl border-green-200 hover:bg-green-50"
              >
                <Award className="w-6 h-6 text-green-500" />
                <span className="text-sm font-medium">Generate CSR Certificate</span>
              </Button>
              <Button
                onClick={() => handleGenerateContent("report")}
                variant="outline"
                className="h-20 flex flex-col items-center justify-center gap-2 rounded-xl border-orange-200 hover:bg-orange-50"
              >
                <FileText className="w-6 h-6 text-orange-500" />
                <span className="text-sm font-medium">Create Impact Report</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Dashboard */}
          <div className="lg:col-span-2 space-y-8">
            {/* Real-time Volunteer Heatmap */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  Live Volunteer Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Mumbai coastline activity map"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover opacity-70"
                  />
                  {/* Activity Markers */}
                  <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-red-400/60 rounded-full blur-sm animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-yellow-400/60 rounded-full blur-sm"></div>
                  <div className="absolute top-3/4 right-1/3 w-20 h-20 bg-green-400/60 rounded-full blur-sm animate-pulse"></div>

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Volunteer Activity</h4>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <span>High Activity (20+ volunteers)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <span>Medium Activity (10-20)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span>Low Activity (1-10)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Waste Analytics Charts */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Waste Type Distribution */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Trash2 className="w-5 h-5 text-green-600" />
                    Waste Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={wasteTypeConfig} className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={wasteTypeData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {wasteTypeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Monthly Collection */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    Monthly Collection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={monthlyWasteConfig} className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyWasteData}>
                        <XAxis dataKey="category" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="amount" fill="#22c55e" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Cleanup Trends */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Cleanup Trends Over Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={trendsConfig} className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={cleanupTrendsData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="waste"
                        stroke="#22c55e"
                        strokeWidth={3}
                        dot={{ fill: "#22c55e", strokeWidth: 2, r: 4 }}
                        name="Waste Collected (kg)"
                      />
                      <Line
                        type="monotone"
                        dataKey="volunteers"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                        name="Volunteers"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Events */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  Active Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeEvents.map((event, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{event.name}</h4>
                      <Badge
                        className={
                          event.status === "Live" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                        }
                      >
                        {event.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>
                        {event.volunteers} volunteers • {event.time}
                      </span>
                      <Button size="sm" variant="outline" className="rounded-full">
                        <QrCode className="w-3 h-3 mr-1" />
                        QR
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Volunteers */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Top Volunteers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {topVolunteers.map((volunteer, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm">
                      <span className="text-lg">{volunteer.badge}</span>
                    </div>
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-blue-500 text-white text-xs">
                        {volunteer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{volunteer.name}</div>
                      <div className="text-xs text-gray-600">
                        {volunteer.events} events • {volunteer.points} pts
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-green-800">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Export Event Data
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-full justify-start border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Manage Volunteers
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-full justify-start border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Create Event Modal */}
      {showCreateEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-2xl w-full border-0 shadow-2xl bg-white max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-green-600" />
                Create New Cleanup Event
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="eventName">Event Name</Label>
                  <Input id="eventName" placeholder="e.g., Juhu Beach Cleanup Drive" className="rounded-full" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="eventDate">Date & Time</Label>
                  <Input id="eventDate" type="datetime-local" className="rounded-full" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Beach Location</Label>
                <Select>
                  <SelectTrigger className="rounded-full">
                    <SelectValue placeholder="Select beach location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="juhu">Juhu Beach</SelectItem>
                    <SelectItem value="versova">Versova Beach</SelectItem>
                    <SelectItem value="marine">Marine Drive</SelectItem>
                    <SelectItem value="chowpatty">Chowpatty Beach</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="maxVolunteers">Max Volunteers</Label>
                  <Input id="maxVolunteers" type="number" placeholder="50" className="rounded-full" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (hours)</Label>
                  <Input id="duration" type="number" placeholder="3" className="rounded-full" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Event Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the cleanup event, meeting point, what to bring..."
                  className="min-h-24 rounded-lg"
                />
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => setShowCreateEvent(false)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-full"
                >
                  Create Event
                </Button>
                <Button onClick={() => setShowCreateEvent(false)} variant="outline" className="flex-1 rounded-full">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* AI Tools Modal */}
      {showAITools && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-4xl w-full border-0 shadow-2xl bg-white max-h-[90vh] overflow-y-auto">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                AI Content Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="aiPrompt">Content Prompt</Label>
                    <Textarea
                      id="aiPrompt"
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      placeholder="Describe what content you want to generate..."
                      className="min-h-32 rounded-lg"
                    />
                  </div>
                  <Button
                    onClick={simulateAIGeneration}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Content
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Generated Content</Label>
                    <div className="min-h-32 p-4 bg-gray-50 rounded-lg border">
                      {generatedContent ? (
                        <pre className="whitespace-pre-wrap text-sm text-gray-700">{generatedContent}</pre>
                      ) : (
                        <p className="text-gray-500 text-sm">Generated content will appear here...</p>
                      )}
                    </div>
                  </div>
                  {generatedContent && (
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full">
                        Copy to Clipboard
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={() => setShowAITools(false)} variant="outline" className="rounded-full">
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

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
                  Hi! I can help you with event management, volunteer coordination, and environmental insights. What
                  would you like to know?
                </p>
              </div>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start text-xs rounded-full">
                  📊 How to analyze cleanup data?
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-xs rounded-full">
                  👥 Best practices for volunteer management
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-xs rounded-full">
                  🌍 Environmental impact calculations
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
