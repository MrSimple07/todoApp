import React, {useContext} from 'react';
import Context from '../context'

function TodoItem({todo, index, onChange}){

    const {removeTodo}= useContext(Context)
    const classes=[]
    
    if(todo.completed){
        classes.push('done')
    }

    const styles={
        li:{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: '6px',
            padding: '0.5rem 1rem',
            marginBottom: '0.5rem',
            color: 'white'
        },
        input: {
            marginRight: '1rem'
        },
    }
    return(
        <li style={styles.li}>
            <span className={classes.join(' ')}>    
                <input type="checkbox"
                 style={styles.input} 
                 onChange={()=>onChange(todo.id)}
                 checked={todo.completed}
                 /> 
                <strong>{ index+1 }</strong> {todo.title}
            </span>
            <button className="btn btn-primary" onClick={()=> removeTodo(todo.id)}>&times;</button>
         </li>
    )
}

export default TodoItem;