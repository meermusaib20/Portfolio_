import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/resume", label: "Resume" },
    { path: "/contact", label: "Contact" }
  ]

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-400 tracking-wide"
        >
          Mir Musaib
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition ${
                location.pathname === link.path
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-blue-400"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://github.com/meermusaib20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/mir-musaib07b27b321"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            <FaLinkedin size={18} />
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 space-y-6">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-blue-400"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex gap-6 pt-4">
            <a
              href="https://github.com/meermusaib20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://linkedin.com/in/mir-musaib07b27b321"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

        </div>
      )}
    </nav>
  )
}