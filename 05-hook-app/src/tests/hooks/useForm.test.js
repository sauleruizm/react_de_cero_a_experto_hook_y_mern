import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useForm } from "../../hooks/index"

describe('Pruebas en  useForm', () => { 

  const initialForm ={
    name:'Saúl',
    email:'saul@mail.com'
  }

  test('debe regresar los valores por defecto', () => { 

    const { result } = renderHook(()=> useForm(initialForm))

    expect( result.current).toEqual({
      name:initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any( Function ),
      onResetForm: expect.any( Function )
    })


   })
  
  
   test('debe debe cambiar el nombre del formulario', () => { 

    const newValue = 'Saúl'
    const { result } = renderHook(()=> useForm(initialForm))
    const { onInputChange } = result.current

    act(()=>{

      onInputChange({target:{name:'name', value: newValue}})
    })

    expect( result.current.name).toEqual( newValue)
    expect( result.current.formState.name).toEqual( newValue)


   })
   
   test('debe debe realizar el reset del formulario', () => { 

    const newValue = 'Saúl'
    const { result } = renderHook(()=> useForm(initialForm))
    const { onInputChange, onResetForm } = result.current

    act(()=>{

      onInputChange({target:{name:'name', value: newValue}})
      onResetForm()
    })

    expect( result.current.name).toEqual( newValue)
    expect( result.current.formState.name).toEqual( newValue)


   })
 })