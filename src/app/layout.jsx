import Navbar from "@/components/Navbar/Navbar"
import "./globals.css"

export const metadata = {
  title: "AstroGuide - Your Personal Astrology Guide",
  description: "Connect with expert astrologers for personalized readings, daily horoscopes, and spiritual guidance.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0f051d] text-amber-50 min-h-screen">
        <div className="stars-container">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
