import { Link } from "react-router-dom"
import profile from "../assets/profile.jpg"

export default function Home() {
  return (
    <div className="min-h-[90vh] flex items-center">

     <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-14">

        {/* IMAGE SECTION */}
        <div className="order-1 md:order-1 flex justify-center md:justify-start w-full md:w-auto">

          <div className="relative animate-float">

            {/* Blue Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30"></div>

            <img
              src={profile}
              alt="Mir Musaib"
              className="relative w-52 h-52 md:w-72 md:h-72 object-cover rounded-full border border-white/10 shadow-2xl"
            />

          </div>

        </div>

        {/* TEXT SECTION */}
        <div className="order-2 md:order-2 space-y-6 max-w-2xl text-center md:text-left md:ml-auto">

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Mir <span className="text-blue-500">Musaib</span>
          </h1>

          <p className="text-blue-400 tracking-widest text-sm uppercase">
            Artificial Intelligence Engineer
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            Building intelligent systems powered by machine learning and
            deep learning. Designing scalable AI-driven solutions that
            transform raw data into powerful decision-making engines.
          </p>

          <div className="flex justify-center md:justify-start gap-6 pt-6">

            <Link
              to="/projects"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl transition duration-300 shadow-lg shadow-blue-500/30 hover:scale-105"
            >
              Explore Work
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 border border-white/20 hover:border-blue-400 rounded-xl transition duration-300 hover:scale-105"
            >
              Let's Connect
            </Link>

          </div>

        </div>

      </div>

    </div>
  )
}