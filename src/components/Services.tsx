'use client';

import {Search, Home, FileText, TrendingUp, Key, ShieldCheck } from 'lucide-react';


const services = [
  {
    title: 'Property Search',
    icon: Search,
    description: 'Find your perfect home with our advanced search tools and expert guidance.',
    points: ['Advanced Filters', 'Saved Searches', 'Price Alerts', 'Virtual Tours'],
  },
  {
    title: 'Property Management',
    icon: Home,
    description: 'Comprehensive property management services for landlords and investors.',
    points: ['Tenant Screening', 'Rent Collection', 'Maintenance', 'Financial Reporting'],
  },
  {
    title: 'Legal Assistance',
    icon: FileText,
    description: 'Expert legal support throughout your real estate transaction process.',
    points: ['Contract Review', 'Title Search', 'Closing Support', 'Legal Consultation'],
  },
  {
    title: 'Property Valuation',
    icon: TrendingUp,
    description: 'Accurate property valuations using market data and expert analysis.',
    points: ['Market Analysis', 'Comparative Studies', 'Investment Advice', 'Pricing Strategy'],
  },
  {
    title: 'Mortgage Services',
    icon: Key,
    description: 'Connect with trusted lenders and get the best financing options.',
    points: ['Loan Pre-approval', 'Rate Comparison', 'Application Support', 'Credit Guidance'],
  },
  {
    title: 'Insurance Services',
    icon: ShieldCheck,
    description: 'Protect your investment with comprehensive insurance coverage.',
    points: ['Home Insurance', 'Title Insurance', 'Liability Coverage', 'Claims Support'],
  },
];

export default function ServicesSection() {
  return (
    <section id="Services" className="min-h-screen py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Our Services</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          We provide comprehensive real estate services to help you buy, sell, or manage properties with confidence and ease.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-0 md:px-16 mx-auto container ">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 transition duration-300  hover:shadow-lg group "
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-100  group-hover:text-[#f97316]  p-2 rounded-full">
                <service.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-black  group-hover:text-[#f97316]">{service.title}</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            <ul className="space-y-1 text-sm text-gray-600 mb-4">
              {service.points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-orange-500 text-base leading-none">•</span> {point}
                </li>
              ))}
            </ul>
            <a href="#" className="text-sm font-medium text-orange-500  inline-flex items-center gap-1 group-hover:text-orange-600 transition-colors duration-200 ">
              Learn More 
              <span className="inline-block  transform transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
