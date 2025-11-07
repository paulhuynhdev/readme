import FaqItem from '@molecules/FaqItem'
import { contactFaq } from '@/data/faq'
import { useState } from 'react'

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className='w-full bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20 lg:py-[100px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14'>
          <div className='w-full h-[420px] md:h-[520px] lg:h-[646px] rounded-xl overflow-hidden flex items-center justify-center'>
            <img
              src='/front-view-cute-boy-white-t-shirt-yellow-jeans-holding-green-skateboard-blue-space.png'
              alt=''
              aria-hidden='true'
            />
          </div>

          <div className='w-full max-w-[570px] flex flex-col gap-14'>
            <div className='relative flex flex-col gap-2'>
              <img
                src='/splatter-lines.svg'
                alt=''
                aria-hidden='true'
                className='absolute top-[76px] right-0 w-[200px] md:w-[260px] lg:w-[219px] h-[40px] md:h-[50px] lg:h-[42px] opacity-80'
              />
              <span className='font-heading font-bold text-lg text-danger'>
                Frequently asked questions
              </span>
              <h3 className='font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-neutral-900'>
                One time in high school.
              </h3>
            </div>

            <div className='flex flex-col gap-8'>
              {contactFaq.map((item, idx) => (
                <FaqItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === idx}
                  onToggle={() => handleToggle(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
