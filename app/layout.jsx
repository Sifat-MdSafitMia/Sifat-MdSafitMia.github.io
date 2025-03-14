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
  keywords: [
    "Cybersecurity",
    "Penetration Testing",
    "CTF",
    "Bug Hunting",
    "Web Development",
    "Sifat",
    "Cybersecurity Specialist",
    "Portfolio",
    "Security Certifications",
    "Ethical Hacking",
    'Bug Bounty',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'Frontend Developer',
    'Security Analyst',
    'Security Researcher',
    'Security Consultant',
    'Security Engineer',
    'Security Architect',
    'Ethical Hacking Services',
    'Bug Bounty Services',
    'Web Development Services',
    'Vulnerability Assessment',
    'Ethical Hacker for hire',
    'Bug Bounty Hunter',
    'Web Developer for hire',
    'Security Consultant for hire',
    'Digital forensics expert',
    'Incident response expert',
    'Cyber risk management expert',
    'exploit testing expert',
    'Secure web development expert',
    'freelance cybersecurity specialist',
    'hire a security consultant',
    'hire a penetration tester',
    'hire a bug bounty hunter',
    'hire a web developer',
    'hire a security analyst',
    'hire a security researcher',
    'Sifat',
    'sifatsarkar',
    'sifat sarkar',
    'sifat-mdsafitmia',
    'sifat mdsafitmia',
    'sifat cyber',
    'sifat cybersecurity',
    'safitmia',
    'sifat safitmia',
    'Who is sifat',
    'Who is sifat sarkar',
    'Who is sifat-mdsafitmia',
    'Who is sifat mdsafitmia',
    'Who is sifat cyber',
    'who is safit',
    'who is safitmia',
    'who is sifat safitmia',
    'safit',
    'Cybersecurity Specialist Portfolio',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased text-center`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
