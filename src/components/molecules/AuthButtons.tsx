import Button from '@atoms/Button'
import { Link } from 'react-router-dom'

const AuthButtons = () => {
  return (
    <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 md:items-center md:space-x-4 lg:space-x-6 shrink-0'>
      <Link
        to='/signup'
        className='text-white/80 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md'
      >
        Sign up
      </Link>
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
