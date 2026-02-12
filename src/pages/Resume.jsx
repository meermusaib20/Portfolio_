export default function Resume() {
  return (
    <div className="space-y-10">

      <h1 className="text-4xl font-bold">Resume</h1>

      <div className="border border-white/10 rounded-2xl overflow-hidden">
        <iframe
          src="/Resume.pdf"
          className="w-full h-[800px]"
          title="Resume"
        />
      </div>

      <a
        href="/Resume.pdf"
        download
        className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition"
      >
        Download Resume
      </a>

    </div>
  )
}