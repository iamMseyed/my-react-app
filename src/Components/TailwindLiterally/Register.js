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

<div className="container h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/bg2.jpg)' }}>
  <div className="flex justify-center items-center">
    <div className="p-10 rounded-lg shadow-lg bg-white max-w-md w-full" style={{ background: "linear-gradient(135deg, #A5C7FE, #E68BBF)" }}>
      <h2 className="text-4xl pb-3 font-bold text-center text-gray-800">Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required className="mt-2 block w-full px-4 py-1 rounded-lg bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none"/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="mt-2 block w-full px-4 py-1 rounded-lg bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none" />
        <input type="text" name="role" placeholder="Role" onChange={handleChange} required className="mt-2 block w-full px-4 py-1 rounded-lg bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none"  />
        <input type="file" name="dp" onChange={handleFileChange} required className="mt-2 block w-full px-4 py-1 rounded-lg bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none" />
        <input type='text' name="bio" placeholder="Bio" onChange={handleChange} required className="mt-2 block w-full px-4 py-1 rounded-lg bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none" />
        <input type="text" name="skillSet" placeholder="Skill Set" onChange={handleChange} required className="mt-2 block w-full px-4 py-1 rounded-lg bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none" />
        <input type="text" name="qualification" placeholder="Qualification" onChange={handleChange} required className="mt-2 block w-full px-4 py-1 rounded-lg bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none"  />
        <input type="text" name="experience" placeholder="Experience" onChange={handleChange} required className="mt-2 block w-full px-4 py-1 rounded-lg bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none" />

        <div className="flex justify-between mt-5">
          <button type="submit" className="bg-gradient-to-r bg-blue-500 text-white px-6 py-2 rounded-lg ml-2 hover:from-blue-700 hover:to-blue-900">
            Register
          </button>
          <button onClick={() => setVisibleComponent("login")} className="bg-gradient-to-r from-green-500 to-teal-700 hover:from-green-700 hover:to-teal-900 text-white px-6 py-2 rounded-lg mr-2">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
};

export default Register;