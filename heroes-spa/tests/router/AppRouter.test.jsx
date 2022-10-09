import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../src/auth'
import { AppRouter } from '../../src/router'

describe('Test for <AppRouter />', () => { 

  test('should show the login, if not is auth', () => { 

      const contextValue = {
        logged: false,
      }

      render (

        <MemoryRouter initialEntries={['/marvel']}>
          <AuthContext.Provider value={ contextValue }>
            <AppRouter />
          </AuthContext.Provider>
        </MemoryRouter>
      )

      // screen.debug()
      expect( screen.getAllByText('Login').length).toBe(2)

  })

  test('should show the Marvel component if is auth', async () => { 

    const contextValue = {
      logged: true,
      user: { name:'Saúl', id:'abc'}
    }

    render (

        <MemoryRouter initialEntries={['/marvel']}>
          <AuthContext.Provider value={ contextValue }>
            <AppRouter />
          </AuthContext.Provider>
        </MemoryRouter>
      )

      // screen.debug()
      expect( screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)

  })
})