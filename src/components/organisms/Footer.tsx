import Logo from '@atoms/Logo'
import Button from '@atoms/Button'
import SocialIcon from '@atoms/SocialIcon'

export default function Footer() {
  return (
    <footer className='bg-primary text-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12'>
        <div className='flex flex-col gap-6'>
          <Logo />
          <p className='text-base text-white/80 max-w-md'>
            General Science is a group of subjects Physics, Chemistry, Biology, Life Science
          </p>
          <div className='flex items-center gap-3'>
            <SocialIcon href='#' name='twitter' label='Twitter' />
            <SocialIcon href='#' name='facebook' label='Facebook' />
            <SocialIcon href='#' name='youtube' label='YouTube' />
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <h4 className='text-white font-semibold'>About Us</h4>
          <ul className='space-y-2 text-white/80 text-sm'>
            <li>Address</li>
            <li>Community update</li>
            <li>Press Kit</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className='flex flex-col gap-4'>
          <h4 className='text-white font-semibold'>Subjects</h4>
          <ul className='space-y-2 text-white/80 text-sm'>
            <li>English</li>
            <li>Math</li>
            <li>Science</li>
            <li>Social Science</li>
          </ul>
        </div>

        <div className='flex flex-col gap-4'>
          <h4 className='text-white font-semibold'>Product</h4>
          <ul className='space-y-2 text-white/80 text-sm'>
            <li>Pricing</li>
            <li>Enterprice</li>
            <li>Integrate</li>
            <li>What’s New</li>
          </ul>
        </div>

        <div className='flex flex-col gap-4'>
          <h4 className='text-white font-semibold'>Subscribe Now</h4>
          <form className='flex items-center gap-3' noValidate>
            <div className='flex items-center gap-3 flex-1 rounded-md border border-white/30 px-4 py-2'>
              <label htmlFor='footer-email' className='sr-only'>
                Email Address
              </label>
              <input
                id='footer-email'
                type='email'
                name='email'
                placeholder='Email Address'
                className='flex-1 bg-transparent text-white placeholder-white/60 focus:outline-none'
                required
              />
              <Button variant='yellow' className='px-5 py-2'>
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className='bg-[#F6D162] text-[#101828]'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6'>
          <div className='flex items-center gap-2'>
            <span className='text-sm'>© 2025 READ ME. All rights reserved</span>
          </div>
          <div className='text-sm'>
            Privacy · Terms & Conditions · Security & Privacy by READ ME
          </div>
        </div>
      </div>
    </footer>
  )
}
