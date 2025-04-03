// src/components/UserProfile.js
import React from 'react';
import { useUser } from '../context/userContext';

const UserProfile = () => {
  const { user, login, logout } = useUser();

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.name}</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please log in</h1>
          <button onClick={() => login({ name: 'John Doe' })}>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
