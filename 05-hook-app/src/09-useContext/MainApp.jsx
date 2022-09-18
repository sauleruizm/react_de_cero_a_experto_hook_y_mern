import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import {HomePage} from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
  return (
    <UserProvider>
      <NavBar/>
      <hr/>
      
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='about' element={<AboutPage/>} />
        <Route path='login' element={<LoginPage/>} />

        /* A catch-all route. If the user navigates to a route that is not defined, it will redirect to
        the about page. */
        <Route path='/*' element={<Navigate to='about' />}/>
      </Routes>
    </UserProvider>
  )
}
