type SocialIconProps = {
  href: string
  name: 'twitter' | 'facebook' | 'youtube'
  label: string
  className?: string
  color?: 'purple' | 'white'
}

function getPath(name: SocialIconProps['name']) {
  switch (name) {
    case 'twitter':
      return (
        <path d='M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.87-2.36 8.53 8.53 0 0 1-2.7 1.03 4.25 4.25 0 0 0-7.24 3.88 12.05 12.05 0 0 1-8.75-4.44 4.25 4.25 0 0 0 1.32 5.66 4.22 4.22 0 0 1-1.92-.53v.05a4.25 4.25 0 0 0 3.41 4.17 4.27 4.27 0 0 1-1.92.07 4.25 4.25 0 0 0 3.97 2.95A8.51 8.51 0 0 1 2 19.54a12.03 12.03 0 0 0 6.52 1.91c7.83 0 12.11-6.49 12.11-12.12 0-.18 0-.36-.01-.54A8.67 8.67 0 0 0 24 6.54c-.8.36-1.66.6-2.56.74h.02z' />
      )
    case 'facebook':
      return (
        <path d='M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H8.9v-2.89h1.54V9.79c0-1.52.9-2.36 2.29-2.36.66 0 1.36.12 1.36.12v1.5h-.77c-.76 0-1 .47-1 .95v1.14h1.7l-.27 2.89h-1.43v6.99C18.34 21.12 22 16.99 22 12z' />
      )
    case 'youtube':
      return (
        <path d='M23.5 6.2a3 3 0 0 0-2.1-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.4.6A3 3 0 0 0 .5 6.2C0 7.9 0 12 0 12s0 4.1.5 5.8a3 3 0 0 0 2.1 2.1c1.7.6 9.4.6 9.4.6s7.7 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.7.5-5.8.5-5.8s0-4.1-.5-5.8zM9.6 15.5V8.5L15.6 12l-6 3.5z' />
      )
  }
}

export default function SocialIcon({
  href,
  name,
  label,
  className = '',
  color = 'purple',
}: SocialIconProps) {
  const base =
    'w-8 h-8 rounded-md bg-secondary flex items-center justify-center shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50'
  const iconColor = color === 'white' ? 'text-white' : 'text-primary'
  return (
    <a href={href} aria-label={label} className={`${base} ${iconColor} ${className}`}>
      <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
        {getPath(name)}
      </svg>
    </a>
  )
}
