import React from 'react';

const User = ({ user }) => {
  return (
    <div>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default User;