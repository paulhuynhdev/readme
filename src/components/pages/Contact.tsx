import InnerHero from '@organisms/InnerHero'
import ContactBody from '@organisms/ContactBody'
import Faq from '@organisms/Faq'

export default function Contact() {
  return (
    <div className='bg-white'>
      <InnerHero
        title="Contact Us"
        description="We're here to help. Get in touch with our team."
      />
      <ContactBody />
      <Faq />
    </div>
  )
}
