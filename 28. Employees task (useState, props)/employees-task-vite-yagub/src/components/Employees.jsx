import { useState } from 'react';
import AddEmployee from './AddEmployee';
import EmployeeTable from './EmployeeTable';
import EmployeeTableRow from './EmployeeTableRow';
import EditEmployee from './EditEmployee';

import PropTypes from 'prop-types';

const Employees = () => {



  const [employees, setEmployees] = useState([]);

  const [averageSalary, setAverageSalary] = useState(0);



  let savedResult = [];

  return (
    <div className='m-5'>
      <div className='d-flex'>
        <input onChange={(e) => {
          let data = [...employees];
          savedResult = data;
          let resultAfterSearch = data.filter((employee) => employee.name.indexOf(e.target.value) > -1);
          setEmployees(resultAfterSearch);

        }} className='form-control' style={{ width: '200px', marginRight: '15px' }} type="text" placeholder='Search Input:' />
        <AddEmployee employees={employees} setEmployees={setEmployees} setAverageSalary={setAverageSalary} />
        <button onClick={() => {
          let data = [...employees];
          let resultAfterFiltering = data.filter((employee) => employee.isFired);
          setEmployees(resultAfterFiltering);

        }} className='btn btn-info mx-2 text-white'>Filter fired employees</button>
        <button onClick={() => {
          let data = [...employees];
          data.sort((a, b) => a.salary - b.salary);
          setEmployees(data);
        }} className='btn btn-warning mx-2 text-white'>Sort by salary</button>
        <button onClick={() => {
          let data = [...employees];
          data.sort((a, b) => a.age - b.age);
          setEmployees(data);
        }} className='btn btn-secondary mx-2 text-white'>Sort by age</button>

        <button onClick={() => {
          let result = 0;
          let data = [...employees];
          console.log(data);
          employees.forEach((employee) => {
            result += employee.salary;
          });
          result = result / employees.length;
          setAverageSalary(result);
        }} className='btn btn-warning mx-2 text-white'>Calculate Average Salary Button</button>

        <button onClick={()=>{
          let data = [...employees];
          data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setEmployees(data);
        }} className='btn btn-secondary'>Sort By Date</button>
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
            if (firedEmployee == false) {
              resultTd = <td className='text-dark'>{employee.name}</td>;
            } else {
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


                <EditEmployee idx={idx} employee={employee} employees={employees} setEmployees={setEmployees} setAverageSalary={setAverageSalary}/>

                <button onClick={() => {
                  let allowToDelete = window.confirm(`Do you agree to delete employee?(Do not destroy someone's life)`);

                  if (allowToDelete) {
                    let data = [...employees];
                    data.splice(idx, 1);
                    setEmployees(data);
                    
                    let result = 0;
                    data.forEach((employee) => {
                      result += Number(employee.salary);
                    });
                    result = result / data.length;
                    setAverageSalary(result);

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
      <p>Avg salary {averageSalary}</p>
    </div>
  )
}

Employees.propTypes = {
  employees: PropTypes.array,
  setEmployees: PropTypes.func,
  averageSalary: PropTypes.number,
  setAverageSalary: PropTypes.func
}

export default Employees