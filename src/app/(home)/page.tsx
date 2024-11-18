import { Analitycs } from './_components/analitycs'

import { Launch } from './_components/launch'
import { Testemonials } from './_components/testemonials'

import { Hero, Companies, Features, FAQs } from './_components'
import { Trial } from './_components/trial'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Companies />
      <Features />
      <Testemonials />
      <Analitycs />
      <FAQs />
      <Launch />
      <Trial />
    </>
  )
}

export default HomePage
