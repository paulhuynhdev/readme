interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export default function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className={`flex flex-col gap-5 pb-8 ${isOpen ? '' : 'border-b border-neutral-400'}`}>
      <button
        type='button'
        onClick={onToggle}
        className='group w-full flex items-center justify-between gap-4 focus:outline-none rounded-md'
        aria-expanded={isOpen}
        aria-controls={question}
      >
        <span className='text-neutral-900 text-[20px] group-focus-visible:underline'>
          {question}
        </span>
        <span
          className='inline-flex items-center justify-center w-7 h-7 rounded-full bg-white'
          aria-hidden='true'
        >
          <svg
            width='18'
            height='18'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={isOpen ? 'rotate-180 transition-transform' : 'transition-transform'}
          >
            <path
              d='M6 9l6 6 6-6'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div id={question} className='flex flex-col gap-5'>
          <p className='text-neutral-600 text-base'>{answer}</p>
        </div>
      )}
    </div>
  )
}
