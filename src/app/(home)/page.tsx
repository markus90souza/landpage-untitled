import { Analitycs } from './_components/analitycs'
import { Companies } from './_components/companies'
import { FAQs } from './_components/faqs'
import { Features } from './_components/features'
import { Hero } from './_components/hero'
import { Launch } from './_components/launch'
import { Testemonials } from './_components/testemonials'

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
    </>
  )
}

export default HomePage
