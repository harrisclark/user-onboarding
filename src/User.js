import React from 'react';

const User = ({user}) => {
  return (
    <div>
      <p>{user.first_name + ' ' + user.last_name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default User;