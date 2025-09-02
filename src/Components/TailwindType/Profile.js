import React from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { useUser } from "./UserContext";

const Profile = ({ setVisibleComponent }) => {
  const { user, setUser } = useUser();

  const handleLogout = () => {
    localStorage.removeItem("session");
    setUser(null);
    setVisibleComponent("login");
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    const columns = [
      "Username",
      "Password",
      "Role",
      "Bio",
      "Skill Set",
      "Qualification",
      "Experience",
    ];
    const rows = [
      [
        user.username,
        user.password,
        user.role,
        user.bio,
        user.skillSet,
        user.qualification,
        user.experience,
      ],
    ];

    autoTable(doc, { head: [columns], body: rows });
    doc.save("user_data.pdf");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container mx-auto bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Password:</strong> {user.password}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
      <p><strong>Skill Set:</strong> {user.skillSet}</p>
      <p><strong>Qualification:</strong> {user.qualification}</p>
      <p><strong>Experience:</strong> {user.experience}</p>
      <img
        src={`/images/${user.dp}`}
        alt="User Profile"
        className="my-4"
        style={{ width: "150px", height: "150px"}}
      />
      <button onClick={handleDownload} className="bg-blue-500 text-white px-4 py-2 rounded">Download as PDF</button>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded mt-4">Logout</button>
    </div>
  );
};

export default Profile;