import { render, screen } from "@testing-library/react"
import { TodoApp } from '../../08-useReducer/TodoApp'
import { useTodos } from '../../hooks/useTodos'

jest.mock('../../hooks/useTodos')

describe('Pruebas en <TodoApp/>', () => { 

  useTodos.mockReturnValue({
      todos:[
        {id:1, description:'Todo #1', done:false},
        {id:2, description:'Todo #2', done:true},
      ], 
      todosCount:2,
      pendingTodosCount:jest.fn(),
      handleDeleteTodo:jest.fn(),
      handleToggleTodo:jest.fn(),
      handlenewTodo:jest.fn()
    })

  test('debe de mostrar el componente correctamente', () => { 

    render(<TodoApp/>)
    expect( screen.getByText('Todo #1') ).toBeTruthy()
    expect( screen.getByText('Todo #2') ).toBeTruthy()
    expect( screen.getByRole('textbox') ).toBeTruthy()

  })
})