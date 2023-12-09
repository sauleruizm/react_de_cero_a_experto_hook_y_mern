import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { 
  addNewEmptyNote, 
  deleteNoteById, 
  savingNewNote, 
  setActiveNote, 
  setNotes, 
  setPhotosToActiveNote, 
  setSaving, 
  updateNote
} from "./jounalSlice"
import { loadNotes } from "../../helpers/loadNotes"
import { fileUpload } from "../../helpers/fileUpload"

export const startNewNote = () => {

  return async(dispatch, getState) => {
    
    dispatch( savingNewNote() )
    
    //ui
    const { uid } = getState().auth



    const newNote = {
      body:'',
      date: new Date().getTime(),
      imageUrls:[],
      title:'',
    }

    const newDoc = doc( collection( FirebaseDB ,`${uid}/journal/notes` ) )

    const setDocResp = await setDoc(newDoc, newNote)

    // console.log({newDoc, setDocResp})
    
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
    console.log({uid})
  }
}

export const startSaveNote = () => {

  return async (dispatch, getState) => {
  
    dispatch(setSaving());
  
    const { uid } = getState().auth;
    const { active: note } = getState().journal;
    const noteToFireStore = { ...note};
    delete noteToFireStore.id;

    // console.log(noteToFireStore)
    const docRef = doc(FirebaseDB,`${uid}/journal/notes/${note.id}`);
    await setDoc( docRef, noteToFireStore,{ merge: true } );

    dispatch( updateNote( note ));
  }

}

export const startUploadingFiles = (files =[]) => {
  return async (dispatch) => {
    dispatch( setSaving() );

    const fileUploadPromises = [];
    for( const file of files){
      fileUploadPromises.push( fileUpload( file ))
    }
    const photosUrls = await Promise.all( fileUploadPromises);
    
    dispatch( setPhotosToActiveNote( photosUrls ));
  }
}

export const startDeletingNote = () =>{
  return async ( dispatch, getState) => {
    const {uid} = getState().auth;
    const {active: note } = getState().journal;

    const docRef = doc( FirebaseDB,`${uid}/journal/notes/${note.id}` );
    const resp = await deleteDoc(docRef);

    dispatch( deleteNoteById( note.id ));
  }
}