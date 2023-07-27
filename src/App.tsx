import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import UserList from './components/UsersList';
import './App.css'

const App: React.FC = () => {
  return (
    <div>
      <h1 className='page-title'>User Registration Form</h1>
      <RegistrationForm />
      <UserList />
    </div>
  );
};

export default App;
