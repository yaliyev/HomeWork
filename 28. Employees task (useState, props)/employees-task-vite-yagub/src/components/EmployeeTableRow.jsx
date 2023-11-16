import React from 'react'
import PropTypes from 'prop-types';

const EmployeeTableRow = ({children}) => {
  return (
   <tr>
    {children}
   </tr>
  )
}

EmployeeTableRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
]).isRequired
}


export default EmployeeTableRow