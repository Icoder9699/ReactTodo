import React from 'react'
import { v4 } from 'uuid'

export default class TodoForm extends React.Component {
    state = {
        id: '',
        task: '',
        complete: false
    }
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         id: '',
    //         task: '',
    //         complete: false
    //     }
    // }

    // ! to overwrite this state
    onInputChangeHandler = e => {
        this.setState({
           task:  e.target.value, id: v4()
        })
    }

    //! to send app state
    onSubmitHandler = e => {
        e.preventDefault()
        if(this.state.task.trim('')){
            this.props.addTodo(this.state)
            this.setState({
                task : ''
            })
        }
    }

    render(){
        return(
            <form   className = 'bottom-panel d-flex' style = {{width: '100%'}} onSubmit = {this.onSubmitHandler} >
                <input  value = {this.state.task} className = 'form-control new-post-label' onChange = {this.onInputChangeHandler}/>
                <button style = {{width: '20%'}} className = 'btn btn-outline-secondary'>Add</button>
            </form>
        )
    }
}