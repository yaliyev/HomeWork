import React from 'react'
import moment from 'moment';

const EditEmployee = ({idx,employee,employees,setEmployees,setAverageSalary}) => {
  return (
    <button onClick={() => {

      Swal.fire({
        title: "<strong>Edit Employee Form</strong>",
        html: `
<div  className='form-group' style='margin-top:20px'>
<input  id='edit-name' value=`+ employee.name + ` className='form-control ' placeholder='Name:'>
</div>
<div className='form-group' style='margin-top:20px'>
<input id='edit-surname' value=`+ employee.surname + ` className='form-control ' placeholder='Surname:'>
</div>
<div className='form-group' style='margin-top:20px'>
<input id='edit-age' type='number' value=`+ employee.age + ` className='form-control' placeholder='Age:'>
</div>
<div className='form-group' style='margin-top:20px'>
<input id='edit-salary' type='number' value=`+ employee.salary + ` className='form-control' placeholder='Salary:'>
</div> 
<div className='form-group' style='margin-top:20px'>
<input id='edit-isfired' type='text' value=`+ employee.isFired.toString() + ` className='form-control' placeholder='IsFired:'>
</div> 
`,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `Submit`,
        cancelButtonText: `Cancel`
      }).then(result => {
        if (result.isConfirmed) {
          let name = document.getElementById('edit-name').value;
          let surname = document.getElementById('edit-surname').value;
          let age = document.getElementById('edit-age').value;
          let salary = document.getElementById('edit-salary').value;
          let isFired = document.getElementById('edit-isfired').value;
          let isFiredBool;

          if (isFired == "true") {
            isFiredBool = true;
          } else {
            isFiredBool = false;
          }

          let editEmployee = {
            id: employee.id,
            name: name,
            surname: surname,
            age: age,
            salary: salary,
            isFired: isFiredBool,
            createdAt: employee.createdAt,
            updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
          }
          let data = [...employees];
          data[idx] = editEmployee;
          setEmployees(data);

          let result = 0;
          data.forEach((employee) => {
            result += Number(employee.salary);
          });
          result = result / data.length;
          setAverageSalary(result);
        }
      })
    }} className='btn btn-warning mx-2'>Edit</button>
  )
}

export default EditEmployee