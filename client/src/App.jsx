import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Signup from './pages/Signup'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route
          path='/aboutUs'
          element={<AboutUs/>}
        />
        <Route
          path='/contactUs'
          element={<ContactUs/>}
        />
        <Route
          path='/signUp'
          element={<Signup/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
