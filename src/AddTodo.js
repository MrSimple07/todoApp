import React, {useState} from 'react'

function useInputValue(defaultValue=''){
    const [value, setValue]= useState(defaultValue)
    return{
        bind: {
            value,
            onChange: event=> setValue(event.target.value)
        },
        clear: ()=> setValue(''),
        value: ()=> value,
    }
}

function AddTodo({onCreate}) {
    const input= useInputValue('')

    function submitHandler(event){
        event.preventDefault()

        if (input.value().trim()){
            onCreate(input.value())
            input.clear()
        }
    }

    return (
       <form className='add__todo' onSubmit={submitHandler}>
           <input className="add__input" {...input.bind} />
           <button className="btn btn-primary" type="submit">
               Add Todo
           </button>
       </form>
    )
}

export default AddTodo
