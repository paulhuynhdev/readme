export default function AboutUs() {
  return (
    <section className='bg-neutral-100'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[110px] px-6 lg:px-[120px] py-[100px]'>
        <div className='relative w-full flex items-center justify-center pb-[100px]'>
          <div className='relative w-[519px] h-[592px] overflow-visible'>
            <div
              className='absolute left-[87.99px] top-0 w-[431.08px] h-[560px] rounded-full border-12 border-secondary overflow-hidden'
              style={{ transform: 'rotate(10.997deg)' }}
            >
              <img
                src='/kid-1.png'
                alt='Language group'
                className='w-full h-full object-cover rotate-[-10.997deg] scale-110'
              />
            </div>
            <div
              className='absolute left-0 top-[203.09px] w-[351.08px] h-[420px] rounded-t-[200px] rounded-b-none border-12 border-accent overflow-hidden'
              style={{ transform: 'rotate(-26.994deg)' }}
            >
              <img
                src='/kid-2.png'
                alt='Athletic group'
                className='w-full h-full object-cover rotate-27 scale-[1.34] translate-x-3.5 translate-y-2'
              />
            </div>
          </div>
        </div>

        <div className='relative flex flex-col gap-[40px]'>
          <div className='relative flex flex-col gap-4'>
            <div className='relative flex flex-col gap-2'>
              <img
                src='/splatter-lines.svg'
                alt='decorative lines'
                className='absolute hidden md:block w-[219.55px] h-[42.1px] top-6 -right-4'
              />
              <span className='font-heading text-lg font-bold text-danger'>About Us</span>
              <h3 className='font-heading text-5xl font-bold text-figma-black max-w-[570px]'>
                To us, it's weird when people review improve at all.
              </h3>
            </div>
            <p className='text-lg leading-7 text-gray-600-alt max-w-2xl'>
              Entertaining these opinions of the course to be pursued, I beg of gentlemen to look at
              the question, as I have done, in a calm review of facts and of principles.
            </p>
          </div>
          <div className='flex gap-[48px]'>
            <div className='flex flex-col'>
              <span className='font-heading text-5xl font-bold text-danger'>1.58k</span>
              <span className='text-lg text-neutral-500'>Students</span>
            </div>
            <div className='flex flex-col'>
              <span className='font-heading text-5xl font-bold text-primary'>857</span>
              <span className='text-lg text-neutral-500'>Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
