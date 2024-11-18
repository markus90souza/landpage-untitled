import Image from 'next/image'
import { GridContainer } from './grid-container'
import { menu } from '@/data/menu'
import { ItemMenu } from './item-menu'

const Footer = () => {
  return (
    <footer className="pt-16 pb-12">
      <GridContainer>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {menu.map((item) => (
            <ItemMenu key={item.title} {...item} />
          ))}
        </div>
        <div className="flex py-8 justify-between border-t border-t-gray200">
          <Image src={'/logo.svg'} alt="logo" width={142} height={32} />

          <span className="text-gray600 block">
            © {new Date().getFullYear()} Untitled UI. All rights reserved.
          </span>
        </div>
      </GridContainer>
    </footer>
  )
}

export { Footer }
