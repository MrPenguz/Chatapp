import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Routes , Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SIgnupPage from './pages/SIgnupPage'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import { axiosInstance } from './lib/axios'
import { useAuthStore } from './store/useAuthStore'

const App = () => {
  const {authUser , checkAuth}=useAuthStore()

  useEffect(() => {
    checkAuth();

  }, [checkAuth]);
  console.log({authUser})
  
  return (
    <div className='text-red-500'>
      <Navbar/>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<SIgnupPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/settings' element={<SettingsPage/>}/>
    <Route path='/profile' element={<ProfilePage/>}/>
    </Routes>

    </div>
  )
}

export default App