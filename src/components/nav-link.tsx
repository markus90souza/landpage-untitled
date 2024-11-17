import { cn } from '@/lib/utils'
import { ChevronDownIcon } from 'lucide-react'
import type { LinkProps } from 'next/link'
import Link from 'next/link'
import type { FC } from 'react'

type NavLinkProps = LinkProps & {
  title: string
  hasDropdown?: boolean
  className?: string
}

const NavLink: FC<NavLinkProps> = ({ href, title, className, hasDropdown }) => {
  return (
    <Link
      href={href}
      className={cn(
        'text-gray600 flex items-center gap-2 font-semibold clear-start hover:opacity-50 hover:transition-opacity',
        className,
      )}
    >
      {title} {hasDropdown && <ChevronDownIcon className="text-gray600" />}
    </Link>
  )
}

export { NavLink }
