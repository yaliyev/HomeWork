import React from 'react'
import PropTypes from 'prop-types';

const EmployeeTable = ({children}) => {
  return (
    <table className='table table-bordered my-2'>{children}</table>
  )
}

EmployeeTable.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
]).isRequired
}

export default EmployeeTable