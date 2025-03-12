import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"], // Add the desired weights here
});

export const metadata = {
  title: "Sifat - Cybersecurity Specialist",
  description: "Personal portfolio website showcasing the skills and certifications of Sifat, a cybersecurity specialist, a penetration tester, a CTF player, a bug hunter, and a web developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
