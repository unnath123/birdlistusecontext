import React, { useState } from 'react'
import { increment, decrement, reset } from './redux/actions/counterActions'
import { add_to_do, delete_todo, edit_todo } from './redux/actions/todoActions'
import store from './store'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const [task, setTask] = useState(null);
  const count = useSelector(state=>state.counter)
  const todo = useSelector(state=>state.todos)
  const dispatch = useDispatch();

  function handleSubmit(){
    dispatch(add_to_do({id:todo.length, title:task}))
    setTask("")
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button>decrement</button>

      <div>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button type="submit" onClick={handleSubmit}>Add task</button>
      </div>

      <div>
        <ul>
        {
          todo.length>0 && 
          todo.map((ele)=>(
            <div>
              <li>{ele.title}</li>
              <button onClick={()=>dispatch(delete_todo(ele.id))}>delete</button>
              <button>edit</button>
            </div>
          ))
        }
        </ul>
      </div>
    </div>
  )
}

export default App