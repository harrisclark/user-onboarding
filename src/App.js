import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/formSchema'
import './App.css';

import Form from './Form';
import User from './User';

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false,
}

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  tos: '',
}

function App() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const validate = (keyName, value) => {
    yup.reach(schema, keyName)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [keyName]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [keyName]: err.errors[0] }))
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password,
      email: formValues.email,
      tos: formValues.tos
    }
    postNewUser(newUser);
  }

  const postNewUser = (newUser) => {
    axios.post(`https://reqres.in/api/users`, newUser)
      .then(res => {
        setUsers([ res.data, ...users ])
      })
      .catch(err => console.error(err))
      .finally(setFormValues(initialFormValues))
  }


  const inputChange = (keyName, value) => {
    validate(keyName, value);
    setFormValues({
      ...formValues,
      [keyName]: value
    })
  }

  useEffect(() => {
    schema.isValid(formValues)
    .then(valid => setDisabled(!valid))
  }, [formValues]);

  return (
    <div className='container'>
      <Form 
        submit={formSubmit}
        change={inputChange}
        values={formValues}
        errors={formErrors}
        disabled={disabled}
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
