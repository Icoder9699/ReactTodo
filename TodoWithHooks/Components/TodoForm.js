import React, { useState } from 'react'
import { v4 } from 'uuid';

function TodoForm ({addTodo}) {
    //! state 
    const [todo, setTodo] = useState({
        id: '',
        task: '',
        completed: false
    })

    // ! add to state
    function handleInputChange(e){
        setTodo({...todo, task: e.target.value})
    }

    // ! add to App State 
    function handleSubmit(e){
        e.preventDefault()
        if(todo.task.trim('')){             //! проверяем есть ли данные 
            addTodo({...todo, id: v4()})   //! отправим в глобал стейт
            setTodo({...todo, task: ''})  //! очистим инпут
        }
      
    }


    return (
        <form className = 'form' style = {{width: '100%'}} onSubmit = {handleSubmit} >
            <input value = {todo.task} style = {{width: '80%'}} className = 'input' onChange = {handleInputChange}/>
            <button style = {{width: '20%'}} className = 'btn btn-warning'>Add</button>
        </form>
    )
}

export default TodoForm