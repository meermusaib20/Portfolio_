import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()

  const linkStyle = (path) =>
    `transition hover:text-blue-400 ${
      location.pathname === path ? "text-blue-400" : "text-gray-300"
    }`

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-400">
          Mir Musaib
        </Link>

        <div className="space-x-6 text-sm">
          <Link to="/about" className={linkStyle("/about")}>About</Link>
          <Link to="/skills" className={linkStyle("/skills")}>Skills</Link>
          <Link to="/projects" className={linkStyle("/projects")}>Projects</Link>
          <Link to="/experience" className={linkStyle("/experience")}>Experience</Link>
          <Link to="/resume" className={linkStyle("/resume")}>Resume</Link>
          <Link to="/contact" className={linkStyle("/contact")}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}