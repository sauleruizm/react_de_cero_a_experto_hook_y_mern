import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

  const navigate = useNavigate()

	const onLogin = () => {
		navigate('/', {
			replace: true,
		})
	}

  return (
    <h1>LoginPage</h1>
  )
}
