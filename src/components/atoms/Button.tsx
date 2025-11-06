import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'yellow'
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const base =
    'px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm font-medium'
  const styles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400',
    ghost: 'text-gray-600 hover:text-gray-900 focus:ring-gray-400',
    yellow: 'bg-[#F6D162] text-[#101828] hover:bg-[#e8c252] focus:ring-yellow-300 rounded-[10px]',
  } as const
  return <button className={`${base} ${styles[variant]} ${className}`} {...props} />
}
