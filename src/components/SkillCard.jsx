import { motion } from "framer-motion"

export default function SkillCard({ category, items }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-400/40 transition-all"
    >
      <h3 className="text-xl font-semibold mb-6 text-blue-400">
        {category}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-white/10 rounded-lg text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}