import { type ButtonHTMLAttributes } from 'react'

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  isLoading?: boolean
}

export default function SubmitButton({
  children,
  isLoading = false,
  className,
  disabled,
  ...props
}: SubmitButtonProps) {
  return (
    <button
      type='submit'
      disabled={disabled || isLoading}
      className={`w-full bg-secondary text-secondary-foreground rounded-[10px] px-4 py-3 font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:opacity-50 disabled:cursor-not-allowed ${className || ''}`}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  )
}
