import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

const AddEmployee = ({employees,setEmployees,setAverageSalary}) => {

  function addEmployee(){
    Swal.fire({
      title: "<strong>Add Employee Form</strong>",
      html: `
      <div  className='form-group' style='margin-top:20px'>
      <input id='name' className='form-control ' placeholder='Name:'>
      </div>
      <div className='form-group' style='margin-top:20px'>
      <input id='surname' className='form-control ' placeholder='Surname:'>
      </div>
      <div className='form-group' style='margin-top:20px'>
      <input id='age' type='number' className='form-control' placeholder='Age:'>
      </div>
      <div className='form-group' style='margin-top:20px'>
      <input id='salary' type='number' className='form-control' placeholder='Salary:'>
      </div> 
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
       Submit
      `,
      cancelButtonText: `
        Cancel
      `
    }).then(result=>{
      if(result.isConfirmed){
        let name = document.getElementById('name').value;
        let surname = document.getElementById('surname').value;
        let age = document.getElementById('age').value;
        let salary = document.getElementById('salary').value;

        let employee = {
          id: uuidv4(),
          name : name,
          surname: surname,
          age: age,
          salary: Number(salary),
          isFired: false,
          createdAt: moment().format("MMM Do YYYY"),
          updatedAt: `Haven't updated yet`
        }
     let data = [...employees];
     data.push(employee);
     setEmployees(data);

     let result = 0;
     data.forEach((employee)=>{
       result += Number(employee.salary);
     });
     result = result / data.length;
     setAverageSalary(result);

      }
    })
  }

  return (
   <button onClick={()=>{addEmployee()}} className='btn btn-success'>Add Employee</button>
  )
}

export default AddEmployee