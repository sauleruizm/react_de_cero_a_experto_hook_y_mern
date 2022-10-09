import {authReducer, types } from '../../../src/auth'

describe('TEst in authReducer', () => { 

  test('should be returned  the state by default', () => { 

    const state = authReducer ({ logged: false}, {})
    expect(state).toEqual({ logged: false})
  })
  
  test('should de (login) call the login auth y set the user', () => { 

    const action = {
      type: types.login,
      payload: {
        name: 'Saúl',
        id:'123'
      }
    }

    const state = authReducer({logged: false }, action)

    expect(state).toEqual({logged: true, user: action.payload})

  })


  test('debe de (logout) el name del usuario y logged en false', () => { 

    const state = {
      logged: true,
      user:{id:'123', name:'Saúl'}
    }

    const action = { type: types.logout}

    const newState = authReducer(state, action)

    expect(newState).toEqual({logged:false})

  })

})