import { PlayCircleIcon } from 'lucide-react'

const CallToAction = () => {
  return (
    <div className="flex items-center justify-center gap-3 mb-16">
      <button className="hover:bg-gray100 transition-colors flex items-center gap-3 px-7 font-semibold text-gray700 py-4 text-lg rounded-lg border border-gray300">
        <PlayCircleIcon size={24} className="text-gray700" />
        Demo
      </button>
      <button className="px-7 font-semibold text-white bg-brand600 hover:bg-brand700 transition-colors  py-4 text-lg rounded-lg ">
        Sign up
      </button>
    </div>
  )
}

export { CallToAction }
