import Logo from '@atoms/Logo'
import RouterNavMenu from '@molecules/RouterNavMenu'
import AuthButtons from '@molecules/AuthButtons'

const Header = () => {
  return (
    <header className='relative z-10 bg-primary'>
      <div className='w-full px-4 sm:px-6 md:px-8 lg:px-[120px]'>
        <div className='flex justify-between items-center py-4 sm:py-6 md:py-8 gap-4 sm:gap-8 md:gap-8 lg:gap-[100px] flex-nowrap'>
          <Logo />
          <RouterNavMenu />
          <AuthButtons />
        </div>
      </div>
    </header>
  )
}

export default Header
