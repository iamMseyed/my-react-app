import { useState } from 'react';
import { utils, writeFile } from 'xlsx';

const Register = ({ setVisibleComponent }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: '',
    dp: '',
    bio: '',
    skillSet: '',
    qualification: '',
    experience: ''
  });

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, dp: file.name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserList = [...users, formData];
    setUsers(newUserList);
    localStorage.setItem('users', JSON.stringify(newUserList));

    const worksheet = utils.json_to_sheet(newUserList);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Users');
    writeFile(workbook, 'yikya.xlsx');

    setVisibleComponent('login');
  };

  return (

    <div className="container mx-auto bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required className="block w-full mb-2 p-2 border border-gray-300 rounded" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="block w-full mb-2 p-2 border border-gray-300 rounded" />
        <input type="text" name="role" placeholder="Role" onChange={handleChange} required className="block w-full mb-2 p-2 border border-gray-300 rounded" />
        <input type="file" name="dp" onChange={handleFileChange} required className="block w-full mb-2 p-2 border border-gray-300 rounded" />
        <input name="bio" placeholder="Bio" onChange={handleChange} required className="block w-full mb-2 p-2 border border-gray-300 rounded" />
        <input type="text" name="skillSet" placeholder="Skill Set" onChange={handleChange} required className="block w-full mb-2 p-2 border border-gray-300 rounded" />
        <input type="text" name="qualification" placeholder="Qualification" onChange={handleChange} required className="block w-full mb-2 p-2 border border-gray-300 rounded" />
        <input type="text" name="experience" placeholder="Experience" onChange={handleChange} required className="block w-full mb-2 p-2 border border-gray-300 rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
      </form>
      <button onClick={() => setVisibleComponent('login')} className="mt-4 text-blue-500">Login</button>
    </div>
  );
};

export default Register;