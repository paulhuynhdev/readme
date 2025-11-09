function About() {
  return (
    <div className='bg-[#F2F2F7] px-6 md:px-12 lg:px-[120px] py-16 lg:py-[100px] flex flex-col lg:flex-row items-center gap-12 lg:gap-[140px]'>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <p className='font-bold text-lg text-[#FF5E54]'>About</p>
            <div className='flex flex-col'>
              <span className='font-bold text-4xl lg:text-[48px] text-figma-black'>
                Emily Parker
              </span>
            </div>
          </div>
          <p className='text-base text-gray-600-alt max-w-[548px]'>
            As an English teacher, I inspire students to master language and communication. I focus
            on reading, writing, and critical thinking, creating engaging lessons that encourage
            creativity and confidence
          </p>
        </div>
        <button className='bg-[#F6D162] rounded-lg px-5 py-2.5 text-figma-black font-semibold text-xl w-fit'>
          Online Courses
        </button>
      </div>
      <img
        src='/teams/teacher-about.svg'
        alt='teacher-about'
        className='w-full lg:w-auto ml-auto'
      />
    </div>
  )
}

export default About
