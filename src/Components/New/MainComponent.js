import React, { useState, useEffect } from 'react';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import { UserProvider } from './UserContext'; // Adjust the path as necessary

const MainComponent = () => {
  const [visibleComponent, setVisibleComponent] = useState('login');
  
//   const [session ,setSession] = useState();
    const session = localStorage.getItem('session');

  useEffect(() => {
    //  setSession(localStorage.getItem('session'));
    if (session) {
      setVisibleComponent('profile');
    }
  }, []);

  return (
    <UserProvider>
      <div>
        {visibleComponent === 'register' && <Register setVisibleComponent={setVisibleComponent} />}
        {visibleComponent === 'login' && <Login setVisibleComponent={setVisibleComponent} />}
        {visibleComponent === 'profile' && <Profile setVisibleComponent={setVisibleComponent} />}
      </div>
    </UserProvider>
  );
};

export default MainComponent;