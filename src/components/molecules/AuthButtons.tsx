import Button from '../atoms/Button'

const AuthButtons = () => {
  return (
    <div className='hidden md:flex items-center space-x-6'>
      <span className='text-white/80 text-sm'>Sign up</span>
      <Button variant='yellow'>Log in</Button>
    </div>
  )
}

export default AuthButtons
