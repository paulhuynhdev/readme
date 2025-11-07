export default function ContactHero() {
  return (
    <section className='relative bg-primary flex flex-col items-center gap-6 sm:gap-8 md:gap-[38px] px-4 sm:px-6 md:px-8 lg:px-[150px] py-8 sm:py-10 md:py-12'>
      <div className='relative w-full max-w-[957px] flex flex-col items-center gap-6 sm:gap-8 md:gap-14'>
        <div className='relative w-full flex flex-col items-center gap-4 sm:gap-6 md:gap-[43px]'>
          <img
            src='/splatter-lines.svg'
            alt=''
            aria-hidden='true'
            loading='lazy'
            decoding='async'
            className='absolute top-8 sm:top-12 md:top-[51px] left-1/2 -translate-x-1/2 w-[200px] sm:w-[260px] md:w-[323px] h-[40px] sm:h-[50px] md:h-[67px]'
          />
          <h1 className='text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.24] text-center'>
            Contact Us
          </h1>
          <p className='text-white/80 text-base sm:text-lg md:text-[20px] leading-[1.7] text-center w-full max-w-[300px] sm:max-w-[400px] md:max-w-[517px]'>
            We’re here to help. Get in touch with our team.
          </p>
        </div>
      </div>

      <img
        src='/stars1.svg'
        alt=''
        aria-hidden='true'
        loading='lazy'
        decoding='async'
        className='absolute left-4 sm:left-8 md:left-[216px] top-20 sm:top-32 md:top-[197px] w-6 sm:w-8 md:w-[49px] h-6 sm:h-8 md:h-[48px] hidden md:block'
      />
      <img
        src='/stars2.svg'
        alt=''
        aria-hidden='true'
        loading='lazy'
        decoding='async'
        className='absolute right-4 sm:right-8 md:right-[216px] top-28 sm:top-40 md:top-[247px] w-5 sm:w-7 md:w-[40px] h-5 sm:h-7 md:h-[40px] hidden md:block opacity-80'
      />
    </section>
  )
}
