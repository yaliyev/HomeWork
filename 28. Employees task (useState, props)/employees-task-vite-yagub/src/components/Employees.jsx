import { useState } from 'react';
import AddEmployee from './AddEmployee';
import EmployeeTable from './EmployeeTable';
import EmployeeTableRow from './EmployeeTableRow';
const Employees = () => {
  const [employees, setEmployees] = useState([]);
  console.log(employees);
  return (
    <div className='m-5'>
      <AddEmployee employees={employees} setEmployees={setEmployees} />
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
          </EmployeeTableRow>
        </thead>
        <tbody>
          {employees.map((employee,idx) => {
           
            return <EmployeeTableRow key={idx}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>{employee.age}</td>
              <td>{employee.salary}</td>
              <td>{employee.isFired.toString()}</td>
              <td>{employee.createdAt}</td>
              <td>{employee.updatedAt}</td>
            </EmployeeTableRow>
           
          })}
         </tbody>

      </EmployeeTable>
    </div>
  )
}

export default Employees