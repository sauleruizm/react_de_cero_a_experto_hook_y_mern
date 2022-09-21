import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { useCounter } from '../../hooks/index'

describe('Pruebas en el useCounter',  () => { 

  test('debe retornar los valores por defecto',  () => { 
    
    const { result } = renderHook( ()=> useCounter())
    const { counter, decrement, increment, reset } = result.current

    expect ( counter ).toBe(10)
    expect ( decrement ).toEqual( expect.any(Function))
    expect ( increment ).toEqual( expect.any(Function))
    expect ( reset ).toEqual( expect.any(Function))
  })

  test('debe generar el counter con el valor de 100', () => { 
    const { result } = renderHook( ()=> useCounter(100))
    const { counter } = result.current

    expect ( counter ).toBe(100)
  })

  test('debe incrementar el contador', () => { 

    const { result } = renderHook( ()=> useCounter(100))
    const { counter, increment } = result.current

    act( () => {
      
      increment()
      increment(2)

    })
    
    expect(result.current.counter).toBe(103)

   })

   test('debe de realizar el reset', () => { 
    
    const { result } = renderHook ( ( )=> useCounter(100))
    const { counter, decrement, reset } = result.current

    act(()=> {
      decrement()
      reset()
    })

    expect ( result.current.counter ).toBe(100)

   })

 })