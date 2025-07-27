'use client';

import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Textarea } from './ui/textarea';

export default function ContactSection() {
  return (
    <section id="Contact" className="min-h-screen px-4 py-16 md:px-12 lg:px-24 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get In Touch</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Ready to find your dream home or have questions about our services? We're here to help you every step of the way.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div className="space-y-8">
          <ContactItem icon={<Phone />} title="Phone" lines={['+1 (555) 123-4567', '+1 (555) 987-6543']} />
          <ContactItem icon={<Mail />} title="Email" lines={['info@relasto.com', 'support@relasto.com']} />
          <ContactItem icon={<MapPin />} title="Address" lines={['123 Real Estate Ave', 'New York, NY 10001']} />
          <ContactItem icon={<Clock />} title="Business Hours" lines={['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat - Sun: 10:00 AM - 4:00 PM']} />

          <div className="bg-orange-50 rounded-2xl p-6 flex items-center justify-center text-gray-500">
            <MapPin className="w-6 h-6 mr-2" />
            <span>Interactive Map</span>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="bg-gray-50 rounded-2xl shadow p-8 space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">Send us a Message</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name *" className="input" />
            <input type="email" placeholder="Email Address *" className="input" />
            <input type="text" placeholder="Phone Number" className="input" />
            <select className="input">
              <option>Select a subject</option>
              <option>General Inquiry</option>
              <option>Property Info</option>
              <option>Support</option>
            </select>
          </div>
          <Textarea placeholder="Message *" className="input h-32" />
          <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition">
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, lines }: { icon: React.ReactNode, title: string, lines: string[] }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-orange-100 p-3 rounded-full text-orange-600">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        {lines.map((line, i) => (
          <p key={i} className="text-gray-600 text-sm">{line}</p>
        ))}
      </div>
    </div>
  );
}

// Tailwind: You can also extract `.input` into `@layer components` in globals.css:
// .input { @apply w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-sm outline-none focus:ring-2 focus:ring-orange-400 transition; }
