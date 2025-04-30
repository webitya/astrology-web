import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MessageCircle, PhoneCall, Filter } from "lucide-react"
import Image from "next/image"

// Mock data for astrologers
const astrologers = [
  {
    id: 1,
    name: "Acharya Vikram",
    specialty: "Vedic Astrology",
    experience: "15 years",
    rating: 4.9,
    reviews: 1248,
    price: "₹20/min",
    languages: ["English", "Hindi"],
    status: "online",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Expert in Vedic astrology with specialization in career and business predictions. Has helped thousands of clients find their true path.",
  },
  {
    id: 2,
    name: "Divya Sharma",
    specialty: "Tarot Reading",
    experience: "8 years",
    rating: 4.7,
    reviews: 856,
    price: "₹15/min",
    languages: ["English", "Hindi", "Punjabi"],
    status: "online",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Intuitive tarot reader who connects deeply with spiritual energies. Specializes in relationship and love readings.",
  },
  {
    id: 3,
    name: "Guru Rajneesh",
    specialty: "Numerology",
    experience: "12 years",
    rating: 4.8,
    reviews: 1032,
    price: "₹18/min",
    languages: ["English", "Hindi", "Gujarati"],
    status: "busy",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Master numerologist who can reveal the hidden meanings behind your birth date and name. Provides accurate life path guidance.",
  },
  {
    id: 4,
    name: "Maya Joshi",
    specialty: "Palmistry",
    experience: "10 years",
    rating: 4.6,
    reviews: 742,
    price: "₹16/min",
    languages: ["English", "Hindi", "Bengali"],
    status: "offline",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Skilled palmist who can read the past, present, and future from your palm lines. Specializes in health and wealth predictions.",
  },
  {
    id: 5,
    name: "Dr. Karan Malhotra",
    specialty: "Vastu Shastra",
    experience: "20 years",
    rating: 4.9,
    reviews: 1567,
    price: "₹25/min",
    languages: ["English", "Hindi", "Tamil"],
    status: "online",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Renowned Vastu expert who has helped transform thousands of homes and offices for better energy flow and prosperity.",
  },
  {
    id: 6,
    name: "Sheetal Agarwal",
    specialty: "Face Reading",
    experience: "7 years",
    rating: 4.5,
    reviews: 623,
    price: "₹14/min",
    languages: ["English", "Hindi", "Marathi"],
    status: "online",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Talented face reader who can analyze personality traits and life patterns from facial features. Provides insightful guidance.",
  },
  {
    id: 7,
    name: "Pandit Ramesh",
    specialty: "Kundli Matching",
    experience: "25 years",
    rating: 4.8,
    reviews: 2145,
    price: "₹22/min",
    languages: ["English", "Hindi", "Sanskrit"],
    status: "busy",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Traditional astrologer specializing in marriage compatibility and kundli matching. Has helped thousands of couples find harmony.",
  },
  {
    id: 8,
    name: "Neha Gupta",
    specialty: "Psychic Reading",
    experience: "9 years",
    rating: 4.7,
    reviews: 912,
    price: "₹19/min",
    languages: ["English", "Hindi"],
    status: "offline",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Gifted psychic with the ability to connect with energies beyond the physical realm. Provides clarity on life's most challenging questions.",
  },
]

export const metadata = {
  title: "Our Astrologers | AstroGuide",
  description:
    "Connect with our expert astrologers for personalized readings and guidance on love, career, health, and more.",
}

export default function AstrologersPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">Our Expert Astrologers</h1>
        <p className="text-gray-600 mb-8">
          Connect with our experienced astrologers for guidance on love, career, health, and more
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters - would be interactive with client components */}
          <div className="w-full md:w-64 mb-6 md:mb-0">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center mb-4">
                  <Filter size={18} className="mr-2" />
                  <h2 className="font-semibold">Filters</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Specialization</h3>
                    <div className="space-y-1">
                      {["Vedic Astrology", "Tarot Reading", "Numerology", "Palmistry", "Vastu Shastra"].map((spec) => (
                        <div key={spec} className="flex items-center">
                          <input type="checkbox" id={spec} className="mr-2" />
                          <label htmlFor={spec} className="text-sm">
                            {spec}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Language</h3>
                    <div className="space-y-1">
                      {["English", "Hindi", "Punjabi", "Bengali", "Tamil"].map((lang) => (
                        <div key={lang} className="flex items-center">
                          <input type="checkbox" id={lang} className="mr-2" />
                          <label htmlFor={lang} className="text-sm">
                            {lang}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Status</h3>
                    <div className="space-y-1">
                      {["Online", "Busy", "Offline"].map((status) => (
                        <div key={status} className="flex items-center">
                          <input type="checkbox" id={status} className="mr-2" />
                          <label htmlFor={status} className="text-sm">
                            {status}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Experience</h3>
                    <div className="space-y-1">
                      {["0-5 years", "5-10 years", "10+ years"].map((exp) => (
                        <div key={exp} className="flex items-center">
                          <input type="checkbox" id={exp} className="mr-2" />
                          <label htmlFor={exp} className="text-sm">
                            {exp}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Apply Filters</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Astrologer Listings */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {astrologers.map((astrologer) => (
                <Card key={astrologer.id} className="h-full">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={astrologer.image || "/placeholder.svg"}
                        alt={astrologer.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <Badge
                        className={`absolute top-2 right-2 ${
                          astrologer.status === "online"
                            ? "bg-green-500"
                            : astrologer.status === "busy"
                              ? "bg-orange-500"
                              : "bg-gray-500"
                        }`}
                      >
                        {astrologer.status}
                      </Badge>
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{astrologer.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {astrologer.specialty} • {astrologer.experience}
                      </p>

                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < Math.floor(astrologer.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                        <span className="text-sm ml-1">{astrologer.rating}</span>
                        <span className="text-xs text-gray-500 ml-1">({astrologer.reviews})</span>
                      </div>

                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{astrologer.description}</p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {astrologer.languages.map((lang) => (
                          <Badge key={lang} variant="outline" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-purple-700">{astrologer.price}</span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="p-2">
                            <PhoneCall size={16} />
                          </Button>
                          <Button size="sm" className="p-2 bg-purple-600 hover:bg-purple-700">
                            <MessageCircle size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
