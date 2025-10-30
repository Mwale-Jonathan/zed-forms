import "./globals.css";

import { Rubik } from 'next/font/google'
import StickyNav from "@/components/navbar";

// If loading a variable font, you don't need to specify the font weight
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Zedforms",
  description: "Collec data the smart way",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} antialiased`}
      >
        <StickyNav />
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
