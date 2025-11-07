import HomeHero from '@organisms/HomeHero'
import LearnWithUs from '@organisms/LearnWithUs'
import AboutUs from '@organisms/AboutUs'
import WhyChooseUs from '@organisms/WhyChooseUs'
import Faq from '@organisms/Faq'
import Testimonial from '@organisms/Testimonial'
import Team from '@organisms/Team'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <HomeHero />
      <LearnWithUs />
      <AboutUs />
      <WhyChooseUs />
      <Faq />
      <Testimonial />
      <Team />
    </div>
  )
}
