"use client";

import Image from "next/image";
import { Heart, MapPin, BedDouble, Bath, Ruler, Star } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Luxury Family Home",
    location: "Beverly Hills, CA",
    image: "/images/property-1.jpeg",
    price: "$2,500,000",
    beds: 5,
    baths: 4,
    area: "4,500 sqft",
    rating: 4.8,
    featured: true,
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Manhattan, NY",
    image: "/images/property-2.jpeg",
    price: "$1,200,000",
    beds: 3,
    baths: 2,
    area: "1,800 sqft",
    rating: 4.9,
    featured: false,
  },
  {
    id: 3,
    title: "Cozy Family Home",
    location: "Austin, TX",
    image: "/images/property-3.jpeg",
    price: "$750,000",
    beds: 4,
    baths: 3,
    area: "2,800 sqft",
    rating: 4.7,
    featured: false,
  },
  {
    id: 4,
    title: "Elegant Villa with Pool",
    location: "Miami, FL",
    image: "/images/property-4.jpeg",
    price: "$3,800,000",
    beds: 6,
    baths: 5,
    area: "5,200 sqft",
    rating: 4.9,
    featured: true,
  },
  {
    id: 5,
    title: "Downtown Studio Loft",
    location: "San Francisco, CA",
    image: "/images/property-5.jpeg",
    price: "$890,000",
    beds: 2,
    baths: 1,
    area: "1,200 sqft",
    rating: 4.6,
    featured: false,
  },
  {
    id: 6,
    title: "Spacious Country House",
    location: "Nashville, TN",
    image: "/images/property-6.jpeg",
    price: "$1,350,000",
    beds: 5,
    baths: 4,
    area: "3,900 sqft",
    rating: 4.8,
    featured: true,
  },
];
export default function FeaturedProperties() {
  return (
    <section id="Properties" className="min-h-screen bg-[#fafafa] max-w-7xl mx-auto px-4 md:px-8 py-225 md:py-16 mt-25">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Featured Properties
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Let's find a home that's perfect for you
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-0 md:px-16">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden "
          >
            <div className="relative">
              <Image
                src={property.image}
                alt={property.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {property.featured && (
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  Featured
                </span>
              )}

              <button
                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition cursor-pointer"
                aria-label="Add to wishlist"
                title="Add to wishlist"
              >
                <Heart size={18} className="text-orange-500" />
              </button>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#f97316] ">
                {property.title}
              </h3>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <MapPin size={14} aria-hidden="true" /> {property.location}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-600 mt-4">
                <span className="flex items-center gap-1">
                  <BedDouble size={14} aria-hidden="true" /> {property.beds}
                </span>
                <span className="flex items-center gap-1">
                  <Bath size={14} aria-hidden="true" /> {property.baths}
                </span>
                <span className="flex items-center gap-1">
                  <Ruler size={14} aria-hidden="true" /> {property.area}
                </span>
              </div>

              <div className="flex items-center justify-between mt-5">
                <span className="flex items-center gap-1 text-[#f97316] font-medium text-sm">
                  <Star size={16} aria-hidden="true" /> {property.rating}
                </span>
                <span className="text-lg font-bold text-gray-800">
                  {property.price}
                </span>
              </div>

              <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 hover:cursor-pointer text-white font-semibold py-2 rounded-xl text-sm transition-shadow hover:shadow-md">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="mt-5 px-5 py-3  flex bg-orange-500 hover:bg-orange-600 hover:cursor-pointer text-white font-semibold  rounded-2xl text-sm transition-shadow hover:shadow-md">
        View All Properties
      </button>
      </div>
      
    </section>
  );
}
