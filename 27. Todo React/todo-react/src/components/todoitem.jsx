import { useState } from 'react';
const TodoItem = ({children,todos,setTodos,item}) => {
  const [liClass,setLiClass] = useState('list-group-item text-primary');

  function deleteToDo(){
    let arr = [...todos];
    arr.splice(item,1);
    setTodos(arr);
  }
  function markAsDone(){
    setLiClass('list-group-item text-primary text-decoration-line-through');
    let arr = [...todos];
    arr[item].isCompleted = true;
    setTodos(arr);
  }
  return (
    <li className={liClass}> {children}
    <button onClick={()=>{markAsDone()}} className="btn btn-warning mx-3">Mark as done</button>
     <button onClick={()=>{deleteToDo()}} className="btn btn-danger mx-2">Delete</button>

    </li>
  )
}

export default TodoItem