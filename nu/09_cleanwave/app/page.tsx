import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Trash2, Waves, Leaf } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Juhu Beach Cleanup Drive",
      date: "2024-01-15",
      time: "07:00 AM",
      location: "Juhu Beach, Mumbai",
      volunteers: 45,
      maxVolunteers: 60,
    },
    {
      id: 2,
      title: "Marine Drive Coastal Cleanup",
      date: "2024-01-18",
      time: "06:30 AM",
      location: "Marine Drive, Mumbai",
      volunteers: 32,
      maxVolunteers: 50,
    },
    {
      id: 3,
      title: "Versova Beach Community Drive",
      date: "2024-01-22",
      time: "07:30 AM",
      location: "Versova Beach, Mumbai",
      volunteers: 28,
      maxVolunteers: 40,
    },
  ]

  const stats = [
    { label: "Beaches Cleaned", value: "127", icon: Waves },
    { label: "Waste Collected", value: "2.4T", icon: Trash2 },
    { label: "Active Volunteers", value: "1,250", icon: Users },
    { label: "Trees Planted", value: "340", icon: Leaf },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">CleanWave</span>
            </div>
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                🌊 Making Mumbai's Beaches Cleaner
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Join the movement to clean{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  Mumbai's beaches
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Be part of a community-driven initiative to preserve our coastal ecosystem. Every piece of waste removed
                makes a difference.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Register for Cleanup Drive
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 rounded-full px-8 py-6 text-lg font-semibold"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl blur-3xl opacity-20"></div>
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Beach cleanup volunteers"
              width={600}
              height={500}
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Cleanup Events</h2>
          <p className="text-xl text-gray-600">Join our scheduled beach cleanup drives and make an impact</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-gray-900">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>
                    {new Date(event.date).toLocaleDateString()} at {event.time}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>
                    {event.volunteers}/{event.maxVolunteers} volunteers
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all"
                    style={{ width: `${(event.volunteers / event.maxVolunteers) * 100}%` }}
                  ></div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">Register Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/events">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 rounded-full px-8"
            >
              View All Events
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <Waves className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">CleanWave</span>
              </div>
              <p className="text-gray-400">Making Mumbai's beaches cleaner, one cleanup drive at a time.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-gray-400">
                <div>
                  <Link href="/events" className="hover:text-white transition-colors">
                    Events
                  </Link>
                </div>
                <div>
                  <Link href="/dashboard" className="hover:text-white transition-colors">
                    Dashboard
                  </Link>
                </div>
                <div>
                  <Link href="/profile" className="hover:text-white transition-colors">
                    Profile
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-gray-400">
                <div>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </div>
                <div>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </div>
                <div>
                  <Link href="#" className="hover:text-white transition-colors">
                    Guidelines
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="space-y-2 text-gray-400">
                <div>
                  <Link href="#" className="hover:text-white transition-colors">
                    Twitter
                  </Link>
                </div>
                <div>
                  <Link href="#" className="hover:text-white transition-colors">
                    Instagram
                  </Link>
                </div>
                <div>
                  <Link href="#" className="hover:text-white transition-colors">
                    Facebook
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CleanWave. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
