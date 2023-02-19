import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'checking', //not-authinticated, authenticated
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
}

export const authSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    login: (state, action) => {
      
    },
    logout: (state, payload) => {
    
    },
    checkingCredentials: (state) => {
      state.status = 'checking'
    }
 },
})

export const { login, logout, checkingCredentials } = authSlice.actions