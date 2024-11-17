import { GridContainer } from '@/components/grid-container'
import Image from 'next/image'

const Companies = () => {
  return (
    <section className="py-24 -mt-64 bg-white relative">
      <GridContainer>
        <h2 className="text-center mb-8 text-gray600 font-medium">
          Join 4,000+ companies already growing
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Image width={146} height={48} src={'/company-01.svg'} alt="layers" />
          <Image width={169} height={48} src={'/company-02.svg'} alt="layers" />
          <Image width={183} height={44} src={'/company-03.svg'} alt="layers" />
          <Image width={160} height={48} src={'/company-04.svg'} alt="layers" />
          <Image width={187} height={44} src={'/company-05.svg'} alt="layers" />
        </div>
      </GridContainer>
    </section>
  )
}

export { Companies }
