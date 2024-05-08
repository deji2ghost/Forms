import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { Login } from './pages/Login'
import { ResetPassword } from './pages/ResetPassword'

function App() {

  return (
    <div className='overflow-hidden'>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/LoginPage' element={<Login />} />
          <Route path='/SignupPage' element={<SignUp />} />
          <Route path='/ResetPage' element={<ResetPassword />} />
        </Routes> 
      </Router>
    </div>
  )
}

export default App
