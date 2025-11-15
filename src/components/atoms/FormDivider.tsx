interface FormDividerProps {
  text?: string
}

export default function FormDivider({ text = 'or continue with' }: FormDividerProps) {
  return (
    <div className='flex items-center gap-4'>
      <div className='h-px flex-1 bg-neutral-200' />
      <span className='text-sm text-neutral-500'>{text}</span>
      <div className='h-px flex-1 bg-neutral-200' />
    </div>
  )
}
