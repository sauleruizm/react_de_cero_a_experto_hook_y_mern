import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router'

describe('Test for <PrivateRoute />', () => { 

  test('should show the children if auth', () => { 

    const contextValue = {
      logged: true,
      user: { name:'Saúl', id:'abc'}
    }

    Storage.prototype.setItem = jest.fn()

    render(
      <AuthContext.Provider value={ contextValue }>
          <MemoryRouter initialEntries={['/login']}>
            <Routes>
              <Route path='login' element={
                <PrivateRoute>
                  <h1>Private Route</h1>
                </PrivateRoute>
              }/>
              <Route path='marvel' element={<h1>Marvel Page</h1> }/>
            </Routes>
            
          </MemoryRouter>
      </AuthContext.Provider>
    )

    expect( screen.getByText('Private Route') ).toBeTruthy();
    expect( localStorage.setItem).toHaveBeenCalled()
  })
})