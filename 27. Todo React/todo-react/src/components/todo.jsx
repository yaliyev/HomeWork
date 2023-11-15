import TodoList from './todolist';
import TodoItem from './todoitem';
import AddToDo from './addtodo';
import PropTypes from 'prop-types';


const Todo = ({todos,setTodos}) => {

  let searchCount = 0;

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

  function searchToDo(e){
    let todosArr = [...todos];
    let resultArr = todosArr.filter((todo)=>{
      if(todo.description.toLowerCase().indexOf(e.target.value.toLowerCase())> -1){
        return todo;
      }
    });
    setTodos(resultArr);
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
      <input onChange={(e)=>{searchToDo(e)}} className='form-control my-3' placeholder='Search Todo' type="text" />
      <button onClick={()=>{sortCompletedTodos()}} className='btn btn-success'>Sort Completed todos</button>
      <button onClick={()=>{sortByDate()}} className='btn btn-warning mx-2'>Sort by Date</button>
     
    </div>
  )
}




export default Todo