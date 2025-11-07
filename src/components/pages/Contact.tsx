import ContactHero from '@organisms/ContactHero'
import ContactBody from '@organisms/ContactBody'
import ContactFaq from '@organisms/ContactFaq'

export default function Contact() {
  return (
    <div className='bg-white'>
      <ContactHero />
      <ContactBody />
      <ContactFaq />
    </div>
  )
}
