import SignUpCard from '@organisms/SignUpCard'
import InnerHero from '@organisms/InnerHero'

export default function SignUp() {
  return (
    <div className='bg-white'>
      <InnerHero
        title="Create Account"
        description="Join us today and start your learning journey with personalized education."
      />
      <SignUpCard />
    </div>
  )
}
