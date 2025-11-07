import { team } from '@/data/team'

export default function Team() {
  return (
    <section className='bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 flex flex-col gap-10 lg:gap-16'>
        <div className='flex flex-col items-center gap-4 text-center'>
          <span className='text-secondary-red font-bold text-lg'>Teachers</span>
          <h2 className='font-heading text-4xl md:text-5xl font-bold text-neutral-900 max-w-lg'>
            Meet Our Super Learning Heroes
          </h2>
          <p className='text-neutral-600 max-w-2xl text-base md:text-lg'>
            Education is a learning process, gaining knowledge and growing every day and being
            capable of excelling in the field wherever we go
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {team.map((item, index) => (
            <div
              key={index}
              className='group rounded-3xl p-4 text-center flex flex-col gap-5 border border-neutral-300 bg-white hover:bg-primary transition-colors duration-300'
            >
              <img src={item.avatar} alt={item.name} className='w-full h-auto rounded-2xl' />
              <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                  <h3 className='font-heading text-2xl font-bold text-neutral-900 group-hover:text-white'>
                    {item.name}
                  </h3>
                  <p className='text-base text-neutral-600 group-hover:text-neutral-300'>
                    {item.title}
                  </p>
                </div>
                <div className='flex justify-center gap-4'>
                  {item.socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      className='w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 group-hover:bg-white/10'
                    >
                      <img src={social.icon} alt='social icon' className='w-6 h-6' />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
