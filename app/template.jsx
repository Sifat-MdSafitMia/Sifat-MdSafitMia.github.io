"use client";
import { usePathname } from "next/navigation";
import PageTransition from "./components/PageTransition";

export default function Template({ children }) {
  const pathname = usePathname();
  
  // Provide a unique key based on the current path to ensure
  // the transition happens on every page navigation
  return (
    <PageTransition key={pathname}>
      {children}
    </PageTransition>
  );
} 