export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 dark:from-[#0D1117] dark:to-[#1E1E1E] flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
    </div>
  )
}
