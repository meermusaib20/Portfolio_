export default function BackgroundGrid() {
  return (
    <div className="absolute inset-0 -z-10 opacity-10">
      <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  )
}