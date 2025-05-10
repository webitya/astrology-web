import Navbar from "@/components/Navbar/Navbar"
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./globals.css";
import Tawk from "@/components/Tawk";

export const metadata = {
  title: "AstroGuide - Your Personal Astrology Guide",
  description: "Connect with expert astrologers for personalized readings, daily horoscopes, and spiritual guidance.",
  generator: 'v0.dev',
};

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

        {/* Floating Chat Buttons */}
        <div className="fixed bottom-24 right-5 flex flex-col items-end space-y-3 z-50">
          <button className="p-3 rounded-full bg-amber-500 hover:bg-amber-600 shadow-lg transition">
            <PhoneIcon />
          </button>
          <button className="p-3 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition">
            <WhatsAppIcon />
          </button>

          <Tawk/>
        </div>
      </body>
    </html>
  );
}
