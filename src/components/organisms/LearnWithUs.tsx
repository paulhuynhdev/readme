export default function LearnWithUs() {
  return (
    <section aria-labelledby='learn-with-us-title' className='relative bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24'>
        <div className='mx-auto max-w-[1004px] flex flex-col items-center text-center'>
          <div className='flex flex-col items-center gap-2'>
            <p className='font-heading text-lg font-bold leading-[1.2] text-danger'>Subjects</p>
            <h2
              id='learn-with-us-title'
              className='font-heading w-full max-w-[910px] text-5xl font-bold tracking-tight leading-[1.2] text-figma-black'
            >
              What can you learn with Us
            </h2>
          </div>
          <p className='mt-4 w-full max-w-[771px] text-lg leading-normal text-gray-600-alt'>
            Education is a learning process, gaining knowledge and growing every day and being
            capable of excelling in the field wherever we go
          </p>
        </div>

        <ul role='list' className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          <li role='listitem'>
            <a
              href='#'
              aria-label='Creative Learning'
              className='group block rounded-3xl border border-neutral-200 py-8 px-6 bg-white hover:bg-warning transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white'
            >
              <div className='h-[88px] w-[88px] rounded-full bg-warning/10 flex items-center justify-center'>
                <img src='/group-title.png' alt='Creative Learning icon' className='object-cover' />
              </div>
              <h3 className='mt-6 font-heading text-2xl font-bold text-figma-black group-hover:text-neutral-900'>
                Title
              </h3>
              <p className='mt-2 font-(--font-display) text-base leading-[1.6] text-paragraph-alt group-hover:text-neutral-900'>
                General Science is a group of subjects Physics, Chemistry, Biology,Life Science
              </p>
            </a>
          </li>
          <li role='listitem'>
            <a
              href='#'
              aria-label='Playful Courses'
              className='group block rounded-3xl border border-neutral-200 py-8 px-6 bg-white hover:bg-primary hover:text-primary-foreground transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white'
            >
              <div className='h-[88px] w-[88px] rounded-full bg-white/10 flex items-center justify-center'>
                <img
                  src='/group-language.png'
                  alt='Creative Learning icon'
                  className='object-cover'
                />
              </div>
              <h3 className='mt-6 font-heading text-2xl font-bold text-figma-black group-hover:text-primary-foreground'>
                Language
              </h3>
              <p className='mt-2 font-(--font-display) text-base leading-[1.6] text-paragraph-alt group-hover:text-primary-foreground/80'>
                General Science is a group of subjects Physics, Chemistry, Biology,Life Science
              </p>
            </a>
          </li>
          <li role='listitem'>
            <a
              href='#'
              aria-label='Expert Teachers'
              className='group block rounded-3xl border border-neutral-200 py-8 px-6 bg-white hover:bg-(--color-accent) hover:text-primary-foreground transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white'
            >
              <div className='h-[88px] w-[88px] rounded-full bg-(--color-accent)/10 flex items-center justify-center'>
                <img
                  src='/group-athletic.png'
                  alt='Creative Learning icon'
                  className='object-cover'
                />
              </div>
              <h3 className='mt-6 font-heading text-2xl font-bold text-figma-black group-hover:text-primary-foreground'>
                Athletics
              </h3>
              <p className='mt-2 font-(--font-display) text-base leading-[1.6] text-paragraph-alt group-hover:text-primary-foreground/80'>
                General Science is a group of subjects Physics, Chemistry, Biology,Life Science
              </p>
            </a>
          </li>
          <li role='listitem'>
            <a
              href='#'
              aria-label='Safe Community'
              className='group block rounded-3xl border border-neutral-200 py-8 px-6 bg-white hover:bg-danger hover:text-primary-foreground transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white'
            >
              <div className='h-[88px] w-[88px] rounded-full bg-danger/10 flex items-center justify-center'>
                <img src='/group-math.png' alt='Creative Learning icon' className='object-cover' />
              </div>
              <h3 className='mt-6 font-heading text-2xl font-bold text-figma-black group-hover:text-primary-foreground'>
                Math
              </h3>
              <p className='mt-2 font-(--font-display) text-base leading-[1.6] text-paragraph-alt group-hover:text-primary-foreground/80'>
                General Science is a group of subjects Physics, Chemistry, Biology,Life Science
              </p>
            </a>
          </li>
        </ul>
      </div>
      <img
        src='/learn-splatter.svg'
        alt=''
        aria-hidden='true'
        className='pointer-events-none select-none absolute right-0 bottom-10 w-[83px] h-[164px] opacity-80'
      />
    </section>
  )
}
