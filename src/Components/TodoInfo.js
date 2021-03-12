import React from 'react'

export default function TodoInfo({todos}){
    return (
        <div className = 'd-flex align-items-center justify-content-between mb-2'>
            <h5 style = {{margin: 0, padding: 0}}>List of tasks: {todos.length} </h5>
            <strong>Done: {todos.filter(todo => todo.complete).length}</strong>
        </div>
    )
}