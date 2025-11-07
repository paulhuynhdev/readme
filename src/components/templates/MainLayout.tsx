import { Outlet } from 'react-router-dom'
import Header from '@organisms/Header'
import Footer from '@organisms/Footer'

export default function MainLayout() {
  return (
    <div className='bg-white'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}