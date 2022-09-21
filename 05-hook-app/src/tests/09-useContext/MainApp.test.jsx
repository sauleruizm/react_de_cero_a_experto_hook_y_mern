import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { MainApp } from '../../09-useContext/MainApp'

describe('Pruebas en el componente <MainApp/>', () => {

  test('debe de mostrar el HomePage', () => { 

    render(
      <MemoryRouter>
        <MainApp/>
      </MemoryRouter>
    )

    expect(screen.getByText('HomePage')).toBeTruthy()

  })


  test('debe de mostrar el LoginPage', () => { 

    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp/>
      </MemoryRouter>
    )

    expect(screen.getByText('LoginPage')).toBeTruthy()

    screen.debug()
  })

})