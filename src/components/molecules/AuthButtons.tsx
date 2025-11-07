import Button from '@atoms/Button'
import { Link } from 'react-router-dom'

const AuthButtons = () => {
  return (
    <div className='hidden md:flex items-center space-x-4 lg:space-x-6 shrink-0'>
      <span className='text-white/80 text-sm'>Sign up</span>
      <Link
        to='/login'
        className='focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md'
      >
        <Button variant='yellow'>Log in</Button>
      </Link>
    </div>
  )
}

export default AuthButtons
