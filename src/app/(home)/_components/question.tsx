'use client'

import { MinusCircleIcon, PlusCircleIcon } from 'lucide-react'
import { useState, type FC } from 'react'

type QuestionProps = {
  title: string
  response: string
}
const Question: FC<QuestionProps> = ({ response, title }) => {
  const [isOpen, setisOpen] = useState(false)
  const handleToggle = () => {
    setisOpen(!isOpen)
  }
  return (
    <div className="w-full first:pt-0 last:pb-0 pt-6 pb-8">
      <button
        className="w-full flex items-center justify-between"
        onClick={handleToggle}
      >
        <strong className="text-gray900 text-lg/normal font-semibold">
          {title}
        </strong>
        {isOpen ? (
          <MinusCircleIcon className="w-6 h-6 text-brand600" />
        ) : (
          <PlusCircleIcon className="w-6 h-6 text-brand600" />
        )}
      </button>
      {isOpen && (
        <p className="mt-2 text-gray600 leading-normal pr-12">{response}</p>
      )}
    </div>
  )
}

export { Question }
