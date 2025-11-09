import Button from '@/components/atoms/Button'
import { Checkbox } from '@/components/atoms/Checkbox'
import { Input } from '@/components/atoms/Input'
import { Textarea } from '@/components/atoms/Textarea'

function Contact() {
  return (
    <div className='px-6 md:px-12 lg:px-[120px] py-16 lg:py-[100px] flex flex-col gap-12 lg:gap-[140px]'>
      <div className='relative flex justify-center flex-col items-center gap-4'>
        <img
          src='/star-red.svg'
          alt='star red'
          className='w-[42px] h-[40px] absolute top-0 right-[300px]'
        />
        <span className='text-lg font-bold text-danger'>Contact Us</span>
        <div className='relative'>
          <h2 className='text-5xl font-bold'>The Way to Contact Us</h2>
          <img
            src='/splatter-lines.svg'
            alt='Splatter Lines'
            className='w-[218px] h-[21px] absolute -right-[88px] top-[36px]'
          />
        </div>
        <p className='max-w-[740px] text-lg font-normal text-gray-600-alt'>
          Online courses offer flexible, accessible learning for personal and professional growth.
          They cover diverse topics, allowing you to study anytime, anywhere, at your own pace.
        </p>
      </div>
      <section className='flex gap-[100px]'>
        <div className='flex-1 flex flex-col gap-4'>
          <img
            alt='Contact'
            className='h-[268px] w-[482px] rounded-lg object-cover'
            src='/kid-raise-hand.png'
          />
          <div className='flex flex-col gap-2'>
            <p className='text-lg text-gray-500'>Contact Us</p>
            <h2 className='text-3xl font-semibold'>Tell us what you're curious about.</h2>
            <p className='text-gray-500 max-w-[484px]'>
              Feel free to reach out to us with any questions or inquiries. We’re here to assist and
              ensure you have the best experience possible. Get in touch today, and we’ll be happy
              to help!
            </p>
          </div>
        </div>
        <form className='flex-1 flex flex-col gap-8'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <Input placeholder='Your Name' />
            <Input placeholder='Email Address' type='email' />
            <Input placeholder='Phone Number' type='tel' />
            <Input placeholder='Subject' />
          </div>
          <Textarea placeholder='Message' />
          <div className='flex items-center gap-2'>
            <Checkbox id='save-info' />
            <label className='text-sm text-gray-500' htmlFor='save-info'>
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>
          <Button variant='yellow' className='w-full md:w-auto h-[62px]'>
            Submit Now
          </Button>
        </form>
      </section>
    </div>
  )
}

export default Contact
