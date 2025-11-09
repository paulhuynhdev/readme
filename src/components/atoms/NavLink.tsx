import React from 'react'
import { cn } from '@lib/utils'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
  return (
    <a href={href} className={cn('px-3 py-2 rounded-md text-sm font-medium', className)}>
      {children}
    </a>
  )
}

export default NavLink
