import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MapPin, Calendar, Users, QrCode, Navigation, Search, Filter, Waves } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Event } from "@/types"

const activeEvents: Event[] = [
  {
    id: 1,
    title: "Juhu Beach Cleanup Drive",
    date: "2024-01-15",
    time: "07:00 AM - 10:00 AM",
    location: "Juhu Beach, Mumbai",
    coordinates: { lat: 19.099, lng: 72.8258 },
    volunteers: 45,
    maxVolunteers: 60,
    status: "Active",
    organizer: "Mumbai Coastal Guard",
  },
  {
    id: 2,
    title: "Marine Drive Coastal Cleanup",
    date: "2024-01-18",
    time: "06:30 AM - 09:30 AM",
    location: "Marine Drive, Mumbai",
    coordinates: { lat: 18.9434, lng: 72.8234 },
    volunteers: 32,
    maxVolunteers: 50,
    status: "Upcoming",
    organizer: "Green Mumbai Initiative",
  },
  {
    id: 3,
    title: "Versova Beach Community Drive",
    date: "2024-01-22",
    time: "07:30 AM - 10:30 AM",
    location: "Versova Beach, Mumbai",
    coordinates: { lat: 19.1368, lng: 72.8119 },
    volunteers: 28,
    maxVolunteers: 40,
    status: "Upcoming",
    organizer: "Versova Residents Association",
  },
]

export default function EventsPage() {
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
              <Link href="/events" className="text-green-600 dark:text-[#58A6FF] font-semibold">
                Events
              </Link>
              <Link
                href="/dashboard"
                className="text-gray-700 dark:text-[#C9D1D9] hover:text-green-600 dark:hover:text-[#58A6FF] transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/profile"
                className="text-gray-700 dark:text-[#C9D1D9] hover:text-green-600 dark:hover:text-[#58A6FF] transition-colors"
              >
                Profile
              </Link>
              <Link
                href="/organizer"
                className="text-gray-700 dark:text-[#C9D1D9] hover:text-green-600 dark:hover:text-[#58A6FF] transition-colors"
              >
                Organizer
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-[#C9D1D9] mb-4">
            Beach Cleanup Events
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Find and join cleanup drives near you</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map View */}
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-[#1E1E1E]/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-[#C9D1D9]">
                  <MapPin className="w-5 h-5 text-green-600 dark:text-[#58A6FF]" />
                  Beach Locations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-96 bg-gradient-to-br from-blue-100 to-green-100 dark:from-gray-800 dark:to-gray-700 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Mumbai beaches map"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover opacity-80 dark:opacity-60"
                  />
                  {/* Map Markers */}
                  <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                  <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>

                  {/* Map Legend */}
                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-[#1E1E1E]/90 backdrop-blur-sm rounded-lg p-3 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-[#C9D1D9]">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>Active Event</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-[#C9D1D9]">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Upcoming Event</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-[#C9D1D9]">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Completed Event</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-0 shadow-lg bg-white/80 dark:bg-[#1E1E1E]/90 backdrop-blur-sm hover:shadow-xl transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <QrCode className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-[#C9D1D9] mb-2">Check-in via QR Code</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Scan the QR code at the event location to check in
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700 dark:bg-[#58A6FF] dark:hover:bg-blue-600 text-white rounded-full">
                    Scan QR Code
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-[#1E1E1E]/90 backdrop-blur-sm hover:shadow-xl transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Navigation className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-[#C9D1D9] mb-2">GPS Check-in</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Use your location to automatically check in to nearby events
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-green-600 dark:hover:bg-green-700 text-white rounded-full">
                    Enable GPS
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-6">
            {/* Search and Filter */}
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-[#1E1E1E]/90 backdrop-blur-sm">
              <CardContent className="p-4 space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
                  <Input
                    placeholder="Search events..."
                    className="pl-10 rounded-full border-gray-200 dark:border-gray-700 dark:bg-[#0D1117] dark:text-[#C9D1D9] focus:border-green-500 dark:focus:border-[#58A6FF]"
                  />
                </div>
                <Button
                  variant="outline"
                  className="w-full rounded-full border-gray-200 dark:border-gray-700 dark:text-[#C9D1D9] hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filter Events
                </Button>
              </CardContent>
            </Card>

            {/* Active Events List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-[#C9D1D9]">Active Cleanup Drives</h3>
              {activeEvents.map((event) => (
                <Card
                  key={event.id}
                  className="border-0 shadow-lg bg-white/80 dark:bg-[#1E1E1E]/90 backdrop-blur-sm hover:shadow-xl transition-all"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-[#C9D1D9]">{event.title}</h4>
                        <Badge
                          className={`${
                            event.status === "Active"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-[#58A6FF]"
                          }`}
                        >
                          {event.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>
                          {new Date(event.date).toLocaleDateString()} • {event.time}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span>
                          {event.volunteers}/{event.maxVolunteers} volunteers
                        </span>
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all"
                        style={{ width: `${(event.volunteers / event.maxVolunteers) * 100}%` }}
                      ></div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        className="flex-1 bg-green-600 hover:bg-green-700 dark:bg-[#58A6FF] dark:hover:bg-blue-600 text-white rounded-full"
                        disabled={event.status === "Active"}
                      >
                        {event.status === "Active" ? "Joined" : "Join Event"}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full dark:border-gray-700 dark:text-[#C9D1D9] dark:hover:bg-gray-800"
                      >
                        <MapPin className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Create Event Button */}
            <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 dark:from-[#58A6FF] dark:to-green-500 dark:hover:from-blue-600 dark:hover:to-green-600 text-white rounded-full py-6 text-lg font-semibold">
              Create New Event
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
