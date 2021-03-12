import React, { useEffect, useState } from 'react'
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'

const LOCAL_STORAGE_KEY = 'todo-key'

function App () {
  const [todos, setTodos] = useState([])

  // ! get todo from TodoForm 
  function addTodo(todo) {
    setTodos([todo, ...todos])
  }
  // ! get from LS
  useEffect(() => {
    const todosFrLS = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(todosFrLS){
      setTodos(todosFrLS)
    }
  }, [])

  // ! set to LS
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  // ! toggle complete
  function toggleComplete(id){
    setTodos(todos.map(todo => {
        if(todo.id === id){
          return{
            ...todo, complete: !todo.complete
          }
        }
        return todo
      })
    )
  }

  // ! to remove
  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return(
    <div className = 'container mt-5 '>
      <h1 className = 'text-center'>REACT TODO</h1>
      <div className = 'mx-auto mt-3' style = {{width: 500}} >
        <TodoForm addTodo = {addTodo} /> 
        <TodoList 
          todos = {todos} 
          toggleComplete = {toggleComplete} 
          removeTodo = {removeTodo}
        />
      </div>
    </div>
  )
}

export default App