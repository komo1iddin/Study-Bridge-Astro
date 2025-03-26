export default function BackgroundDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-1/3 -left-24 w-80 h-80 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-yellow-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-10"></div>
    </div>
  )
}

