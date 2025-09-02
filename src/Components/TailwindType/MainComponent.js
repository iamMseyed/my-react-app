import { useState, useEffect } from 'react';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import { UserProvider, useUser } from './UserContext';
import * as XLSX from 'xlsx';

const MainComponent = () => {
  const [visibleComponent, setVisibleComponent] = useState('login');
  const { setUser } = useUser();

  useEffect(() => {
    const fetchUserData = async () => {
      const session = localStorage.getItem('session');
      const username = localStorage.getItem('username');

      if (session && username) {
        const response = await fetch('/yikya.xlsx');
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const range = XLSX.utils.decode_range(sheet['!ref']);
        for (let row = range.s.r + 1; row <= range.e.r; row++) {
          const usernameCell = sheet[XLSX.utils.encode_cell({ r: row, c: 0 })];
          if (usernameCell?.v === username) {
            const user = {};
            for (let col = 0; col <= range.e.c; col++) {
              const cell = sheet[XLSX.utils.encode_cell({ r: row, c: col })];
              user[sheet[XLSX.utils.encode_cell({ r: range.s.r, c: col })].v] = cell?.v;
            }
            setUser(user);
            setVisibleComponent('profile');
            return;
          }
        }
      }
    };

    fetchUserData();
  }, [setUser]);

  return (
    <div>
      {visibleComponent === 'register' && <Register setVisibleComponent={setVisibleComponent} />}
      {visibleComponent === 'login' && <Login setVisibleComponent={setVisibleComponent} />}
      {visibleComponent === 'profile' && <Profile setVisibleComponent={setVisibleComponent} />}
    </div>
  );
};

const MainComponentWrapper = () => (
  <UserProvider>
    <MainComponent />
  </UserProvider>
);

export default MainComponentWrapper;