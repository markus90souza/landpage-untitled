import { GridContainer } from '@/components/grid-container'
import { Question } from './question'
import Image from 'next/image'

const questions = [
  {
    id: 1,
    title: 'Is there a free trial available?',
    response:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    id: 2,
    title: 'Can I change my plan later?',
    response:
      'Yes! You can change or cancel your plan anytime through your account settings. No commitment, no fees.',
  },
  {
    id: 3,
    title: 'What is your cancellation policy?',
    response:
      'We understand that circumstances can change. That’s why we offer a 30-day money-back guarantee.',
  },
  {
    id: 4,
    title: 'Can other info be added to an invoice?',
    response:
      'Yes! You can add up to 5 additional lines to your invoice. This can include items like taxes, discounts, fees, or any other relevant information.',
  },
  {
    id: 5,
    title: 'How does billing work?',
    response:
      'We work with Stripe to process payments. Your credit card is never stored, and we never have access to your payment information.',
  },
  {
    id: 6,
    title: 'How do I change my account email?',
    response:
      'You can update your email address in your account settings. We’ll send you a confirmation email to the new address.',
  },
]
const FAQs = () => {
  return (
    <section className="py-24">
      <GridContainer>
        <header className="text-center mb-16 space-y-5">
          <h2 className="text-4xl font-semibold text-gray900 -tracking-[0.78px]">
            Frequently asked questions
          </h2>
          <p className="text-xl/6 text-gray600 max-w-3xl mx-auto">
            Everything you need to know about the product and billing.
          </p>
        </header>

        <div className="w-full max-w-3xl mx-auto divide-y divide-gray200">
          {questions.map((question) => (
            <Question
              key={question.id}
              title={question.title}
              response={question.response}
            />
          ))}
        </div>

        <div className="text-center space-y-8 mt-16 rounded-2xl bg-brand50 p-8">
          <Image
            className="mx-auto"
            src="/users.png"
            alt="macbook"
            width={120}
            height={56}
          />

          <div className="">
            <h2 className="text-4xl mt-8 mb-2 font-semibold text-gray900 -tracking-[0.78px]">
              Still have questions?
            </h2>
            <p className="text-xl/6 text-gray600 max-w-3xl mx-auto">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.{' '}
            </p>
          </div>

          <button className="py-3 leading-normal font-semibold text-white bg-brand600 hover:bg-brand700 transition-colors  px-5 text-lg rounded-lg ">
            Get in touch
          </button>
        </div>

        <hr className="border-gray200 mt-24" />
      </GridContainer>
    </section>
  )
}

export { FAQs }
