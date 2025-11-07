import Icon from '@/components/atoms/Icon'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/molecules/Card'

const whyChooseUs = [
  {
    title: 'Expert Mentors',
    description: 'General Science is a group of subjects Physics, Chemistry, Biology,Life Science',
    variant: 'default' as const,
    icon: 'expert-mentors',
    iconVariant: 'default' as const,
  },
  {
    title: 'Child Management',
    description: 'General Science is a group of subjects Physics, Chemistry, Biology,Life Science',
    variant: 'shadow' as const,
    icon: 'child-management',
    iconVariant: 'secondary' as const,
  },
  {
    title: 'Group Study',
    description: 'General Science is a group of subjects Physics, Chemistry, Biology,Life Science',
    variant: 'default' as const,
    icon: 'group-study',
    iconVariant: 'tertiary' as const,
  },
]

export default function WhyChooseUs() {
  return (
    <section className='bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-24 flex flex-col gap-24'>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10'>
          <div className='flex flex-col gap-2'>
            <p className='font-heading font-bold text-lg text-danger'>Why choose us</p>
            <h2 className='font-heading text-5xl font-bold text-neutral-900 max-w-md'>
              What you choose also chooses you.
            </h2>
          </div>
          <p className='text-neutral-600 max-w-md text-lg'>
            The knowledge that he had left me with no intent ever to return had come over me in tiny
            droplets of realization spread over the years. And each droplet of comprehension.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {whyChooseUs.map((item) => (
            <Card key={item.title} variant={item.variant} className='flex flex-col gap-8'>
              <CardContent className='p-0'>
                <Icon name={item.icon} variant={item.iconVariant} />
              </CardContent>
              <CardHeader className='p-0 space-y-2'>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardFooter className='p-0'>
                <a href='#' className='text-primary font-medium'>
                  Learn more
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
