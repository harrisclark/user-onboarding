import React from 'react';

const Form = (props) => {
  
  const { submit, change, values, errors, disabled } = props

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  }

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
  }

  return (

    <form className='form-container' onSubmit={onSubmit}>
    <h1>Give us your money</h1>
      <label>Username: 
        <input 
          type='text'
          name='username'
          onChange={onChange}
          value={values.username}
        />
        {errors.username}
      </label>
      <label>Email: 
        <input 
          type='email'
          name='email'
          onChange={onChange}
          value={values.email}
        />
        {errors.email}
      </label>
      <label>Password: 
        <input 
          type='text'
          name='password'
          onChange={onChange}
          value={values.password}
        />
        {errors.password}
      </label>
      <label>Agree to Terms of Service:
        <input 
          type='checkbox'
          name='tos'
          onChange={onChange}
          checked={values.tos}
        />
        {errors.tos}
      </label>

      <button disabled={disabled}>Submit</button>
    </form>
  )
}

export default Form;