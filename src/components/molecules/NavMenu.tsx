import NavLink from '@atoms/NavLink'

const NavMenu = () => {
  return (
    <nav className='hidden md:flex space-x-10'>
      <NavLink href='#'>Home</NavLink>
      <NavLink href='#'>About Us</NavLink>
      <NavLink href='#'>Courses</NavLink>
      <NavLink href='#'>Blog</NavLink>
      <NavLink href='#'>Teachers</NavLink>
      <NavLink href='#'>Contact us</NavLink>
    </nav>
  )
}

export default NavMenu
