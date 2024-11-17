import React from 'react'
import { GridContainer } from './grid-container'
import Image from 'next/image'

import { NavLink } from './nav-link'

const navLinks = [
  {
    title: 'Home',
    href: '/',
    hasDropdown: false,
  },
  {
    title: 'Products',
    href: '/',
    hasDropdown: true,
  },
  {
    title: 'Resources',
    href: '/',
    hasDropdown: true,
  },
  {
    title: 'Pricing',
    href: '/',
    hasDropdown: false,
  },
]

const Header = () => {
  return (
    <header className="h-20 border-b flex items-center border-b-gray100 bg-white sticky top-0 z-50">
      <GridContainer className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Image width={142} height={32} alt="Logo" src="/logo.svg" />

          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                href={link.href}
                title={link.title}
                hasDropdown={link.hasDropdown}
              />
            ))}
          </nav>
        </div>

        <div className="">
          <Image width={40} height={40} alt="Avatar" src="/avatar.png" />
        </div>
      </GridContainer>
    </header>
  )
}

export { Header }
