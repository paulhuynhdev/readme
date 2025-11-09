function PersonalInfo() {
  return (
    <section className='flex flex-col lg:flex-row items-start gap-8 px-6 py-16 md:px-12 md:py-12 lg:px-[120px] lg:py-[100px]'>
      <div className='flex w-full flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-5xl font-bold'>Kelemen Krisztina</h1>
          <p className='text-xl font-semibold text-gray-600-alt'>
            Bachelor of Arts in English Education, Central University
          </p>
        </div>
        <p className='text-base text-gray-500'>
          As an English teacher, you specialize in inspiring students to master the art of language
          and communication. With a focus on developing reading, writing, and critical thinking
          skills, you create engaging lessons that encourage creativity and self-expression. You are
          committed a supportive learning environment where students feel motivated to explore
          literature, refine their language abilities, and gain confidence in their communication.
          Your dedication helps shape well-rounded individuals equipped for success in academics and
          beyond.
        </p>
        <div className='flex flex-col gap-4'>
          <h2 className='text-lg font-semibold'>Work Experience</h2>
          <div className='flex gap-4'>
            <div className='w-[194px] h-[140px] flex items-center rounded-3xl bg-primary border border-gray-200 p-9 px-10'>
              <div>
                <span className='text-3xl font-bold text-white whitespace-nowrap'>10+ Years</span>
                <p className='text-lg font-medium text-gray-100'>Experience</p>
              </div>
            </div>
            <div className='w-[194px] h-[140px] flex items-center rounded-3xl bg-green-500 border border-gray-200 p-9 px-10'>
              <div>
                <span className='text-3xl font-bold text-white'>2400+</span>
                <p className='text-lg font-medium text-gray-100'>Lessons</p>
              </div>
            </div>
            <div className='w-[194px] h-[140px] flex items-center rounded-3xl bg-yellow-400 border border-gray-200 p-9 px-10'>
              <div>
                <span className='text-3xl font-bold text-figma-black'>Mentor</span>
                <p className='text-lg font-medium text-gray-600-alt'>Expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full rounded-3xl border border-gray-200 bg-white text-gray-950 shadow-sm py-11 px-14'>
        <div className='relative'>
          <h2 className='text-5xl font-bold'>Personal Info</h2>
          <img
            src='/splatter-lines.svg'
            alt='splatter-lines'
            className='absolute w-[158px] h-[18px] rotate-[-5.596deg] right-[372px] top-[40px]'
          />
        </div>

        <div className='py-5 grid grid-cols-[auto_max-content_1fr] items-center gap-x-4 gap-y-5 border-b border-b-gray-300'>
          <img src='/chart.svg' alt='chart' />
          <span className='font-semibold'>Experience:</span>
          <span className='text-gray-500'>10+ Years</span>

          <img src='/email.svg' alt='email' />
          <span className='font-semibold'>E-mail:</span>
          <span className='text-gray-500'>emily.parker@gmail.com</span>

          <img src='/phone.svg' alt='phone' />
          <span className='font-semibold'>Phone:</span>
          <span className='text-gray-500'>+880 8873 0099</span>

          <img src='/expert.svg' alt='user' />
          <span className='font-semibold'>Expert:</span>
          <span className='text-gray-500'>English</span>

          <img src='/location.svg' alt='location' />
          <span className='font-semibold'>Location:</span>
          <span className='text-gray-500'>Paris</span>
        </div>

        <div className='mt-5 flex gap-5'>
          <a className='cursor-pointer' href='#'>
            <img src='/facebook1.png' alt='facebook' className='w-[60px] h-[60px]' />
          </a>
          <a className='cursor-pointer' href='#'>
            <img src='/instagram.png' alt='instagram' className='w-[60px] h-[60px]' />
          </a>
          <a className='cursor-pointer' href='#'>
            <img src='/twitter.png' alt='twitter' className='w-[60px] h-[60px]' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default PersonalInfo
