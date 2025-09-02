import { useState } from "react";
import * as XLSX from "xlsx";
import { useUser } from "./UserContext"; // Adjust the path as necessary

const Login = ({ setVisibleComponent }) => {
  const [creds, setCreds] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const { setUser } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({ ...creds, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/yikya.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];

      const range = XLSX.utils.decode_range(sheet["!ref"]);
      for (let row = range.s.r + 1; row <= range.e.r; row++) { // starts after header row
        const usernameCell = sheet[XLSX.utils.encode_cell({ r: row, c: 0 })];
        const passwordCell = sheet[XLSX.utils.encode_cell({ r: row, c: 1 })];
        if (
          usernameCell?.v === creds.username &&
          passwordCell?.v === creds.password
        ) {
          const user = {};
          for (let col = 0; col <= range.e.c; col++) {
            const cell = sheet[XLSX.utils.encode_cell({ r: row, c: col })];
            user[sheet[XLSX.utils.encode_cell({ r: range.s.r, c: col })].v] = cell?.v;
          }
          setUser(user);
          localStorage.setItem("session", "true");
          localStorage.setItem("username", creds.username);
          setVisibleComponent("profile");
          return;
        }
      }

      setError("Invalid credentials");
    } catch (err) {
      console.error(err);
      setError("Error processing the Excel file");
    }
  };

  return (
    <div className="container mx-auto bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
          className="block w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="block w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      <button onClick={() => setVisibleComponent("register")} className="mt-4 text-blue-500">
        Register
      </button>
    </div>
  );
};

export default Login;