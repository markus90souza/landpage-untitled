import { GridContainer } from '@/components/grid-container'
import React from 'react'

const Trial = () => {
  return (
    <section className="py-24 bg-brand50">
      <GridContainer>
        <div className="text-center">
          <h2 className="text-4xl mb-5 font-semibold text-gray900 -tracking-[0.78px]">
            Start your free trial{' '}
          </h2>
          <p className="text-xl/6 mb-10 text-gray600 max-w-3xl mx-auto">
            Join over 4,000+ startups already growing with Untitled.
          </p>
        </div>

        <div className="flex gap-3 justify-center">
          <button className="py-3 leading-normal font-semibold  bg-white border border-gray300 text-gray700 hover:bg-gray400 transition-colors px-5 text-lg rounded-lg ">
            Learn more
          </button>
          <button className="py-3 leading-normal font-semibold text-white bg-brand600 hover:bg-brand700 transition-colors  px-5 text-lg rounded-lg ">
            Get in touch
          </button>
        </div>
      </GridContainer>
    </section>
  )
}

export { Trial }
