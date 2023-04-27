import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: false,
  messageSaved:'',
  notes:[],
  //active:null,
  // active:{
  //   id:'ABC123',
  //   title:'',
  //   body:'',
  //   date:1234567,
  //   imageUrls:[], //https://foto1.jpg, http://foto2.jpg
  // }
}

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    savingNewNote: (state)=> {
      state.isSaving = true
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload)
      state.isSaving = false
    },
    setActiveNote: (state, action) => {
      state.active = action.payload
    },
    setNotes : (state, action) => {

    },
    setSaving:(state)=>{

    },
    updateNote: (state,action) =>{

    },
    deleteNodeById: (state, action) => {

    }
 },
})

export const { 
  addNewEmptyNote,
  deleteNodeById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions