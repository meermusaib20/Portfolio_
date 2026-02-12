export default function Skills() {
  const skills = {
    "Machine Learning": ["Scikit-learn", "Pandas", "NumPy", "Feature Engineering"],
    "Deep Learning": ["PyTorch", "TensorFlow", "CNN", "LSTM"],
    "Data Analysis": ["EDA", "Matplotlib", "Statistical Analysis"],
    "Web & Deployment": ["React", "FastAPI", "Docker", "REST APIs"],
    "Programming": ["Python", "JavaScript", "SQL"]
  }

  return (
    <div className="space-y-16">

      <h1 className="text-4xl font-bold">Technical Skills</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">
              {category}
            </h2>

            <div className="flex flex-wrap gap-3">
              {items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-white/10 rounded-lg text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}