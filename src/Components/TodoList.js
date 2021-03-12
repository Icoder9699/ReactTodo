import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList (props) {
    return(
        <ul className = 'list-group mt-2'>
            {props.todos.map(todo => {
                return <TodoItem todo = {todo} toggleComplete = {props.toggleComplete} removeTodo = {props.removeTodo} key = {todo.id} />
            })}
        </ul>
    )
}