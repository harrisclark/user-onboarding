import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import Form from './Form';
import User from './User';

function App() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState();

  const formSubmit = () => {

  }
  useEffect(() => {
    axios.get(`https://reqres.in/api/users`)
      .then(res => {
        console.log(res.data.data)
        setUsers(res.data.data)
      })
  }, []);


  return (
    <div className='container'>
      <Form 
        submit={formSubmit}
      />
      {
        users.map(user => {
          return <User key={user.id} user={user} />
        })
      }
    </div>
  );
}

export default App;
