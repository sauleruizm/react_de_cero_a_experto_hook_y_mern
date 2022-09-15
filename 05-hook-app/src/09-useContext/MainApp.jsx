import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {HomePage} from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'

export const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      <hr/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/about' element={<AboutPage/>} />

        /* A catch-all route. If the user navigates to a route that is not defined, it will redirect to
        the about page. */
        <Route path='/*' element={<Navigate to='about' />}/>
      </Routes>
    </>
  )
}
