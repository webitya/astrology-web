import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Daily Horoscope | AstroGuide",
  description: "Get your daily, weekly, and monthly horoscope predictions for all zodiac signs.",
}

const zodiacSigns = [
  {
    name: "Aries",
    dates: "Mar 21 - Apr 19",
    image: "/placeholder.svg?height=120&width=120",
    element: "Fire",
    ruling: "Mars",
    compatibility: "Libra, Leo",
    lucky: "1, 8, 17",
  },
  {
    name: "Taurus",
    dates: "Apr 20 - May 20",
    image: "/placeholder.svg?height=120&width=120",
    element: "Earth",
    ruling: "Venus",
    compatibility: "Scorpio, Cancer",
    lucky: "2, 6, 9",
  },
  {
    name: "Gemini",
    dates: "May 21 - Jun 20",
    image: "/placeholder.svg?height=120&width=120",
    element: "Air",
    ruling: "Mercury",
    compatibility: "Sagittarius, Aquarius",
    lucky: "3, 12, 21",
  },
  {
    name: "Cancer",
    dates: "Jun 21 - Jul 22",
    image: "/placeholder.svg?height=120&width=120",
    element: "Water",
    ruling: "Moon",
    compatibility: "Capricorn, Taurus",
    lucky: "4, 13, 22",
  },
  {
    name: "Leo",
    dates: "Jul 23 - Aug 22",
    image: "/placeholder.svg?height=120&width=120",
    element: "Fire",
    ruling: "Sun",
    compatibility: "Aquarius, Gemini",
    lucky: "5, 9, 14",
  },
  {
    name: "Virgo",
    dates: "Aug 23 - Sep 22",
    image: "/placeholder.svg?height=120&width=120",
    element: "Earth",
    ruling: "Mercury",
    compatibility: "Pisces, Cancer",
    lucky: "6, 15, 24",
  },
  {
    name: "Libra",
    dates: "Sep 23 - Oct 22",
    image: "/placeholder.svg?height=120&width=120",
    element: "Air",
    ruling: "Venus",
    compatibility: "Aries, Sagittarius",
    lucky: "7, 16, 25",
  },
  {
    name: "Scorpio",
    dates: "Oct 23 - Nov 21",
    image: "/placeholder.svg?height=120&width=120",
    element: "Water",
    ruling: "Pluto, Mars",
    compatibility: "Taurus, Cancer",
    lucky: "8, 17, 26",
  },
  {
    name: "Sagittarius",
    dates: "Nov 22 - Dec 21",
    image: "/placeholder.svg?height=120&width=120",
    element: "Fire",
    ruling: "Jupiter",
    compatibility: "Gemini, Aries",
    lucky: "9, 18, 27",
  },
  {
    name: "Capricorn",
    dates: "Dec 22 - Jan 19",
    image: "/placeholder.svg?height=120&width=120",
    element: "Earth",
    ruling: "Saturn",
    compatibility: "Cancer, Taurus",
    lucky: "10, 19, 28",
  },
  {
    name: "Aquarius",
    dates: "Jan 20 - Feb 18",
    image: "/placeholder.svg?height=120&width=120",
    element: "Air",
    ruling: "Uranus, Saturn",
    compatibility: "Leo, Libra",
    lucky: "11, 20, 29",
  },
  {
    name: "Pisces",
    dates: "Feb 19 - Mar 20",
    image: "/placeholder.svg?height=120&width=120",
    element: "Water",
    ruling: "Neptune, Jupiter",
    compatibility: "Virgo, Scorpio",
    lucky: "12, 21, 30",
  },
]

export default function HoroscopePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">Daily Horoscope</h1>
        <p className="text-gray-600 mb-8">Discover what the stars have in store for you today</p>

        <Tabs defaultValue="daily" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 max-w-md mx-auto">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>

          <TabsContent value="daily" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {zodiacSigns.map((sign) => (
                <Link key={sign.name} href={`/horoscope/${sign.name.toLowerCase()}`}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Image
                          src={sign.image || "/placeholder.svg"}
                          alt={sign.name}
                          width={120}
                          height={120}
                          className="w-20 h-20 mr-4"
                        />
                        <div>
                          <h2 className="text-xl font-semibold">{sign.name}</h2>
                          <p className="text-sm text-gray-500">{sign.dates}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                        <div>
                          <span className="font-medium">Element:</span> {sign.element}
                        </div>
                        <div>
                          <span className="font-medium">Ruling Planet:</span> {sign.ruling}
                        </div>
                        <div>
                          <span className="font-medium">Compatibility:</span> {sign.compatibility}
                        </div>
                        <div>
                          <span className="font-medium">Lucky Numbers:</span> {sign.lucky}
                        </div>
                      </div>

                      <p className="text-gray-700 line-clamp-3">
                        Today is a great day for {sign.name}. You may find new opportunities in your career and personal
                        growth. Focus on your strengths and be open to unexpected changes.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="weekly" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {zodiacSigns.map((sign) => (
                <Link key={sign.name} href={`/horoscope/${sign.name.toLowerCase()}/weekly`}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Image
                          src={sign.image || "/placeholder.svg"}
                          alt={sign.name}
                          width={120}
                          height={120}
                          className="w-20 h-20 mr-4"
                        />
                        <div>
                          <h2 className="text-xl font-semibold">{sign.name}</h2>
                          <p className="text-sm text-gray-500">{sign.dates}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                        <div>
                          <span className="font-medium">Element:</span> {sign.element}
                        </div>
                        <div>
                          <span className="font-medium">Ruling Planet:</span> {sign.ruling}
                        </div>
                        <div>
                          <span className="font-medium">Compatibility:</span> {sign.compatibility}
                        </div>
                        <div>
                          <span className="font-medium">Lucky Numbers:</span> {sign.lucky}
                        </div>
                      </div>

                      <p className="text-gray-700 line-clamp-3">
                        This week brings significant changes for {sign.name}. You may need to balance work and personal
                        life. Pay attention to your health and relationships with loved ones.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="monthly" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {zodiacSigns.map((sign) => (
                <Link key={sign.name} href={`/horoscope/${sign.name.toLowerCase()}/monthly`}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Image
                          src={sign.image || "/placeholder.svg"}
                          alt={sign.name}
                          width={120}
                          height={120}
                          className="w-20 h-20 mr-4"
                        />
                        <div>
                          <h2 className="text-xl font-semibold">{sign.name}</h2>
                          <p className="text-sm text-gray-500">{sign.dates}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                        <div>
                          <span className="font-medium">Element:</span> {sign.element}
                        </div>
                        <div>
                          <span className="font-medium">Ruling Planet:</span> {sign.ruling}
                        </div>
                        <div>
                          <span className="font-medium">Compatibility:</span> {sign.compatibility}
                        </div>
                        <div>
                          <span className="font-medium">Lucky Numbers:</span> {sign.lucky}
                        </div>
                      </div>

                      <p className="text-gray-700 line-clamp-3">
                        This month is a time of transformation for {sign.name}. Focus on long-term goals and personal
                        growth. New opportunities may arise in your career and relationships.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
