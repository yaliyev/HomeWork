import Todo from './components/todo';
import { useState } from 'react';
import PropTypes from 'prop-types';
function App() {
  const [todos,setTodos] = useState([]);

  return (
    <>
      <div className='container'>
        <div className="row justify-content-center ">
          <div className="col-6">
            <Todo todos={todos} setTodos={setTodos} />
          </div>
        </div>
      </div>
    </>
  )
}

App.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func
};

export default App
