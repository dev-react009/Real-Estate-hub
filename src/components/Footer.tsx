
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialIcons = [
  { icon: FaFacebook, link: "https://facebook.com" },
  { icon: FaTwitter, link: "https://twitter.com" },
  { icon: FaInstagram, link: "https://instagram.com" },
  { icon: FaLinkedin, link: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-4 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Relasto</h2>
          <p className="text-sm text-gray-400 mb-4">
            Your trusted partner in finding the perfect home. We've been helping families and investors achieve their real estate goals for over 15 years.
          </p>
          <div className="flex gap-3">
            {socialIcons.map((platform, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-[#1b1b1b] rounded-md hover:bg-orange-500 transition"
              >
                <platform.icon className="text-white w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {["Home", "Properties", "Services", "About Us", "Contact", "Blog"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-white transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              "Buy Property",
              "Sell Property",
              "Rent Property",
              "Property Management",
              "Investment Advice",
              "Market Analysis",
            ].map((service, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-white transition">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="text-sm text-gray-400 space-y-3">
            <li className="flex items-start gap-2">
              <i className="ri-map-pin-line text-orange-500 text-xl mt-0.5"></i>
              123 Real Estate Ave <br /> New York, NY 10001
            </li>
            <li className="flex items-center gap-2">
              <i className="ri-phone-line text-orange-500 text-xl"></i>
              +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <i className="ri-mail-line text-orange-500 text-xl"></i>
              info@relasto.com
            </li>
          </ul>

          {/* Newsletter */}
          <div className="mt-6">
            <h4 className="font-medium mb-2">Newsletter</h4>
            <div className="flex items-center rounded-full overflow-hidden bg-white">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-sm text-black outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-5 py-2 transition font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom links */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2024 Relasto. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
