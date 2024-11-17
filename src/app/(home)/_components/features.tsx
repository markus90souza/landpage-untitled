import { GridContainer } from '@/components/grid-container'
import React from 'react'
import { FeatureItem } from './feature-item'
import {
  BarChart2,
  CommandIcon,
  MailIcon,
  MessageCircleIcon,
  SmileIcon,
  ZapIcon,
} from 'lucide-react'

const features = [
  {
    icon: <MailIcon className="text-brand700 w-6 h-6" />,
    title: 'Share team inboxes',
    description:
      'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
  },
  {
    icon: <ZapIcon className="text-brand700 w-6 h-6" />,
    title: 'Deliver instant answers',
    description:
      'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
  },
  {
    icon: <BarChart2 className="text-brand700 w-6 h-6" />,
    title: 'Manage your team with reports',
    description:
      'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
  },
  {
    icon: <SmileIcon className="text-brand700 w-6 h-6" />,
    title: 'Connect with customers',
    description:
      'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
  },
  {
    icon: <CommandIcon className="text-brand700 w-6 h-6" />,
    title: 'Connect the tools you already use',
    description:
      'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
  },
  {
    icon: <MessageCircleIcon className="text-brand700 w-6 h-6" />,
    title: 'Our people make the difference',
    description:
      'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
  },
]

const Features = () => {
  return (
    <section className="py-24 ">
      <GridContainer>
        <div className="text-center mb-16">
          <small className="font-semibold mb-3 block text-base text-brand700">
            Features
          </small>
          <h2 className="text-4xl font-semibold mb-5 text-gray900 text-center tracking-tight">
            Analytics that feels like it’s from the future
          </h2>
          <p className="text-xl/6 text-gray600 max-w-3xl mx-auto">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 gap-x-8">
          {features.map((feature) => (
            <FeatureItem
              key={feature.title.length}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </GridContainer>
    </section>
  )
}

export { Features }
