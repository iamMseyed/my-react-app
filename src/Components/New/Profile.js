import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { useUser } from './UserContext'; 
const Profile = ({ setVisibleComponent }) => {
 const { user1, setUser } = useUser();
const user = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('session');
    localStorage.removeItem('user');
    setUser(null);
    setVisibleComponent('login');
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    const columns = ['Username', 'Password', 'Role', 'Bio', 'Skill Set', 'Qualification', 'Experience'];
    const rows = [
      [user.username, user.password, user.role, user.bio, user.skillSet, user.qualification, user.experience]
    ];

    autoTable(doc, { head: [columns], body: rows });
    doc.save('user_data.pdf');
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
      <p>Role: {user.role}</p>
      <p>Bio: {user.bio}</p>
      <p>Skill Set: {user.skillSet}</p>
      <p>Qualification: {user.qualification}</p>
      <p>Experience: {user.experience}</p>
      <img 
        src={`/images/${user.dp}`} 
        alt="User Profile" 
        style={{ width: '150px', height: '150px'}} 
      />
      <button onClick={handleDownload}>Download as PDF</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;