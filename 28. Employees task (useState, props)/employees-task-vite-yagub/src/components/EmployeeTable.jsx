import React from 'react'

const EmployeeTable = ({children}) => {
  return (
    <table className='table table-bordered my-2'>{children}</table>
  )
}

export default EmployeeTable