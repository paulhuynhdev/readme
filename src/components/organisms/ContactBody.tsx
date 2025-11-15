import { useState } from 'react'
import ContactIntro from '@molecules/ContactIntro'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
  consent: boolean
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
  consent?: string
}

export default function ContactBody() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    if (!formData.consent) {
      newErrors.consent = 'You must consent to being contacted'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitStatus(null)

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log('Form submitted:', formData)

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        consent: false,
      })
      setErrors({})
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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

            {submitStatus === 'success' && (
              <div className='mb-4 p-4 bg-green-50 border border-green-200 rounded-lg'>
                <p className='text-sm text-green-800'>
                  Thank you for your message! We'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className='mb-4 p-4 bg-red-50 border border-red-200 rounded-lg'>
                <p className='text-sm text-red-800'>
                  Something went wrong. Please try again later.
                </p>
              </div>
            )}

            <form className='flex flex-col gap-5' onSubmit={handleSubmit} noValidate>
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
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-neutral-300'
                    } px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                  {errors.name && (
                    <p className='text-sm text-red-600'>{errors.name}</p>
                  )}
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
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete='email'
                    className={`w-full rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-neutral-300'
                    } px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                  {errors.email && (
                    <p className='text-sm text-red-600'>{errors.email}</p>
                  )}
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
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${
                    errors.subject ? 'border-red-500' : 'border-neutral-300'
                  } px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary`}
                />
                {errors.subject && (
                  <p className='text-sm text-red-600'>{errors.subject}</p>
                )}
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
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-neutral-300'
                  } px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary min-h-[140px]`}
                />
                {errors.message && (
                  <p className='text-sm text-red-600'>{errors.message}</p>
                )}
              </div>

              <div className='flex flex-col gap-2'>
                <div className='flex items-start gap-2'>
                  <input
                    id='contact-consent'
                    name='consent'
                    type='checkbox'
                    checked={formData.consent}
                    onChange={handleChange}
                    className='mt-1 w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary'
                  />
                  <label htmlFor='contact-consent' className='text-sm text-neutral-600'>
                    I consent to being contacted and agree to the Privacy Policy.
                  </label>
                </div>
                {errors.consent && (
                  <p className='text-sm text-red-600'>{errors.consent}</p>
                )}
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-secondary text-secondary-foreground rounded-[10px] px-4 py-3 font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
