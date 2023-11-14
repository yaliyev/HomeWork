import TodoList from './todolist';
import TodoItem from './todoitem';
const Todo = () => {
  return (
    <div className='border my-5 px-5 py-1'>
     <h4 className='text-center'>ToDoList</h4>
     <TodoList>
       <TodoItem>10</TodoItem>
       <TodoItem>20</TodoItem>
       <TodoItem>30</TodoItem>
     </TodoList>
    </div>
  )
}

export default Todo