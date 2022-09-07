import { useEffect, useState } from 'react'
import Message from '../Message'

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'sruiz1',
    email: 'saul@hotmail.com',
  })

  const { username, email } = formState

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({ ...formState, [name]: value })
  }

  useEffect(() => {
    // console.log('useEffect called!')
  }, [])

  useEffect(() => {
    // console.log('useEffect formState Changed!')
  }, [formState])

  useEffect(() => {
    // console.log('useEffect email Changed!')
  }, [email])

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        text='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />
      <input
        text='email'
        className='form-control mt-2'
        placeholder='saul@hotmail.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />

      {username === 'sruiz' && <Message />}
    </>
  )
}
