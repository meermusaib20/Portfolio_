import projects from "../data/projects"
import { Link } from "react-router-dom"

export default function Projects() {
  return (
    <div className="space-y-16">

      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of AI and machine learning projects demonstrating
          practical implementation and deployment.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-400/40 transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <Link
              to={`/projects/${project.slug}`}
              className="text-blue-400 text-sm hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>

    </div>
  )
}