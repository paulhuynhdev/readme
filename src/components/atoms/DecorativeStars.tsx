interface StarPosition {
  image: 'stars1' | 'stars2'
  position: string
  size: string
  opacity?: string
}

interface DecorativeStarsProps {
  variant?: 'login' | 'signup'
}

const loginStars: StarPosition[] = [
  {
    image: 'stars1',
    position: 'top-6 sm:top-10 md:top-16 left-4 sm:left-8 md:left-20',
    size: 'w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12',
    opacity: 'opacity-60',
  },
  {
    image: 'stars2',
    position: 'bottom-6 sm:bottom-10 md:bottom-16 right-4 sm:right-8 md:right-20',
    size: 'w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10',
    opacity: 'opacity-40',
  },
]

const signupStars: StarPosition[] = [
  {
    image: 'stars1',
    position: 'top-4 sm:top-8 md:top-20 left-4 sm:left-8 md:left-20',
    size: 'w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16',
    opacity: 'opacity-60',
  },
  {
    image: 'stars2',
    position: 'top-8 sm:top-16 md:top-32 right-4 sm:right-8 md:right-32',
    size: 'w-6 sm:w-10 md:w-12 h-6 sm:h-10 md:h-12',
    opacity: 'opacity-40',
  },
  {
    image: 'stars1',
    position: 'bottom-8 sm:bottom-16 md:bottom-32 left-4 sm:left-8 md:left-32',
    size: 'w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8',
    opacity: 'opacity-30',
  },
  {
    image: 'stars2',
    position: 'bottom-4 sm:bottom-8 md:bottom-20 right-4 sm:right-8 md:right-20',
    size: 'w-5 sm:w-8 md:w-10 h-5 sm:h-8 md:h-10',
    opacity: 'opacity-50',
  },
]

export default function DecorativeStars({ variant = 'login' }: DecorativeStarsProps) {
  const stars = variant === 'login' ? loginStars : signupStars

  return (
    <>
      {stars.map((star, index) => (
        <img
          key={index}
          src={`/${star.image}.svg`}
          alt=''
          aria-hidden='true'
          loading='lazy'
          decoding='async'
          className={`absolute ${star.position} ${star.size} ${star.opacity || ''} hidden sm:block`}
        />
      ))}
    </>
  )
}
