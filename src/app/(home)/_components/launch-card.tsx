import React, { type FC } from 'react'

type LaunchCardProps = {
  number: string
  title: string
  tagline: string
}
const LaunchCard: FC<LaunchCardProps> = ({ number, title, tagline }) => {
  return (
    <div className="w-full text-center">
      <h3 className="text-6xl font-semibold text-brand600">{number}</h3>
      <h4 className="mb-2 text-lg font-medium text-gray900 mt-3">{title}</h4>
      <p className="text-gray600">{tagline}</p>
    </div>
  )
}

export { LaunchCard }
