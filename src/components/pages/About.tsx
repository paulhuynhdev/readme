export default function About() {
  return (
    <div className='bg-white'>
      <section className='max-w-7xl mx-auto px-6 lg:px-8 py-16'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-4xl font-bold text-[#101828]'>About Us</h1>
          <p className='text-[#667085] text-lg'>
            We are building a clean, accessible UI kit and demo application to
            demonstrate layered component design and scalable project structure.
          </p>
          <p className='text-[#667085]'>
            This page is a simple example of a new route composed from existing
            organisms, following the separation of concerns defined in the workspace rules.
          </p>
        </div>
      </section>
    </div>
  )
}