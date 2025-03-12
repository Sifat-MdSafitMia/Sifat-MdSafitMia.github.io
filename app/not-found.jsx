"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function NotFound() {
    const router = useRouter()
    const [countdown, setCountdown] = useState(5)
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1)
      }, 1000)
  
      const timeout = setTimeout(() => {
        router.push("/")
      }, 5000)
  
      return () => {
        clearInterval(interval)
        clearTimeout(timeout)
      }
    }, [router])

  return (
    <div className="px-30 py-20">
      <h2 className="text-2xl border-b-1 border-gray-700 py-5 text-red-700">Oops! Page Not Found 😔</h2>
      <p className="text-gray-400">It seems you've wandered off the beaten path. The page you're looking for doesn't exist (or it might have been moved). But don't worry, we've got you covered! <span className="text-gray-700">Redirecting to home page in {countdown} seconds...</span></p>
      <p>
        Or go back now: <Link href="/" className="text-green-900">Home</Link>
      </p>
    </div>
  )
}
