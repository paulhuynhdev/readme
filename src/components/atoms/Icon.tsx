import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const iconVariants = cva('flex items-center justify-center rounded-full w-24 h-24', {
  variants: {
    variant: {
      default: 'bg-primary',
      secondary: 'bg-secondary',
      tertiary: 'bg-tertiary',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface IconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconVariants> {
  name: string
}

export default function Icon({ className, variant, name, ...props }: IconProps) {
  return (
    <div className={cn(iconVariants({ variant }), className)} {...props}>
      <img src={`/icons/${name}.svg`} alt={name} className='w-12 h-12' />
    </div>
  )
}
