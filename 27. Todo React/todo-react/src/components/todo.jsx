import TodoList from './todolist';
import TodoItem from './todoitem';
import AddToDo from './addtodo';
const Todo = ({todos,setTodos}) => {

  function sortByDate(){
    let todosArr = [...todos];
    todosArr.sort((a,b)=>{
     return  b.toDoDate - a.toDoDate;
    });
    setTodos(todosArr);
  }
  function sortCompletedTodos(){
    let todosArr = [...todos];
    let completedArr = todosArr.filter(todo=>todo.isCompleted);
     setTodos(completedArr);
  }

  return (
    <div className='border my-5 px-5 py-1'>
      <h4 className='text-center'>ToDoList</h4>
      <AddToDo todos={todos} setTodos={setTodos} />
      <TodoList>
        {todos.map((todo,index)=>{
          return <TodoItem key={todo.id} todos={todos} setTodos={setTodos} item={index} >
            
            {todo.description}</TodoItem>
        })}
      </TodoList>
      <input className='form-control my-3' placeholder='Search Todo' type="text" />
      <button onClick={()=>{sortCompletedTodos()}} className='btn btn-success'>Sort Completed todos</button>
      <button onClick={()=>{sortByDate()}} className='btn btn-warning mx-2'>Sort by Date</button>
     
    </div>
  )
}

export default Todo