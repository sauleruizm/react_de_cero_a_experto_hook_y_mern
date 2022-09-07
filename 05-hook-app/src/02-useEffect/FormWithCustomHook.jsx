import { useEffect } from 'react'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, password, email } = useForm({
    username: '',
    email: '',
    password: '',
  })

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
      <h1>Formulario con Custom Hook</h1>
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
      <input
        text='password'
        className='form-control mt-2'
        placeholder='password'
        name='password'
        type='password'
        value={password}
        onChange={onInputChange}
      />

      <button
        className='btn btn-primary'
        onClick={onResetForm}>
        Borrar
      </button>
    </>
  )
}
