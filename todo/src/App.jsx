import './App.css'
import { useDispatch, useSelector} from 'react-redux'
import { addTodo, deleteTodo } from './store/slices/todoSlice'
import { useState } from 'react'
function App() {
  const dispatch = useDispatch()
  //console.log(todos)
  const handleDelete=(id)=>{
    console.log(id);
    dispatch(deleteTodo(id));
  }
  const todos = useSelector(state=> state.todoSlice.todos)
  console.log(todos)

  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        content: text.trim(),
      }));
      setText('');
    }
  };
  return (
    <div>
      <div className='addtodo'>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      {
        todos?.map((todo)=>(
          <div key={todo?.id}>
            <h4>{todo?.content}</h4>
            <button onClick={()=>handleDelete(todo?.id)}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default App
