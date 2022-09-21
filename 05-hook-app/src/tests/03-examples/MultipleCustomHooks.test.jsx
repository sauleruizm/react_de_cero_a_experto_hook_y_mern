import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks} from '../../03-examples/MultipleCustomHooks'
import {useFetch} from '../../hooks/useFetch'
import {useCounter} from '../../hooks/useCounter'

jest.mock('../../hooks/useFetch')
jest.mock('../../hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks />', () => { 

  const mockIncrement = jest.fn()
  
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  })

  beforeEach(() => {
    
    jest.clearAllMocks()
    
  })
  

  test('debe de mostrar el componente por defecto ', () => { 

    useFetch.mockReturnValue({
      data : null,
      isLoading: true,
      hasError:null,
    })

    render( <MultipleCustomHooks /> )

    expect ( screen.getByText('Loading...'))
    expect ( screen.getByText('Braking Bad Quote'))

    const nextButton = screen.getByRole('button', {name:'Next quote'})
    // console.log(nextButton.disabled)
    expect( nextButton.disabled).toBeTruthy()
      

   })

  test('debe de mostrar un Quote', () => { 

    useFetch.mockReturnValue({
      data : [{author: 'Saúl', quote: 'Hola Mundo'}],
      isLoading: false,
      hasError:null,
    })

    render( <MultipleCustomHooks /> )
    expect( screen.getByText('Hola Mundo')).toBeTruthy()
    expect( screen.getByText('Saúl')).toBeTruthy()
    
    const nextButton = screen.getByRole('button',{ name:'Next quote' })
    expect( nextButton.disabled ).toBeFalsy()

  })

  test('debe de llamar la función de incrementar', () => { 

    
    useFetch.mockReturnValue({
      data: [{author:'Saúl', quote: 'Hola Mundo'}],
      isLoading: false,
      hasError: null,
    })
    

    render( <MultipleCustomHooks/> )
    const nextButton = screen.getByRole('button', { name: 'Next quote' })
    fireEvent.click( nextButton )

    expect( mockIncrement ).toHaveBeenCalled()
  })
  
 })