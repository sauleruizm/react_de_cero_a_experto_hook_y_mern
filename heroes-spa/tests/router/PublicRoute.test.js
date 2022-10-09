import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router/PublicRouter'

describe('test in <PublicRoute />', () => { 

  test('should to show the children is not auth', () => {  

    const contextValue = {
      logged: false
    }

    render(
      <AuthContext.Provider value={ contextValue }>
          <PublicRoute>
              <h1>Ruta pública</h1>
          </PublicRoute>
      </AuthContext.Provider>
    )

    expect( screen.getByText('Ruta pública') ).toBeTruthy();

  })

  test('should to navigate if is auth', () => { 

    const contextValue = {
      logged: true,
      user: { name:'Saúl', id:'abc'}
    }

    render(
      <AuthContext.Provider value={ contextValue }>
          <MemoryRouter initialEntries={['/login']}>
            <Routes>
              <Route path='login' element={
                <PublicRoute>
                  <h1>Public Route</h1>
                </PublicRoute>
              }/>
              <Route path='marvel' element={<h1>Marvel Page</h1> }/>
            </Routes>
            
          </MemoryRouter>
      </AuthContext.Provider>
    )

    expect( screen.getByText('Marvel Page') ).toBeTruthy();

  })

})