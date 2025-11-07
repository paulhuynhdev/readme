import ContactIntro from '@molecules/ContactIntro'

export default function ContactBody() {
  return (
    <section className='max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20'>
      <div className='flex flex-col items-center gap-10'>
        <ContactIntro />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full'>
          <aside className='bg-neutral-50 rounded-xl border border-neutral-200 p-6 md:p-8'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-xl font-semibold text-neutral-900'>Contact Information</h3>
                <p className='text-neutral-600 text-sm'>
                  Reach our team directly using the details below.
                </p>
              </div>

              <div className='flex flex-col gap-4'>
                <div className='flex items-start gap-3'>
                  <div className='w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-secondary-foreground'>
                    <span className='text-sm font-medium'>@</span>
                  </div>
                  <div>
                    <p className='text-sm text-neutral-600'>Email</p>
                    <a href='mailto:support@readme.school' className='text-neutral-900 font-medium'>
                      support@readme.school
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-secondary-foreground'>
                    <span className='text-sm font-medium'>📞</span>
                  </div>
                  <div>
                    <p className='text-sm text-neutral-600'>Phone</p>
                    <a href='tel:+15551234567' className='text-neutral-900 font-medium'>
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-secondary-foreground'>
                    <span className='text-sm font-medium'>📍</span>
                  </div>
                  <div>
                    <p className='text-sm text-neutral-600'>Address</p>
                    <p className='text-neutral-900 font-medium'>
                      123 Learning Ave, Child City, USA
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-secondary-foreground'>
                    <span className='text-sm font-medium'>⏰</span>
                  </div>
                  <div>
                    <p className='text-sm text-neutral-600'>Office hours</p>
                    <p className='text-neutral-900 font-medium'>Mon–Fri, 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className='h-px bg-neutral-200' />

              <div className='flex flex-col gap-2'>
                <p className='text-sm text-neutral-600'>Follow us</p>
                <div className='flex items-center gap-3'>
                  <a
                    href='#'
                    aria-label='Twitter'
                    className='w-8 h-8 rounded-md bg-secondary flex items-center justify-center text-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50'
                  >
                    <img src='/twitter.svg' alt='' className='w-6 h-6' />
                  </a>
                  <a
                    href='#'
                    aria-label='Facebook'
                    className='w-8 h-8 rounded-md bg-secondary flex items-center justify-center text-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50'
                  >
                    <img src='/facebook.svg' alt='' className='w-4 h-4' />
                  </a>
                  <a
                    href='#'
                    aria-label='YouTube'
                    className='w-8 h-8 rounded-md bg-secondary flex items-center justify-center text-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50'
                  >
                    <img src='/youtube.svg' alt='' className='w-4 h-4' />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <div className='bg-white rounded-xl border border-neutral-200 p-6 md:p-8'>
            <div className='flex flex-col gap-2 mb-6'>
              <h2 className='text-2xl font-bold text-neutral-900'>Send us a message</h2>
              <p className='text-neutral-600 text-sm'>We typically respond within 24 hours.</p>
            </div>
            <form className='flex flex-col gap-5' noValidate>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='contact-name' className='text-sm text-neutral-700'>
                    Full name
                  </label>
                  <input
                    id='contact-name'
                    name='name'
                    type='text'
                    placeholder='Enter your full name'
                    required
                    className='w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='contact-email' className='text-sm text-neutral-700'>
                    Email
                  </label>
                  <input
                    id='contact-email'
                    name='email'
                    type='email'
                    placeholder='you@example.com'
                    required
                    autoComplete='email'
                    className='w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary'
                  />
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='contact-subject' className='text-sm text-neutral-700'>
                  Subject
                </label>
                <input
                  id='contact-subject'
                  name='subject'
                  type='text'
                  placeholder='What is this regarding?'
                  required
                  className='w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='contact-message' className='text-sm text-neutral-700'>
                  Message
                </label>
                <textarea
                  id='contact-message'
                  name='message'
                  placeholder='Write your message...'
                  rows={6}
                  required
                  className='w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary min-h-[140px]'
                />
              </div>

              <div className='flex items-start gap-2'>
                <input
                  id='contact-consent'
                  name='consent'
                  type='checkbox'
                  className='mt-1 w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary'
                />
                <label htmlFor='contact-consent' className='text-sm text-neutral-600'>
                  I consent to being contacted and agree to the Privacy Policy.
                </label>
              </div>

              <button
                type='submit'
                className='w-full bg-secondary text-secondary-foreground rounded-[10px] px-4 py-3 font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary'
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
