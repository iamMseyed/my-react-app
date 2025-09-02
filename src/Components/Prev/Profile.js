import React from 'react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

const Profile = ({ setVisibleComponent }) => {
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    const loadData = async () => {
      const response = await fetch('/yikya.xlsx');
      const buffer = await response.arrayBuffer();
      const workbook = XLSX.read(buffer, { type: 'array' });
      const data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

      

      const session = localStorage.getItem('session');
      if (session) {
        const user = data[0];
        setUserData(user);
        console.warn(user);
      }
    };

    loadData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('session');
    setVisibleComponent('login');
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    const columns = ['Username', 'Password', 'Role', 'Bio', 'Skill Set', 'Qualification', 'Experience'];
    const rows = [
      [userData.username, userData.password, userData.role, userData.bio, userData.skillSet, userData.qualification, userData.experience]
    ];

    autoTable(doc, { head: [columns], body: rows });
    doc.save('user_data.pdf');
  };

  if (!userData) return <p>Loading...</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {userData.username}</p>
      <p>Password: {userData.password}</p>
      <p>Role: {userData.role}</p>
      <p>Bio: {userData.bio}</p>
      <p>Skill Set: {userData.skillSet}</p>
      <p>Qualification: {userData.qualification}</p>
      <p>Experience: {userData.experience}</p>
       <img 
        src={`/images/${userData.dp}`} 
        alt="User Profile" 
        style={{ width: '150px', height: '150px'}} 
      />
      <button onClick={handleDownload}>Download as PDF</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;