export default function ContactIntro() {
  return (
    <div className='w-full flex flex-col items-center gap-4 md:gap-6 text-center'>
      <div className='flex flex-col items-center gap-2'>
        <span className='text-neutral-600 text-base md:text-lg'>Contact Us</span>
      </div>
      <h2 className='font-heading font-bold text-3xl md:text-4xl leading-[1.3] text-neutral-900'>
        Tell us what you're curious about.
      </h2>
      <p className='text-neutral-600 text-base md:text-lg max-w-2xl'>
        Feel free to reach out to us with any questions or inquiries. We’re here to assist and
        ensure you have the best experience possible. Get in touch today, and we’ll be happy to
        help!
      </p>
    </div>
  )
}
