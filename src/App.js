import React from 'react'
import TodoForm from './Components/TodoForm'
import TodoInfo from './Components/TodoInfo'
import TodoList from './Components/TodoList'

const LOCAL_STORAGE_TODO_KEY = 'todo-key-for-ls'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: []
    }


    this.addTodo = this.addTodo.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  // ! to get state from todoForm
  addTodo(todo){
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  }

  // ! to get todos from LS
  componentDidMount(){
    const todosFrLS = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODO_KEY))
    if(todosFrLS){
      this.addTodo(todosFrLS)
      this.setState({
        todos: todosFrLS
      })
    }
  }

  // ! save to LS!
  componentDidUpdate(prevProps, prevState) {
    if(prevState.todos !== this.state.todos.length ) {
      localStorage.setItem(LOCAL_STORAGE_TODO_KEY, JSON.stringify(this.state.todos))
    }
  }

  // ! checkbox
  toggleComplete(id) {
    const newTodos = this.state.todos.map(todo => {
      if(todo.id === id){
        todo.complete = !todo.complete
      }
      return todo
    })

    this.setState({
      todos: newTodos
    })
  }

  // ! removeTodo
  removeTodo(id){
    const newTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos: newTodos
    })
  }

  

  render(){
    const todos = this.state.todos
    return(
      <div className = 'container mt-5 '>
        <h1 className = 'text-center'>REACT TODO</h1>
        <div className = 'mx-auto mt-3' style = {{width: 500}} >
          <TodoInfo todos = {todos}/> 
          <TodoForm  addTodo = {this.addTodo} />
          <TodoList  todos   = {this.state.todos} toggleComplete = {this.toggleComplete} removeTodo = {this.removeTodo} />
        </div>
      </div>
    )
  }
}

export default App