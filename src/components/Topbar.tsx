export default function Topbar() {
  return (
    <div className="bg-black text-white text-sm py-2 px-6 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          support@email.com | Location
        </div>
        <div className="space-x-4 hidden sm:block">
          <a href="#" className="hover:underline">FAQs</a>
          <a href="#" className="hover:underline">Support</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </div>
  )
}
