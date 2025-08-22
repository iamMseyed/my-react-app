import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function TakeData() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, dpPath: file.name }));
  };

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet([formData]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'UserData');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'userData.xlsx');
  };

  return (
    <div>
      <h2>Provide your details here</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange}/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange}/>
        </label>
        <br />
        <label>
          Role:
          <input type="text" name="role" value={formData.role} onChange={handleChange} />
        </label>
        <br />
        <label>
          Profile Picture:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <br />
        <label>
          Bio:
          <input type="text" name="bio"value={formData.bio} onChange={handleChange}/>
        </label>
        <br />
        <label>
          Skill Set:
          <input type="text" name="skillSet" value={formData.skillSet} onChange={handleChange}/>
        </label>
        <br />
        <label>
          Qualification:
          <input  type="text" name="qualification" value={formData.qualification} onChange={handleChange} />
        </label>
        <br />
        <label>
          Experience:
          <input  type="text" name="experience" value={formData.experience} onChange={handleChange}/>
        </label>
        <br />
        <button type="button" onClick={handleExport}>Register</button>
      </form>
      {formData.dpPath && <p>Uploaded Image Path: {formData.dpPath}</p>}
    </div>
  );
}

export default TakeData;