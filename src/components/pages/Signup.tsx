import SignUpCard from '@organisms/SignUpCard'
import InnerHero from '@organisms/InnerHero'

export default function SignUp() {
  return (
    <div className='bg-white'>
      <InnerHero title={''} description={''} />
      <SignUpCard />
    </div>
  )
}
