import Header from '../organisms/Header'
import SignUpCard from '../organisms/SignUpCard'
import InnerHero from '../organisms/InnerHero'
import Footer from '../organisms/Footer'

export default function Home() {
  return (
    <div className='bg-white'>
      <Header />
      <InnerHero />
      <SignUpCard />
      <Footer />
    </div>
  )
}
