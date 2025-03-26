export default function BackgroundDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-1/3 -left-24 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-auto">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-red-900" />
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-red-900" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-red-900" />
        </svg>
      </div>
    </div>
  )
}