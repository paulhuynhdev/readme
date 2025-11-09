import { NavLink } from 'react-router-dom'

export default function RouterNavMenu() {
  const base =
    'px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50'
  const inactive = 'text-white/80 hover:text-white'
  const active = 'text-white'
  return (
    <nav
      aria-label='Main navigation'
      className='hidden md:flex flex-nowrap whitespace-nowrap overflow-x-auto space-x-6 lg:space-x-8 xl:space-x-10'
    >
      <NavLink to='/' className={({ isActive }) => `${base} ${isActive ? active : inactive}`} end>
        Home
      </NavLink>
      <NavLink to='/about' className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
        About Us
      </NavLink>
      <a href='#' className={`${base} ${inactive}`}>
        Courses
      </a>
      <a href='#' className={`${base} ${inactive}`}>
        Blog
      </a>
      <a href='/teachers' className={`${base} ${inactive}`}>
        Teachers
      </a>
      <NavLink
        to='/contact'
        className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
      >
        Contact us
      </NavLink>
    </nav>
  )
}
