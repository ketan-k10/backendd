"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Camera, Upload, CheckCircle, Trash2, Waves, Plus, Minus, Bot, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function WasteLoggingPage() {
  const [wasteEntries, setWasteEntries] = useState([
    { id: 1, type: "Plastic Bottles", quantity: 0, category: "plastic" },
  ])
  const [showSuccess, setShowSuccess] = useState(false)
  const [showChatbot, setShowChatbot] = useState(false)

  const wasteCategories = [
    { value: "plastic", label: "Plastic", color: "bg-red-100 text-red-800" },
    { value: "metal", label: "Metal", color: "bg-gray-100 text-gray-800" },
    { value: "organic", label: "Organic", color: "bg-green-100 text-green-800" },
    { value: "glass", label: "Glass", color: "bg-blue-100 text-blue-800" },
    { value: "paper", label: "Paper", color: "bg-yellow-100 text-yellow-800" },
    { value: "other", label: "Other", color: "bg-purple-100 text-purple-800" },
  ]

  const commonWasteTypes = {
    plastic: ["Plastic Bottles", "Plastic Bags", "Food Containers", "Straws", "Bottle Caps"],
    metal: ["Aluminum Cans", "Metal Caps", "Wire", "Small Metal Objects"],
    organic: ["Food Waste", "Seaweed", "Wood Pieces", "Leaves"],
    glass: ["Glass Bottles", "Broken Glass", "Glass Containers"],
    paper: ["Paper Cups", "Newspapers", "Cardboard", "Tissues"],
    other: ["Cigarette Butts", "Rope", "Fabric", "Electronics"],
  }

  const addWasteEntry = () => {
    setWasteEntries([
      ...wasteEntries,
      {
        id: Date.now(),
        type: "",
        quantity: 0,
        category: "plastic",
      },
    ])
  }

  const removeWasteEntry = (id) => {
    setWasteEntries(wasteEntries.filter((entry) => entry.id !== id))
  }

  const updateWasteEntry = (id, field, value) => {
    setWasteEntries(wasteEntries.map((entry) => (entry.id === id ? { ...entry, [field]: value } : entry)))
  }

  const handleSubmit = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
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
              <Link href="/dashboard" className="text-gray-700 hover:text-green-600 transition-colors">
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Log Collected Waste</h1>
          <p className="text-xl text-gray-600">Record the waste you've collected to track your environmental impact</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Info */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trash2 className="w-5 h-5 text-green-600" />
                  Current Event: Juhu Beach Cleanup Drive
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Date:</span> Jan 15, 2024
                  </div>
                  <div>
                    <span className="font-medium">Time:</span> 07:00 AM - 10:00 AM
                  </div>
                  <div>
                    <span className="font-medium">Location:</span> Juhu Beach
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Waste Entries */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Waste Collection Details</CardTitle>
                  <Button
                    onClick={addWasteEntry}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white rounded-full"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Item
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {wasteEntries.map((entry, index) => (
                  <div key={entry.id} className="p-4 border border-gray-200 rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">Item #{index + 1}</h4>
                      {wasteEntries.length > 1 && (
                        <Button
                          onClick={() => removeWasteEntry(entry.id)}
                          size="sm"
                          variant="outline"
                          className="text-red-600 hover:text-red-700 rounded-full"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`category-${entry.id}`}>Category</Label>
                        <Select
                          value={entry.category}
                          onValueChange={(value) => updateWasteEntry(entry.id, "category", value)}
                        >
                          <SelectTrigger className="rounded-full">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {wasteCategories.map((category) => (
                              <SelectItem key={category.value} value={category.value}>
                                <div className="flex items-center gap-2">
                                  <Badge className={category.color}>{category.label}</Badge>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`type-${entry.id}`}>Waste Type</Label>
                        <Select value={entry.type} onValueChange={(value) => updateWasteEntry(entry.id, "type", value)}>
                          <SelectTrigger className="rounded-full">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            {commonWasteTypes[entry.category]?.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`quantity-${entry.id}`}>Quantity</Label>
                        <Input
                          id={`quantity-${entry.id}`}
                          type="number"
                          min="0"
                          value={entry.quantity}
                          onChange={(e) => updateWasteEntry(entry.id, "quantity", Number.parseInt(e.target.value) || 0)}
                          className="rounded-full"
                          placeholder="0"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Photo Upload */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-green-600" />
                  Photo Evidence (Optional)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Click to upload photos of collected waste</p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                  <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white rounded-full">Choose Files</Button>
                </div>
              </CardContent>
            </Card>

            {/* Additional Notes */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Additional Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Add any additional observations or notes about the waste collected..."
                  className="min-h-24 rounded-lg border-gray-200 focus:border-green-500"
                />
              </CardContent>
            </Card>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-full py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Submit Waste Log
            </Button>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Today's Collection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Items</span>
                  <span className="font-semibold text-2xl text-green-600">
                    {wasteEntries.reduce((sum, entry) => sum + entry.quantity, 0)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Categories</span>
                  <span className="font-semibold text-2xl text-blue-600">
                    {new Set(wasteEntries.map((entry) => entry.category)).size}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Category Breakdown */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Category Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {wasteCategories.map((category) => {
                  const count = wasteEntries
                    .filter((entry) => entry.category === category.value)
                    .reduce((sum, entry) => sum + entry.quantity, 0)

                  return (
                    <div key={category.value} className="flex items-center justify-between">
                      <Badge className={category.color}>{category.label}</Badge>
                      <span className="font-medium">{count}</span>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">💡 Logging Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-green-700">
                <p>• Count similar items together for efficiency</p>
                <p>• Take photos for verification and impact tracking</p>
                <p>• Separate items by material type when possible</p>
                <p>• Note any unusual or hazardous waste separately</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="max-w-md mx-4 border-0 shadow-2xl bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Waste Log Submitted Successfully!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for contributing to a cleaner environment. Your data has been recorded.
                </p>
                <Button
                  onClick={() => setShowSuccess(false)}
                  className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
                >
                  Continue
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
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
