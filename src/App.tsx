import { Routes, Route } from 'react-router-dom'
import MainLayout from '@templates/MainLayout'
import Home from '@pages/Home'
import About from '@pages/About'
import NotFound from '@pages/NotFound'
import Login from '@pages/Login'
import SignUp from '@pages/Signup'
import Contact from '@pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
