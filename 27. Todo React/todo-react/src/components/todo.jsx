import TodoList from './todolist';
import TodoItem from './todoitem';
import AddToDo from './addtodo';
const Todo = ({todos,setTodos}) => {
  return (
    <div className='border my-5 px-5 py-1'>
      <h4 className='text-center'>ToDoList</h4>
      <AddToDo todos={todos} setTodos={setTodos} />
      <TodoList>
        {todos.map((todo,idx)=>{
          return <TodoItem key={idx}>{todo.description}</TodoItem>
        })}
      </TodoList>
     
    </div>
  )
}

export default Todo