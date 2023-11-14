const AddToDo = ({todos,setTodos}) => {
  function addTodoItem(){
      let toDoItemDescription = document.getElementById('addtodo-input').value;
      
      let toDoItem = {
        id: Math.trunc(Math.random()*10000),
        description: toDoItemDescription,
        isCompleted: false,
        toDoDate: new Date()
      }
      let arr = [...todos];
      arr.push(toDoItem);
      setTodos(arr);
      

  }
  return (
    <>
      <div className="d-flex column-gap-3">
        <input id="addtodo-input" className="form-control w-50" placeholder='Write item description:' type="text" />
        <button onClick={()=>{addTodoItem()}} className="btn btn-info">Add TodoItem</button>
      </div>

    </>
  )
}

export default AddToDo