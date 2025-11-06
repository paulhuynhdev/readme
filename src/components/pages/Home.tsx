import Button from '../atoms/Button'

export default function Home() {
  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow p-6 text-center">
        <h1 className="text-3xl font-semibold text-sky-900">Read Me UI Kit</h1>
        <p className="mt-2 text-sky-700">Child Education Web UI Kit</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button>Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </div>
  )
}