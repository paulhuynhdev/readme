interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export default function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className='flex flex-col gap-2 border-b border-neutral-400 pb-8'>
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
        <span className='inline-flex items-center justify-center w-7 h-7' aria-hidden='true'>
          <img
            src='/icons/arrow-circle-down.svg'
            alt=''
            className={isOpen ? 'rotate-180 transition-transform' : 'transition-transform'}
          />
        </span>
      </button>

      {isOpen && (
        <div id={question}>
          <p className='text-neutral-600 text-base'>{answer}</p>
        </div>
      )}
    </div>
  )
}
