import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {
  return (
    <ul className='list-group'>
    {
      todos.map( todo => (
        //todoitem
        <TodoItem key={todo.id +1} todo={todo} 
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))
    }
  </ul>
  )
}
