import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const TagFeature = () => {
  return (
    <div className="bg-brand50 rounded-2xl inline-flex items-center gap-3 p-1 pr-[10px]">
      <span className="inline-block text-brand700 text-sm/6 font-medium h-6 bg-white rounded-2xl px-[10px] ">
        New feature
      </span>
      <Link
        href="/tag"
        className="hover:opacity-50 hover:transition-opacity flex items-center text-brand700 text-sm/6 font-medium gap-1"
      >
        Check out the team dashboard
        <ChevronRight />
      </Link>
    </div>
  )
}

export { TagFeature }
