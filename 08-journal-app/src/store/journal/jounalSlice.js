import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: true,
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
    addNewEmptyNote: (state, action) => {
      
    },
    setActiveNote: (state, action) => {

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
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNodeById
} = journalSlice.actions