import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 px-4 md:px-16 bg-[#fafafa]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Image Block */}
        <div className="relative w-full">
          <Image
            width={600}
            height={400}
            src="/images/help.webp"
            alt="Team Discussion"
            className="rounded-3xl w-full h-auto object-cover"
          />
          {/* Experience Badge */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white px-5 py-3 rounded-xl shadow-lg flex flex-col items-center">
            <p className="text-2xl font-bold text-black leading-none">12+</p>
            <p className="text-xs text-gray-600">Years Experience</p>
            <div className="mt-2 flex -space-x-2">
              <Image
                width={600}
                height={400}
                src="/images/user-1.jpeg"
                alt="User 1"
                className="w-6 h-6 rounded-full border-2 border-white"
              />
              <Image
                width={600}
                height={400}
                src="/images/user-2.jpeg"
                alt="User 2"
                className="w-6 h-6 rounded-full border-2 border-white"
              />
              <Image
                width={600}
                height={400}
                src="/images/user-3.jpeg"
                alt="User 3"
                className="w-6 h-6 rounded-full border-2 border-white"
              />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            We Help You To Find <br />
            Your Dream Home
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
            From cozy cottages to luxurious estates, our dedicated team helps
            you find the perfect home. With years of experience and a deep
            understanding of the local market, we make your home-buying journey
            smooth and enjoyable.
          </p>
          <ul className="space-y-4 mb-6">
            {[
              "Find excellent deals",
              "Friendly host & Fast support",
              "Secure payment system",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1 text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big-icon lucide-circle-check-big"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm md:text-base">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl px-6 py-3 text-sm transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
