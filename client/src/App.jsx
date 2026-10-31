import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import AuthRedirect from './components/auth/AuthRedirect'
import ProtectedRoute from './components/auth/ProtectedRoute'
import ApplicantDashboard from './components/dashboards/ApplicantDashboard'


function App() {

  return (
    <BrowserRouter>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        pauseOnHover
        theme='light'
      />
      <Routes>
        <Route
          path='/'
          element={
            <AuthRedirect>
              <Home/>
            </AuthRedirect>
          }
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
          path='/signup'
          element={<Signup/>}
        />
        <Route
          path='/login'
          element={
            <AuthRedirect>
              <Login/>
            </AuthRedirect>
          }
        />
        <Route element={<ProtectedRoute allowedRoles={['applicant']}/>}>
          <Route
            path='/applicant/:industry/dashboard'
            element={<ApplicantDashboard/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
