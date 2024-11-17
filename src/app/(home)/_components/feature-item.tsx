import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC, ReactNode } from 'react'

type FeatureItemProps = {
  icon: ReactNode
  title: string
  description: string
  hasLink?: boolean
}
const FeatureItem: FC<FeatureItemProps> = ({
  description,
  hasLink = false,
  icon,
  title,
}) => {
  return (
    <article className="w-full max-w-96 text-center">
      <div className="h-12 mb-5 w-12 flex items-center justify-center rounded-full bg-brand100 mx-auto border-8 border-brand50">
        {icon}
      </div>
      <h2 className="text-gray900 text-xl/6 font-medium mb-2">{title}</h2>
      <p className="text-gray600 leading-4">{description}</p>
      {hasLink && (
        <Link
          href="/"
          className="flex items-center justify-center text-brand700  mt-5 gap-2 font-semibold  hover:opacity-50 hover:transition-opacity"
        >
          Learn more
          <ArrowRightIcon className="w-5 h-5 text-brand700" />
        </Link>
      )}
    </article>
  )
}

export { FeatureItem }
