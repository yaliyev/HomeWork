import { useState } from 'react';
import AddEmployee from './AddEmployee';
import EmployeeTable from './EmployeeTable';
import EmployeeTableRow from './EmployeeTableRow';
import moment from 'moment';

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  let savedResult = [];

  return (
    <div className='m-5'>
      <div className='d-flex'>
        <input onChange={(e)=>{
          let data = [...employees];
          savedResult = data;
          let resultAfterSearch= data.filter((employee)=>employee.name.indexOf(e.target.value)> -1);
          setEmployees(resultAfterSearch);

        }} className='form-control' style={{width:'200px',marginRight:'15px'}} type="text" placeholder='Search Input:' />
      <AddEmployee employees={employees} setEmployees={setEmployees} />
      <button onClick={()=>{
         let data = [...employees];
         let resultAfterFiltering = data.filter((employee)=>employee.isFired);
         setEmployees(resultAfterFiltering);
         
      }} className='btn btn-info mx-2 text-white'>Filter fired employees</button>
      <button onClick={()=>{
        let data = [...employees];
        data.sort((a,b)=>a.salary - b.salary);
        setEmployees(data);
      }} className='btn btn-warning mx-2 text-white'>Sort by salary</button>
      <button onClick={()=>{
        let data = [...employees];
        data.sort((a,b)=>a.age - b.age);
        setEmployees(data);
      }} className='btn btn-secondary mx-2 text-white'>Sort by age</button>
      </div>
      
      <EmployeeTable>
        <thead>
          <EmployeeTableRow>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Salary</th>
            <th>isFired</th>
            <th>createdAt</th>
            <th>updatedAt</th>
            <th>Actions</th>
          </EmployeeTableRow>
        </thead>
        <tbody>
          {employees.map((employee, idx) => {
            let firedEmployee = employee.isFired;
            let resultTd = null;
            if(firedEmployee == false){
               resultTd = <td className='text-dark'>{employee.name}</td>;
            }else{
              resultTd = <td className='text-danger'>{employee.name}</td>;
            }
             
            return <EmployeeTableRow key={idx}>
              <td>{employee.id}</td>
              {resultTd}
              <td>{employee.surname}</td>
              <td>{employee.age}</td>
              <td>{employee.salary}</td>
              <td>{employee.isFired.toString()}</td>
              <td>{employee.createdAt}</td>
              <td>{employee.updatedAt}</td>
              <td>
                <button onClick={() => {

                let data = [...employees];

                data[idx].isFired = true;
                setEmployees(data);


                }} className='btn btn-danger mx-2'>Fire</button>


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
  <input id='edit-isfired' type='text' value=`+employee.isFired.toString()+ ` className='form-control' placeholder='IsFired:'>
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

                      if(isFired == "true"){
                        isFiredBool = true;
                      }else{
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
                        updatedAt: moment().format('MMMM Do YYYY, h:mm:ss a')
                      }
                      let data = [...employees];
                      data[idx] = editEmployee;
                      setEmployees(data);
                    }
                  })}} className='btn btn-warning mx-2'>Edit</button>

                <button onClick={() => {
                  let allowToDelete = window.confirm(`Do you agree to delete employee?(Do not destroy someone's life)`);

                  if (allowToDelete) {
                    let data = [...employees];
                    data.splice(idx, 1);
                    setEmployees(data);
                    Swal.fire({
                      title: "Employee deleted",
                      text: "Do not delete employee again ;-(",
                      icon: "success",
                      timer: 1200
                    });
                  }

                }} className='btn btn-danger mx-2'>Delete</button>
              </td>
            </EmployeeTableRow>

          })}
        </tbody>

      </EmployeeTable>
    </div>
  )
}

export default Employees