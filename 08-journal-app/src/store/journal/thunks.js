import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes } from "./jounalSlice"
import { loadNotes } from "../../helpers/loadNotes"

export const startNewNote = () => {

  return async(dispatch, getState) => {
    
    dispatch( savingNewNote() )
    
    //ui
    const { uid } = getState().auth



    const newNote = {
      title:'',
      body:'',
      date: new Date().getTime()
    }

    const newDoc = doc( collection( FirebaseDB ,`${uid}/journal/notes` ) )

    const setDocResp = await setDoc(newDoc, newNote)

    console.log({newDoc, setDocResp})
    
    //dispatch
    dispatch( addNewEmptyNote( newNote ))
    dispatch( setActiveNote( newNote ))
    //dispatch ( newNote )

    //dispatch ( activarNote)
  }
}

export const startLoadingNotes = ( ) => {

  return async (dispatch, getState) => {
   
    const { uid } = getState().auth 
    if (!uid) throw Error('El UID del usuario no existe')

    const notes = await loadNotes( uid )

    dispatch( setNotes( notes ) )
    // console.log({uid})
  }
}