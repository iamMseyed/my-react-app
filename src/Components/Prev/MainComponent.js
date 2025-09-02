import { useState, useEffect } from 'react';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';

const MainComponent = () => {
  const [visibleComponent, setVisibleComponent] = useState('login');

  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session) {
      setVisibleComponent('profile');
    }
  }, [visibleComponent]);

  return (
    <div> 
      {visibleComponent === 'register' && <Register setVisibleComponent={setVisibleComponent} />}
      {visibleComponent === 'login' && <Login setVisibleComponent={setVisibleComponent}/>}
      {visibleComponent === 'profile' && <Profile setVisibleComponent={setVisibleComponent} />}
    </div>
  );
};

export default MainComponent;