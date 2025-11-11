import { testimonials } from '@/data/testimonial'

export default function Testimonial() {
  return (
    <section className='bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 flex flex-col items-center gap-10 lg:gap-24'>
        <div className='flex flex-row items-center gap-[60px]'>
          <div className='relative flex flex-col justify-between'>
            <img
              src='/splatter-lines.svg'
              alt='Element'
              className='absolute -bottom-2 right-14 w-[2180px] h-[22px] rotate-[-5.72deg]'
            />
            <h2 className='font-heading text-lg font-bold text-red-500'>Testimonial</h2>
            <h3 className='font-heading text-3xl md:text-4xl font-bold text-neutral-900'>
              What our clients say about us.
            </h3>
          </div>
          <p className='text-neutral-600 max-w-2xl text-base md:text-lg'>
            A free breakfast bed is placed on the shores of the two smartphone cartoons. It is easy
            to drink and takes a bow if the urn is in front of the lacinia.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-3xl p-6 flex flex-col gap-8 transition-shadow duration-300 bg-white border border-neutral-200 hover:shadow-lg`}
            >
              <div className='flex items-center gap-4'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='h-20 w-20 rounded-full'
                />
                <div className='flex flex-col gap-3'>
                  <h4 className='font-heading text-2xl font-bold text-neutral-900'>
                    {testimonial.name}
                  </h4>
                  <div className='flex items-center gap-1'>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <img
                        key={index}
                        src={testimonial.stars}
                        alt='Star'
                        className={`h-5 ${index < 4 ? 'fill-neutral-300' : 'fill-red-500'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className='text-neutral-600 text-base'>{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
