import React, { useState, useEffect } from 'react';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';

const MainComponent = () => {
  const [visibleComponent, setVisibleComponent] = useState('login');
  const [session, setSession] = useState(null);

  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session) {
      setVisibleComponent('profile');
    }
  }, []);

  return (
    <div>
      {visibleComponent === 'register' && <Register setVisibleComponent={setVisibleComponent} />}
      {visibleComponent === 'login' && <Login setVisibleComponent={setVisibleComponent} setSession={setSession} />}
      {visibleComponent === 'profile' && <Profile setVisibleComponent={setVisibleComponent} />}
    </div>
  );
};

export default MainComponent;