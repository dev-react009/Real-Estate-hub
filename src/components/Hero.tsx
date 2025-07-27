"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="Home" className="w-full min-h-screen  pt-16 bg-gradient-to-r from-[#f0f6fd] to-[#fdf7f0] z-0 px-0 md:px-16  h-[700px]">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Badge + Text */}
        <div className="space-y-6">
          {/* Top Badge */}
          <div className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">
            🏡 Real Estate Agency
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Find Your<span className="text-[#f97316]"> Dream Home</span> <br />
            With Us
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-lg">
            We are a real estate agency that will help you find the best
            residence you dream of, let's discuss for your dream house?
          </p>

          {/* CTA Button */}
          <div className="flex flex-col itemss-start md:flex-row md:items-center gap-4">
            <div>
              <Button
                size="lg"
                className="rounded-xl shadow-md text-white bg-[#f97316] hover:bg-[#fb8c1a] cursor-pointer transition-colors"
              >
                Explore Properties
              </Button>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-[#ffffff] rounded-full p-3 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 text-orange-500"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <div className="hover:text-[#f97316] text-sm">
                <span>Watch Video</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5">
            <div className="flex flex-col items-start justify-center p-4">
              <p className="text-2xl font-bold">200+</p>
              <p className="text-gray-500 text-sm">Happy Customer</p>
            </div>
            <div className="flex flex-col items-start justify-center p-4">
              <p className="text-2xl font-bold">10k+</p>
              <p className="text-gray-500 text-sm">Property Ready</p>
            </div>
            <div className="flex flex-col items-start justify-center p-4">
              <p className="text-2xl font-bold">18+</p>
              <p className="text-gray-500 text-sm">Partner Bank</p>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative w-full h-[400px] sm:h-[500px]">
          <Image
            src="/images/hero-house.jpeg"
            alt="Beautiful Home"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-xl shadow-lg"
          />
          <div className="absolute top-4 right-4 bg-white px-6 py-5 rounded-2xl shadow text-sm font-medium text-gray-800">
            <div className="flex items-center gap-3">
              <div className="bg-[#ffedd5] p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-orange-500"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-bold">$15.4M</p>
                <span className="text-gray-800 text-md">
                  Owned from Properties
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Badge on Image */}
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow text-sm font-medium text-gray-800">
            🏠 1,000+ Happy Families
          </div>
        </div>
      </div>

      {/* Search Properties */}

      <div className="relative z-50 top-6 w-full max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl px-6 py-8 md:py-5 md:px-8 flex flex-col gap-6 ">
          {/* Heading and Subheading */}
          <div>
            <h2 className="text-xl sm:text-xl font-bold text-gray-800">
              Search Property
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              From as low as $10 per day with limited time offer discounts
            </p>
          </div>

          {/* Form Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border w-[100%] md:w-auto p-4 rounded-xl bg-gray-50">
            <div className="flex flex-col md:flex-row gap-5 w-full">
              <div className="flex flex-col xs:w-[200px] md:w-[220px]">
                <div className="flex items-center gap-2 mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <label className="font-semibold text-sm text-gray-600 mb-1">
                    Location
                  </label>
                </div>

                <select className=" border rounded-xl px-4 py-2 w-full text-sm">
                  <option>Select Location</option>
                </select>
              </div>
              <div className="flex flex-col xs:w-[200px] md:w-[220px]">
                <div className="flex items-center gap-2 mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <label className="font-semibold text-sm text-gray-600 mb-1">
                    Property Type
                  </label>
                </div>
                <select className="border rounded-xl px-4 py-2 w-full text-sm">
                  <option>All Types</option>
                </select>
              </div>
              <div className="flex flex-col  xs:w-[200px] md:w-[220px]">
                <div className="flex items-center gap-2 mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500"
                  >
                    <line x1="12" x2="12" y1="2" y2="22"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                  <label className="font-semibold text-sm text-gray-600 mb-1">
                    Price Range
                  </label>
                </div>
                <select className="border rounded-xl px-4 py-2 w-full text-sm">
                  <option>Any Price</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-center justify-center mt-5 md:mt-7 w-full max-w-xs mx-auto">
            <button className="w-[220px] flex items-center gap-3 justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-4 py-2 font-semibold text-sm mt-2 md:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search-icon lucide-search"
              >
                <path d="m21 21-4.34-4.34" />
                <circle cx="11" cy="11" r="8" />
              </svg>
              Search
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
