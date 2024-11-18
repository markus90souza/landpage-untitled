import Link from 'next/link'
import { type FC } from 'react'

type ItemMenuProps = {
  name: string
  href: string
}
type Props = {
  title: string
  menuItens: ItemMenuProps[]
}
const ItemMenu: FC<Props> = ({ title, menuItens }) => {
  return (
    <div>
      <strong className="text-sm mb-4 block text-gray600 font-semibold">
        {title}
      </strong>
      <ul className="space-y-3">
        {menuItens.map(({ name, href }, index) => (
          <li key={index}>
            <Link
              href={href}
              className="text-gray600 font-semibold hover:opacity-50 hover:transition-opacity"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { ItemMenu }
