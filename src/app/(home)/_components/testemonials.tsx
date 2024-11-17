import { GridContainer } from '@/components/grid-container'
import Image from 'next/image'

const Testemonials = () => {
  return (
    <section className="py-24 bg-brand50">
      <GridContainer className="text-center">
        <Image
          className="mx-auto"
          src={'/company-02.svg'}
          alt="company"
          width={148}
          height={48}
        />

        <h2 className="my-8 -tracking-[0.96px] text-5xl font-medium text-gray900">
          We’ve been using Untitled to kick start every new project and can’t
          imagine working without it.
        </h2>

        <div className="">
          <Image
            className="mx-auto"
            src={'/avatar-02.png'}
            alt="avatar"
            width={64}
            height={64}
          />
          <span className="font-medium text-lg block text-gray900">
            Candice Wu
          </span>
          <small className="text-gray600 text-base block ">
            Product Manager, Sisyphus
          </small>
        </div>
      </GridContainer>
    </section>
  )
}

export { Testemonials }
