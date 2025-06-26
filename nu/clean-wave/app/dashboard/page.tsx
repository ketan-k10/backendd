"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from "recharts"
import { Trophy, TrendingUp, Users, Trash2, Waves, Award, Calendar, Bot, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [showChatbot, setShowChatbot] = useState(false)

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

  const topVolunteers = [
    { rank: 1, name: "Priya Sharma", points: 2450, events: 28, badge: "🏆" },
    { rank: 2, name: "Rahul Patel", points: 2180, events: 25, badge: "🥈" },
    { rank: 3, name: "Anita Desai", points: 1950, events: 22, badge: "🥉" },
    { rank: 4, name: "Vikram Singh", points: 1720, events: 19, badge: "⭐" },
    { rank: 5, name: "Meera Joshi", points: 1580, events: 17, badge: "⭐" },
    { rank: 6, name: "Arjun Kumar", points: 1420, events: 16, badge: "⭐" },
    { rank: 7, name: "Kavya Nair", points: 1350, events: 15, badge: "⭐" },
    { rank: 8, name: "Rohit Gupta", points: 1280, events: 14, badge: "⭐" },
  ]

  const impactStats = [
    { label: "Total Waste Collected", value: "2.4T", change: "+12%", icon: Trash2, color: "text-red-600" },
    { label: "Active Volunteers", value: "1,250", change: "+8%", icon: Users, color: "text-blue-600" },
    { label: "Beaches Cleaned", value: "127", change: "+15%", icon: Waves, color: "text-green-600" },
    { label: "Events Completed", value: "89", change: "+22%", icon: Calendar, color: "text-purple-600" },
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
              <Link href="/dashboard" className="text-green-600 font-semibold">
                Dashboard
              </Link>
              <Link href="/profile" className="text-gray-700 hover:text-green-600 transition-colors">
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Impact Dashboard</h1>
          <p className="text-xl text-gray-600">Track our collective environmental impact and community progress</p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {impactStats.map((stat, index) => (
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Charts Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Waste Type Distribution */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trash2 className="w-5 h-5 text-green-600" />
                  Waste Type Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
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
                  <div className="space-y-3">
                    {wasteTypeData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                          <span className="text-sm text-gray-700">{item.name}</span>
                        </div>
                        <span className="font-semibold text-gray-900">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Waste Collection */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Monthly Waste Collection (kg)
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
                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Waste Collected (kg)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Volunteers</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Leaderboard */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  Top Volunteers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topVolunteers.map((volunteer) => (
                  <div
                    key={volunteer.rank}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all hover:shadow-md ${
                      volunteer.rank <= 3
                        ? "bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm">
                      <span className="text-lg">{volunteer.badge}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 truncate">{volunteer.name}</div>
                      <div className="text-sm text-gray-600">
                        {volunteer.events} events • {volunteer.points} points
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">#{volunteer.rank}</div>
                    </div>
                  </div>
                ))}

                <Button className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-full">
                  View Full Leaderboard
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-green-800">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/waste-logging">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full justify-start">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Log Waste Collection
                  </Button>
                </Link>
                <Link href="/events">
                  <Button
                    variant="outline"
                    className="w-full rounded-full justify-start border-green-600 text-green-600 hover:bg-green-50"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Join Next Event
                  </Button>
                </Link>
                <Link href="/profile">
                  <Button
                    variant="outline"
                    className="w-full rounded-full justify-start border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    <Award className="w-4 h-4 mr-2" />
                    View My Progress
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Environmental Impact */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-green-50">
              <CardHeader>
                <CardTitle className="text-blue-800">🌍 Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">CO₂ Emissions Prevented</span>
                  <span className="font-bold text-green-600">1.2 tons</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Marine Life Protected</span>
                  <span className="font-bold text-blue-600">~5,000 animals</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Plastic Bottles Recycled</span>
                  <span className="font-bold text-purple-600">12,450</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-xs text-gray-600 italic">
                    "Every piece of waste removed helps preserve our ocean ecosystem for future generations."
                  </p>
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
