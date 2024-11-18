import { GridContainer } from '@/components/grid-container'
import Image from 'next/image'
import { LaunchCard } from './launch-card'

const launchs = [
  {
    id: 1,
    number: '4,000+',
    title: 'Global customers',
    tagline: 'We’ve helped over 4,000 amazing global companies.',
  },
  {
    id: 2,
    number: '600%',
    title: 'Return on investment',
    tagline: 'Our customers have reported an average of ~600% ROI.',
  },
  {
    id: 3,
    number: '10k',
    title: 'Global downloads',
    tagline: 'Our app has been downloaded over 10k times.',
  },
  {
    id: 4,
    number: '200+',
    title: '5-star reviews',
    tagline: 'Our app has been downloaded over 10k times.',
  },
]
const Launch = () => {
  return (
    <section className="py-24">
      <GridContainer>
        <header className="w-full max-w-3xl mb-16">
          <span className="mb-3 font-semibold text-brand700">
            Launch faster
          </span>
          <h2 className="mb-5 -tracking-[0.72px] text-4xl font-semibold text-gray900">
            Build something great
          </h2>
          <p className="text-xl/6 text-gray600">
            We’ve done all the heavy lifting so you don’t have to — get all the
            data you need to launch and grow your business faster.
          </p>
        </header>

        <div className="flex items-center justify-between">
          <div className="w-full max-w-xl grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2">
            {launchs.map((launch) => (
              <LaunchCard
                key={launch.id}
                number={launch.number}
                title={launch.title}
                tagline={launch.tagline}
              />
            ))}
          </div>
          <div className="">
            <Image src={'/lauch.png'} alt="mockup" width={560} height={560} />
          </div>
        </div>
      </GridContainer>
    </section>
  )
}

export { Launch }
