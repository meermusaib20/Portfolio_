import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  return (
    <div className="space-y-16">

      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Interested in collaboration, internships, or AI opportunities?
          Feel free to connect or send a message.
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Email */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-blue-400/40 transition">
          <FaEnvelope className="mx-auto text-blue-400 mb-4" size={28} />
          <h3 className="font-semibold mb-2">Email</h3>
          <p className="text-gray-400">your-email@gmail.com</p>
        </div>

        {/* GitHub */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-blue-400/40 transition">
          <FaGithub className="mx-auto text-blue-400 mb-4" size={28} />
          <h3 className="font-semibold mb-2">GitHub</h3>
          <a
            href="https://github.com/meermusaib20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400"
          >
            github.com/meermusaib20
          </a>
        </div>

        {/* LinkedIn */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-blue-400/40 transition">
          <FaLinkedin className="mx-auto text-blue-400 mb-4" size={28} />
          <h3 className="font-semibold mb-2">LinkedIn</h3>
          <a
            href="https://linkedin.com/in/mir-musaib07b27b321"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400"
          >
            View Profile
          </a>
        </div>

      </div>

      {/* Write to Me Section */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-10 space-y-6">

        <h2 className="text-2xl font-semibold text-blue-400">
          Write to Me
        </h2>

        <form
          action="https://formspree.io/f/yourformid"
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:outline-none focus:border-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:outline-none focus:border-blue-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:outline-none focus:border-blue-400"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition shadow-lg shadow-blue-500/20"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  )
}