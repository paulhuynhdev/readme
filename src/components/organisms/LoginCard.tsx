import DecorativeStars from '@atoms/DecorativeStars'
import FormDivider from '@atoms/FormDivider'
import GoogleAuthButton from '@atoms/GoogleAuthButton'

export default function LoginCard() {
  return (
    <section className='w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-[120px] py-8 sm:py-12 md:py-16 relative'>
      <DecorativeStars variant='login' />

      <div className='w-full max-w-[720px] bg-white rounded-xl border border-neutral-200 shadow-sm p-6 sm:p-8 md:p-10 flex flex-col items-center gap-6 sm:gap-8'>
        <img
          src='/splatter-lines.svg'
          alt=''
          aria-hidden='true'
          loading='lazy'
          decoding='async'
          className='w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12'
        />
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900'>Log In</h2>

        <form className='w-full max-w-[560px] flex flex-col gap-4' aria-labelledby='login-title'>
          <span id='login-title' className='sr-only'>
            Login form
          </span>

          <div className='flex flex-col gap-2'>
            <label htmlFor='login-email' className='text-sm text-neutral-700'>
              Email
            </label>
            <input
              id='login-email'
              name='email'
              type='email'
              placeholder='you@example.com'
              required
              autoComplete='email'
              className='w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='login-password' className='text-sm text-neutral-700'>
              Password
            </label>
            <input
              id='login-password'
              name='password'
              type='password'
              placeholder='Enter your password'
              required
              autoComplete='current-password'
              className='w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary'
            />
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <input
                id='remember'
                name='remember'
                type='checkbox'
                className='w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary'
              />
              <label htmlFor='remember' className='text-sm text-neutral-500'>
                Remember me
              </label>
            </div>
            <a
              href='#'
              className='text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded'
            >
              Forgot password?
            </a>
          </div>

          <button
            type='submit'
            className='w-full bg-secondary text-secondary-foreground rounded-[10px] px-4 py-3 font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary'
          >
            Log in
          </button>

          <FormDivider />

          <GoogleAuthButton />
        </form>

        <p className='text-xs text-[#999999] text-center'>Privacy Policy and Terms of Service</p>
      </div>
    </section>
  )
}
