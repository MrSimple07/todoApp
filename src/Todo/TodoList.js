import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
  const styles={
    listStyle: 'none'
  }
  return (
    <div>
      <ul style={styles} className="todo__list">
        {props.todos.map((todo, index)=>{
          return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle} />
        })}
      </ul>
    </div>
  )
}


export default TodoList
