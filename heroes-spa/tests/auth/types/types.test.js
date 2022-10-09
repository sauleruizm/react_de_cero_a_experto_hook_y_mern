import { types } from '../../../src/auth'

describe('tests for types', () => { 

  test('should return this types', () => { 

    expect(types).toEqual({ 
      login:'[Auth] Login',
      logout:'[Auth] Logout',
    })

  })

})