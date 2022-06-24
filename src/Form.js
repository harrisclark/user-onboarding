import React from 'react';

const Form = (props) => {
  
  const { submit } = props

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  }

  return (
    <form className='form-container' onSubmit={onSubmit}>

      {/* <div className='errors'>
        <div>{errors.username}</div>
        <div>{errors.email}</div>
      </div> */}
      
      <label>First Name: 
        <input 
          type='text'
          name='first_name'
        />
      </label>
      <label>Last Name: 
        <input 
          type='text'
          name='last_name'
        />
      </label>
      <label>Email: 
        <input 
          type='email'
          name='email'
        />
      </label>
      <label>Password: 
        <input 
          type='text'
          name='password'
        />
      </label>
      <label>Agree to Terms of Service:
        <input 
          type='checkbox'
          name='ToS'
        />
      </label>

      <button>Submit</button>

    </form>
  )
}

export default Form;