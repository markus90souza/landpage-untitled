import type { FC, ReactNode } from 'react'

type FeatureItemProps = {
  icon: ReactNode
  title: string
  description: string
}
const FeatureItem: FC<FeatureItemProps> = ({ description, icon, title }) => {
  return (
    <article className="w-full max-w-96 text-center">
      <div className="h-12 mb-5 w-12 flex items-center justify-center rounded-full bg-brand100 mx-auto border-8 border-brand50">
        {icon}
      </div>
      <h2 className="text-gray900 text-xl/6 font-medium mb-2">{title}</h2>
      <p className="text-gray600 leading-4">{description}</p>
    </article>
  )
}

export { FeatureItem }
