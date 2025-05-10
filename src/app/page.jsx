import HomePageHero from "@/components/HomePage/HomePageHero/HomePageHero"
import HomePageFeatures from "@/components/HomePage/HomePageFeatures/HomePageFeatures"
import HomePageAstrologers from "@/components/HomePage/HomePageAstrologers/HomePageAstrologers"
import HomePageTestimonials from "@/components/HomePage/HomePageTestimonials/HomePageTestimonials"
import HomePageHoroscope from "@/components/HomePage/HomePageHoroscope/HomePageHoroscope"
import HomePageCTA from "@/components/HomePage/HomePageCTA/HomePageCTA"
import SupportChat from "@/components/SupportChat/SupportChat"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomePageHero />
      <HomePageFeatures />
      <HomePageAstrologers />
      <HomePageHoroscope />
      <HomePageTestimonials />
      <HomePageCTA />
      {/* <SupportChat /> */}
    </main>
  )
}
