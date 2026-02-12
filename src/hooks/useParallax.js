import { useEffect } from "react"

export default function useParallax() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const elements = document.querySelectorAll("[data-parallax]")

      elements.forEach((el) => {
        const speed = el.getAttribute("data-speed")
        const x = (window.innerWidth - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100
        el.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])
}