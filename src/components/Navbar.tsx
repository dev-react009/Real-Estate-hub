'use client'

import React from "react";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import smoothScrollTo from "@/lib/smoothScroll";



export default function Navbar() {
  const [isOpen,setIsOpen]  = React.useState(false);


  const handleLinkClick = (hrefId:string)=>{
    const id = hrefId.replace("#","");
    const section = document.getElementById(id);
    if(section){
      smoothScrollTo(section,1000);
      setIsOpen(false);
    }

  }


   React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement
       const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("#")) return

      const id = href.slice(1)
        const section = document.getElementById(id!)
        if (section) {
        e.preventDefault()
        smoothScrollTo(section, 1000) 
      }
      }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, []); 
  return (
    <header className="w-full sticky top-0 z-51 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-gray-900">
          RealEstate<span className="text-blue-600">Hub</span>
        </div>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex gap-10 text-sm font-medium text-gray-700">
          <a href="#Home" className="text-lg hover:text-blue-600 transition-colors">Home</a>
          <a href="#Properties" className="text-lg font-medium hover:text-blue-600 transition-colors">Properties</a>
          <a href="#Services" className="text-lg hover:text-blue-600 transition-colors">Services</a>
          <a href="#Contact" className="text-lg hover:text-blue-600 transition-colors">Contact</a>
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden md:block ">
          <Button className="px-5 py-2 rounded-full bg-[#f97316] hover:bg-red-400 cursor-pointer">Schedule Visit</Button>
        </div>

        {/* Mobile menu icon (optional, for future mobile nav) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

         {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 transition-all duration-300">
          <nav className="flex flex-col gap-4 text-gray-700 text-base">
            <a href="#Home" onClick={()=>handleLinkClick("#Home")} className="hover:text-blue-600">Home</a>
            <a href="#Properties"  onClick={()=>handleLinkClick("#Properties")} className="hover:text-blue-600">Properties</a>
            <a href="#Services"  onClick={()=>handleLinkClick("#Services")}   className="hover:text-blue-600">Services</a>
            <a href="#Contact" onClick={()=>handleLinkClick("#Contact")}  className="hover:text-blue-600">Contact</a>
            <Button className="w-full mt-2 bg-[#f97316] hover:bg-red-400">Schedule Visit</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
