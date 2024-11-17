import { GridContainer } from '@/components/grid-container'
import { TagFeature } from './tag-feature'
import { CallToAction } from './call-to-action'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="pt-24">
      <GridContainer>
        <div className="text-center">
          <TagFeature />
          <h1 className="text-6xl mt-4 mb-6 font-semibold text-gray900">
            Beautiful analytics to grow smarter
          </h1>
          <p className="text-xl/6 mb-12 text-gray600 max-w-3xl mx-auto">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>

          <CallToAction />
        </div>

        <Image src="/macbook.svg" alt="macbook" width={1216} height={480} />

        <br className="border-gray200" />
      </GridContainer>
    </section>
  )
}

export { Hero }
