import { Link } from "react-router-dom"

export default function ProjectCard({ title, description, slug }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-400/40 transition-all">

      <h3 className="text-xl font-semibold mb-3 text-white">
        {title}
      </h3>

      <p className="text-gray-400 mb-4">
        {description}
      </p>

      <Link
        to={`/projects/${slug}`}
        className="text-blue-400 text-sm hover:underline"
      >
        View Details →
      </Link>

    </div>
  )
}