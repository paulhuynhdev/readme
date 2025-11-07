import Button from '@atoms/Button'

export default function HomeHero() {
  return (
    <section className='relative bg-primary text-secondary-foreground'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24'>
        <div className='flex flex-col items-center gap-10 text-center'>
          <div className='relative'>
            <img
              src='/splatter-lines.svg'
              alt=''
              aria-hidden='true'
              className='absolute bottom-[-18px] right-[68px] w-64 h-14 hidden sm:block'
            />
            <h1 className='font-heading text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-[958px] mx-auto'>
              Education is the ability to meet life’s situations.
            </h1>
          </div>
          <p className='text-base text-white md:text-lg max-w-[518px] opacity-80 mx-auto'>
            Anyone who isn’t embarrassed of who they were last year probably isn’t learning enough.
          </p>
          <div className='flex items-center justify-center gap-8'>
            <Button variant='yellow' className='px-10 py-4 rounded-lg'>
              Enroll Now
            </Button>
            <Button
              variant='ghost'
              className='gap-4 flex items-center px-0 py-0 text-secondary-foreground opacity-80 hover:opacity-100 focus:ring-neutral-200'
            >
              <img src='/play-tutorial.svg' alt='' aria-hidden='true' className='w-12 h-12' />
              <span className='text-base text-white'>Play tutorial</span>
            </Button>
          </div>
          <div className='relative mt-8 w-full'>
            <div className='max-w-3xl mx-auto'>
              <img
                src='/hero-figma.svg'
                alt='Hero illustration'
                className='w-full h-auto object-contain'
              />
            </div>
            <img
              src='/stars1.svg'
              alt=''
              aria-hidden='true'
              className='absolute -top-6 left-10 w-6 h-6 hidden sm:block'
            />
            <img
              src='/stars2.svg'
              alt=''
              aria-hidden='true'
              className='absolute -bottom-8 right-10 w-8 h-8 hidden sm:block'
            />
            <img
              src='/stars1.svg'
              alt=''
              aria-hidden='true'
              className='absolute top-1/2 -left-6 w-8 h-8 hidden md:block'
            />
            <img
              src='/stars2.svg'
              alt=''
              aria-hidden='true'
              className='absolute bottom-0 -right-6 w-6 h-6 hidden md:block'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
