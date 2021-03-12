import React from 'react'

export default function TodoItem ({todo, toggleComplete, removeTodo}){
    
    const handleToggleComplete = () => {
        toggleComplete(todo.id)
    }

    function handleRemoveTodo(){
        removeTodo(todo.id)
    }


    return (
         <div className = 'list-group-item d-flex align-items-center mb-2 outline' >
            <input  
                style = {{justifyContent: 'flex-start'}} 
                type = 'checkbox'  
                onChange = {handleToggleComplete} 
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