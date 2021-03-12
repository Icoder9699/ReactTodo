import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos, toggleComplete, removeTodo}){
    return(
        <ul className = 'list-group mt-2'>
            {todos.map(todo => {
                return <TodoItem todo = {todo} toggleComplete = {toggleComplete}  removeTodo = {removeTodo} key = {todo.id} />
            })}
        </ul>
    )
}

export default TodoList