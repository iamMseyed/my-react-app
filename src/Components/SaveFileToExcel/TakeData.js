import  { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const TakeData = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: '',
    dpPath: '',
    bio: '',
    skillSet: '',
    qualification: '',
    experience: '',
  });

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [userDetails, setUserDetails] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, dpPath: file.name }));
  };

  const handleExport = (e) => {
    e.preventDefault();
    const worksheet = XLSX.utils.json_to_sheet([formData]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'UserData');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'userData.xlsx');

    alert('Registered! Kindly move file to main folder');

    setFormData({
      username: '',
      password: '',
      role: '',
      dpPath: '',
      bio: '',
      skillSet: '',
      qualification: '',
      experience: '',
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/userData.xlsx');
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      const worksheet = workbook.Sheets['UserData'];
      const users = XLSX.utils.sheet_to_json(worksheet);

      const user = users.find(
        (user) =>
          user.username === loginData.username && user.password === loginData.password
      );

      if (user) {
        setUserDetails(user);
        setLoginData({
          username: '',
          password: '',
        });
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error fetching the Excel file:', error);
      alert('File where user data is stored, failed to fetch!');
    }
  };

  return (
    <>
      <div>
        <h2>Provide your details here</h2>
        <form onSubmit={handleExport}>
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Role:
            <input type="text" name="role" value={formData.role} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Profile Picture:
            <input type="file" accept="image/*" onChange={handleImageChange} required />
          </label>
          <br />
          <label>
            Bio:
            <input type="text" name="bio" value={formData.bio} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Skill Set:
            <input type="text" name="skillSet" value={formData.skillSet} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Qualification:
            <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Experience:
            <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
        {formData.dpPath && <p>Uploaded Image Path: {formData.dpPath}</p>}
      </div>

      <div>
        <br />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" name="username" value={loginData.username} onChange={handleLoginChange} required />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={loginData.password} onChange={handleLoginChange} required />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        {userDetails && (
          <div>
            <h3>User Details</h3>
            <p>Username: {userDetails.username}</p>
            <p>Role: {userDetails.role}</p>
            <p>Bio: {userDetails.bio}</p>
            <p>Skill Set: {userDetails.skillSet}</p>
            <p>Qualification: {userDetails.qualification}</p>
            <p>Experience: {userDetails.experience}</p>
           <span>DP</span > <img src={`/images/${userDetails.dpPath}`} style={
              {width:'100px', borderRadius:'2px'} 
              } alt="" />
          </div>
        )}
      </div>
    </>
  );
};

export default TakeData;