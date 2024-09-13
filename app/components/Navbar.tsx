import { HiOutlineHome, HiOutlineUser, HiOutlineCode, HiOutlineMail } from 'react-icons/hi'

const NavItem = ({ icon, label }) => (
  <a href={`#${label.toLowerCase()}`} className="flex flex-col items-center group p-1 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300">
    <div className="p-1 rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors">
      {icon}
    </div>
    <span className="mt-1 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">{label}</span>
  </a>
)

export default function Navbar() {
  return (
    <nav className="fixed bottom-4 left-4 bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg p-1 rounded-full shadow-lg z-50">
      <div className="flex flex-col space-y-2">
        <NavItem icon={<HiOutlineHome className="w-5 h-5" />} label="Home" />
        <NavItem icon={<HiOutlineUser className="w-5 h-5" />} label="About" />
        <NavItem icon={<HiOutlineCode className="w-5 h-5" />} label="Skills" />
        <NavItem icon={<HiOutlineMail className="w-5 h-5" />} label="Contact" />
      </div>
    </nav>
  )
}