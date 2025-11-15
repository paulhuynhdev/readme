interface GoogleAuthButtonProps {
  onClick?: () => void
}

export default function GoogleAuthButton({ onClick }: GoogleAuthButtonProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='w-full flex items-center justify-center gap-3 bg-white text-neutral-500 border border-neutral-300 rounded-lg px-4 py-3 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors'
      aria-label='Continue with Google'
    >
      <img src='/google.svg' alt='' className='w-5 h-5' />
      <span>Continue with Google</span>
    </button>
  )
}
