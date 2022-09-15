import React, { useEffect, useReducer } from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './TodoReducer'

export const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: ' Recolectar la piedra del alma',
  //   done: false,
  // },
  // {
  //   id: new Date().getTime() * 3,
  //   description: ' Recolectar la piedra del tiempo',
  //   done: false,
  // },
]


const init = () => {
  console.log(localStorage.getItem('todos'))
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  
    return () => {
      
    }
  }, [todos])


  const handleDeleteTodo = (id) => {
    dispatch({
      type:'[TODO] Remove Todo',
      payload: id
    })
    // console.log(id)
  }
  

  const handleNewTodo =(todo)=>{
    // console.log({todo})
    const action = {
      type:'[TODO] Add Todo',
      payload: todo
    }

    dispatch(action)
  }

  const handleToggleTodo = (id) => {
    // console.log(id)
    dispatch({
      type:'[TODO] Toggle Todo',
      payload: id
    })
  }

  return (
    <>
      <h1>TodoApp (10), <small>Pendientes: 2</small></h1>
      <hr/>
      <div className='row'>
        <div className='col-7'>
          <TodoList todos={todos} 
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr/>
          <TodoAdd onNewTodo={handleNewTodo}/>
          
        </div>
      </div>
    </>
  )
}
