import React from 'react'

function TodoItem({todo, toggleComplete, removeTodo}){
    function handleToggleTodo(){
        toggleComplete(todo.id)
        console.log(todo.complete);
    }

    function handleRemoveTodo(){
        removeTodo(todo.id)
    }

    return (
        <div className = 'list-group-item d-flex align-items-center mb-2' >
            <input  
                style = {{justifyContent: 'flex-start'}} 
                type = 'checkbox'  
                onChange = {handleToggleTodo} 
                checked = {todo.complete ? 'checked': false}
            /> 
            <div    style = {{margin: '0 10px', textDecoration: todo.complete ? 'line-through' : null, }}>{todo.task}</div>
            <button 
                style = {{position: 'absolute', right: 10, top: 10, border: 'none', background: 'transparent'}} 
                onClick = {handleRemoveTodo}
            >
            &times;</button>
        </div>
    )
}

export default TodoItem