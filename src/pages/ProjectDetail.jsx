import { useParams } from "react-router-dom"
import projects from "../data/projects"

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return <div className="text-white">Project not found.</div>
  }

  return (
    <div className="space-y-12">

      <h1 className="text-4xl font-bold">
        {project.title}
      </h1>

      <p className="text-gray-400 text-lg">
        {project.description}
      </p>

      {project.problem && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-blue-400">Problem</h2>
          <p className="text-gray-400">{project.problem}</p>
        </div>
      )}

      {project.approach && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-blue-400">Approach</h2>
          <p className="text-gray-400">{project.approach}</p>
        </div>
      )}

      {project.results && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-blue-400">Results</h2>
          <p className="text-gray-400">{project.results}</p>
        </div>
      )}

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition"
      >
        View on GitHub
      </a>

    </div>
  )
}