export default function SignUpCard() {
  return (
    <section className='w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-[120px] py-8 sm:py-12 md:py-16 relative'>
      <img
        src='/stars1.svg'
        alt=''
        aria-hidden='true'
        loading='lazy'
        decoding='async'
        className='absolute top-4 sm:top-8 md:top-20 left-4 sm:left-8 md:left-20 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 opacity-60 hidden sm:block'
      />
      <img
        src='/stars2.svg'
        alt=''
        aria-hidden='true'
        loading='lazy'
        decoding='async'
        className='absolute top-8 sm:top-16 md:top-32 right-4 sm:right-8 md:right-32 w-6 sm:w-10 md:w-12 h-6 sm:h-10 md:h-12 opacity-40 hidden sm:block'
      />
      <img
        src='/stars1.svg'
        alt=''
        aria-hidden='true'
        loading='lazy'
        decoding='async'
        className='absolute bottom-8 sm:bottom-16 md:bottom-32 left-4 sm:left-8 md:left-32 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 opacity-30 hidden sm:block'
      />
      <img
        src='/stars2.svg'
        alt=''
        aria-hidden='true'
        loading='lazy'
        decoding='async'
        className='absolute bottom-4 sm:bottom-8 md:bottom-20 right-4 sm:right-8 md:right-20 w-5 sm:w-8 md:w-10 h-5 sm:h-8 md:h-10 opacity-50 hidden sm:block'
      />

      <div className='w-full max-w-[720px] bg-white rounded-xl border border-neutral-200 shadow-sm p-6 sm:p-8 md:p-10 flex flex-col items-center gap-6 sm:gap-8'>
        <img
          src='/splatter-lines.svg'
          alt=''
          aria-hidden='true'
          loading='lazy'
          decoding='async'
          className='w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12'
        />
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900'>Sign Up</h2>

        <form className='w-full max-w-[560px] flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='fullName' className='text-sm text-neutral-700'>
              Full name
            </label>
            <input
              id='fullName'
              type='text'
              placeholder='Enter your full name'
              required
              className='w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='text-sm text-neutral-700'>
              Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='you@example.com'
              required
              className='w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='password' className='text-sm text-neutral-700'>
              Password
            </label>
            <input
              id='password'
              type='password'
              placeholder='Create a password'
              required
              className='w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary'
            />
          </div>

          <div className='flex items-center gap-2'>
            <input
              id='terms'
              type='checkbox'
              className='w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary'
            />
            <label htmlFor='terms' className='text-sm text-neutral-500'>
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>

          <button
            type='submit'
            className='w-full bg-secondary text-secondary-foreground rounded-[10px] px-4 py-3 font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary'
          >
            Create account
          </button>

          <div className='flex items-center gap-4'>
            <div className='h-px flex-1 bg-neutral-200' />
            <span className='text-sm text-neutral-500'>or continue with</span>
            <div className='h-px flex-1 bg-neutral-200' />
          </div>

          <button
            type='button'
            className='w-full flex items-center justify-center gap-3 bg-white text-neutral-500 border border-neutral-300 rounded-lg px-4 py-3'
          >
            <img src='/google.svg' alt='Google' className='w-5 h-5' />
            <span>Continue with Google</span>
          </button>
        </form>

        <p className='text-xs text-neutral-400 text-center'>Privacy Policy and Terms of Service</p>
      </div>
    </section>
  )
}
