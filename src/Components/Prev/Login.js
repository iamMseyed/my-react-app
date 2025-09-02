import  { useState } from 'react';
import * as XLSX from 'xlsx';



const Login = ({ setVisibleComponent }) => {
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({ ...creds, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/yikya.xlsx'); // Updated filename to match the file created in Register.js
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

      console.warn('lgnAll',data);
      // Checking credentials from parsed data
      const user = data.find(
        user => user.username === creds.username && user.password === creds.password
      );
      console.warn('part',user);
      if (user) {
        localStorage.setItem('session', 'true');
        setVisibleComponent('profile');

      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      setError('Error processing the Excel file');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
      <button onClick={() => setVisibleComponent('register')}>Register</button>
    </div>
  );
};

export default Login;