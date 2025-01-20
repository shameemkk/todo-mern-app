import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(result => setTodo(result.data))
      .then(err => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios.put('http://localhost:3001/update/' + id)
      .then(result => console.log(result))
      .then(err => console.log(err));
      location.reload()
  };
  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/delete/' + id)
    .then(result => console.log(result))
    .then(err => console.log(err));
    location.reload()
  }

  return (
    <div className='home'>
      <h1>Todo List</h1>
      <Create />
      {
        todo.length === 0 ? (
          <div className='no-records'>
            <h1>No Records</h1>
          </div>
        ) : (
          todo.map((item, index) => (
            <div
              key={index}
              onClick={() => handleEdit(item._id)}
              className='todo-item'
            >
              <span className='status'>
                {item.done ? (
                  <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} />
                ) : (
                  <FontAwesomeIcon icon={faTimesCircle} style={{ color: 'red' }} />
                )}
              </span>
              <p>{item.task}</p>
              <button onClick={()=>handleDelete(item._id)} className='delete-btn'>Delete</button>
            </div>
          ))
        )
      }
    </div>
  );
};

export default Home;