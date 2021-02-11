import './App.css';
import React, { useState, useEffect } from 'react';
import TodoList from './Todo/TodoList';
import Context from './context'
import Loader from './Loader.js'

const AddTodo= React.lazy(()=> import('./AddTodo'))

function App() {
  const[todos, setTodos]=useState([
  ])

  const [loading, setLoading]= useState(true);

  useEffect(()=>{
    const raw = localStorage.getItem('todos') ||  []
    setTodos(JSON.parse(raw))
  }, [])

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  

  function toggleTodo(id){
   setTodos(todos.map(todo=>{
      if(todo.id===id){
        todo.completed= !todo.completed
      }
      return todo
    })
    )
  }

  function removeTodo(id){
    setTodos(todos.filter(todo=> todo.id !==id))
  }

  function addTodo(title){
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return(
    <Context.Provider value={{removeTodo: removeTodo}}>
      <div className="app"> 
        <h1>Todo App</h1>
        <React.Suspense fallback={<p style={{textAlign:'center'}}>Loading....</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : ( <p className='noTodos'>No Todos!</p>)} 
        <footer className='app__footer'>Created by <button className='btn btn-light' >
           <a href='https://mrsimple07.github.io/portfolio.github.io'> MrSimple </a>
           </button>
        </footer>
      </div>      
    </Context.Provider>

    
  )
}




export default App;
