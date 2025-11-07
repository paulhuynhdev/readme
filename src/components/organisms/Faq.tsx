import { useState } from 'react'
import FaqItem from '@molecules/FaqItem'
import { contactFaq } from '@/data/faq'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className='bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
        <div className='relative flex items-center justify-center w-full lg:w-[575px] h-auto lg:h-[645px]'>
          <div className='absolute w-[300px] h-[300px] lg:w-[440px] lg:h-[440px] rounded-full bg-yellow-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
          <img
            src='/front-view-cute-boy-white-t-shirt-yellow-jeans-holding-green-skateboard-blue-space.png'
            alt='FAQ'
            className='w-full h-full object-contain z-10'
          />
        </div>

        <div className='flex flex-col gap-14 text-center lg:text-left'>
          <div className='relative'>
            <img
              src='/splatter-lines.svg'
              alt='Splatter Lines'
              className='absolute -top-8 right-1/2 translate-x-1/2 lg:right-20 lg:translate-x-0 w-48'
            />
            <p className='font-bold text-lg text-red-500'>Frequently asked questions</p>
            <h2 className='font-heading text-4xl lg:text-5xl font-bold text-neutral-900'>
              One time in high school.
            </h2>
          </div>
          <div className='flex flex-col gap-8'>
            {contactFaq.map((item, idx) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
