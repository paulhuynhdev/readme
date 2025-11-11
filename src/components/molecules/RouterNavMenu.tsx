import { NavLink } from 'react-router-dom'

export default function RouterNavMenu() {
  const base =
    'relative px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50'
  const inactive = 'text-white/80 hover:text-white'
  const active = 'text-white'
  return (
    <nav
      aria-label='Main navigation'
      className='flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6 lg:space-x-8 xl:space-x-10'
    >
      <NavLink to='/' className={({ isActive }) => `${base} ${isActive ? active : inactive}`} end>
        {({ isActive }) => (
          <>
            Home
            {isActive && (
              <span className='absolute bottom-[-4px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-yellow-400' />
            )}
          </>
        )}
      </NavLink>
      <NavLink to='/about' className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
        {({ isActive }) => (
          <>
            About Us
            {isActive && (
              <span className='absolute bottom-[-4px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-yellow-400' />
            )}
          </>
        )}
      </NavLink>
      <a href='#' className={`${base} ${inactive}`}>
        Courses
      </a>
      <a href='#' className={`${base} ${inactive}`}>
        Blog
      </a>
      <NavLink to='/teachers' className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
        {({ isActive }) => (
          <>
            Teachers
            {isActive && (
              <span className='absolute bottom-[-4px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-yellow-400' />
            )}
          </>
        )}
      </NavLink>
      <NavLink
        to='/contact'
        className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
      >
        {({ isActive }) => (
          <>
            Contact us
            {isActive && (
              <span className='absolute bottom-[-4px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-yellow-400' />
            )}
          </>
        )}
      </NavLink>
    </nav>
  )
}
