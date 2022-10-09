import {fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import {SearchPage} from '../../../src/heroes/pages'

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Test in <SearchPage />', () => { 


  beforeEach(() => jest.clearAllMocks() );


  test('should to show by default', () => { 

    const {container} = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )

    screen.debug()
    expect(container).toMatchSnapshot() 
  })

  test('should to show batman with value queryString', () => { 

    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    expect( input.value ).toBe('batman')

    const img = screen.getByRole('img')
    expect(img.src).toContain('batman.jpg')

    const alertDanger = screen.getByLabelText('alert-danger')
    expect(alertDanger.style.display).toBe('none')
  })


  test('should to show a error, do not found batman123', () => { 

    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPage />
      </MemoryRouter>
    )

    const alertDanger = screen.getByLabelText('alert-danger')
    expect(alertDanger.style.display).toBe('')
  })
  
  
  test('should to call the Navigate of new screen', () => { 

    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    fireEvent.change(input, {target:{name:'searchText', value:'superman'}})
    
    const form = screen.getByLabelText('form')
    fireEvent.submit(form)

    expect ( mockedUseNavigate).toHaveBeenCalledWith('?q=superman')

  })

})