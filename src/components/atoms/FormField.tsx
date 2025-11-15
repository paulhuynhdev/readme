import { type InputHTMLAttributes } from 'react'

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export default function FormField({ label, error, id, className, ...props }: FormFieldProps) {
  const inputId = id || props.name || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={inputId} className='text-sm text-neutral-700'>
        {label}
      </label>
      <input
        id={inputId}
        className={`w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary ${error ? 'border-red-500' : ''} ${className || ''}`}
        {...props}
      />
      {error && <p className='text-sm text-red-500'>{error}</p>}
    </div>
  )
}
