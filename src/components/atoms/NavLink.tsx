import React from 'react'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className='text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
    >
      {children}
    </a>
  )
}

export default NavLink
