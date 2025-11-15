import InnerHero from '@organisms/InnerHero'
import LoginCard from '@organisms/LoginCard'

export default function Login() {
  return (
    <div className='bg-white'>
      <InnerHero
        title="Login"
        description="Welcome back! Please sign in to continue your learning journey."
      />
      <LoginCard />
    </div>
  )
}
