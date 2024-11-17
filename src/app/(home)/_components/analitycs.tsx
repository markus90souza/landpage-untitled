import Image from 'next/image'
import { GridContainer } from '@/components/grid-container'
import { BarChart2, MailIcon, ZapIcon } from 'lucide-react'
import { FeatureItem } from './feature-item'

const analitycs = [
  {
    hasLink: true,
    icon: <MailIcon className="text-brand700 w-6 h-6" />,
    title: 'Share team inboxes',
    description:
      'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
  },
  {
    hasLink: true,
    icon: <ZapIcon className="text-brand700 w-6 h-6" />,
    title: 'Deliver instant answers',
    description:
      'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
  },
  {
    hasLink: true,
    icon: <BarChart2 className="text-brand700 w-6 h-6" />,
    title: 'Manage your team with reports',
    description:
      'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
  },
]
const Analitycs = () => {
  return (
    <section className="pt-24">
      <GridContainer>
        <header className="text-center mb-16">
          <span className="inline-block text-brand700 text-sm/snug font-medium py-1 px-3 rounded-2xl bg-brand50">
            Features
          </span>
          <h2 className="mt-4 mb-6 text-4xl font-semibold tracking-tight text-gray900 ">
            Cutting-edge features for advanced analytics
          </h2>
          <p className="text-xl/normal text-gray600 max-w-3xl mx-auto ">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </header>

        <div className="relative mb-24 w-full mx-auto max-w-[888px] h-[561px] ">
          <Image
            className="absolute -top-[15px] -right-[18px]"
            src="/screen-macbook.png"
            alt="macbook"
            width={768}
            height={512}
          />

          <Image
            className="absolute bottom-0 left-0"
            src="/iphone-mockup.png"
            alt="macbook"
            width={244}
            height={497}
          />
        </div>

        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 gap-x-8">
          {analitycs.map((analityc) => (
            <FeatureItem
              key={analityc.title.length}
              icon={analityc.icon}
              title={analityc.title}
              description={analityc.description}
              hasLink={analityc.hasLink}
            />
          ))}
        </div>

        <hr className="border-gray200  mt-24" />
      </GridContainer>
    </section>
  )
}

export { Analitycs }
