
const AddToDo = ({todos,setTodos}) => {

  function addTodoItem(){
    

      let toDoItemDescription = document.getElementById('addtodo-input');

      if(toDoItemDescription.value.trim()==''){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Cannot be empty"
        });
      }else if(toDoItemDescription.value.trim().length < 3){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Should be at least 3 characters"
        });
      }
      else{
        let toDoItem = {
          id: Math.trunc(Math.random()*10000),
          description: toDoItemDescription.value,
          isCompleted: false,
          toDoDate: new Date()
        }
        let arr = [...todos];
        arr.push(toDoItem);
        setTodos(arr);
        toDoItemDescription.value = '';

      }
      
      
    
  }
  return (
    <>
      <div className="d-flex column-gap-3">
        <input id="addtodo-input" className="form-control w-50"  placeholder='Write item description:' type="text" />
        <button onClick={()=>{addTodoItem()}} className="btn btn-info">Add TodoItem</button>
      </div>

    </>
  )
}

export default AddToDo