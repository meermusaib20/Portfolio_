import { Routes, Route } from "react-router-dom"

import Navbar from "./layout/Navbar"
import ParticleBackground from "./components/ParticleBackground"

import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import ProjectDetail from "./pages/ProjectDetail"
import Experience from "./pages/Experience"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="relative min-h-screen text-white bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.06),transparent_40%),#000]">

      {/* Neural Network Background */}
      <ParticleBackground />

      {/* Content Layer */}
      <div className="relative z-10">

        <Navbar />

        <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

      </div>

    </div>
  )
}

export default App