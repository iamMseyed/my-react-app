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

      setError("Invalid credentials!");
    } catch (err) {
      console.error(err);
      setError("Error processing the Excel file");
    }
  };

  return (
  <div className="container h-screen flex items-center space-x-4 p-4 bg-[length:100%_100%]" style={{ backgroundImage: 'url(/images/bg.jpg)' }}>
  <div className="w-1/2 flex justify-center">
    <div className="w-2/3 ml-5 p-6 rounded-lg shadow-lg" style={{ background: "linear-gradient(135deg, #A5C7FE, #E68BBF)" }}>
      <h2 className="text-4xl pb-10 font-bold text-center">Login</h2>
      {error && <p className="text-center">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 rounded-lg bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 rounded-lg bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none"
        />
        <button type="submit" className="mt-5 bg-gradient-to-r from-blue-500 to-purple-700 hover:from-blue-700 hover:to-purple-900 text-white font-bold py-2 px-4 rounded w-full mb-4">
          Login
        </button>
      </form>
      <button onClick={() => setVisibleComponent("register")} className="bg-gradient-to-r from-green-500 to-teal-700 hover:from-green-700 hover:to-teal-900 text-white font-bold py-2 px-4 rounded w-full mb-2">
        Register
      </button>
    </div>
  </div>
  <div className="w-2/3 flex">
    <div className="ml-3 text-white w-full h-full bg-[length:100%_100%]" 
      style={{ backgroundImage: 'url(/images/bg2.jpg)' }}
    >
      <div
      style={
        {
          'min-height':'400px'
        }
      }>

      </div>
       {/* <img src="/images/bg2.jpg" className=" border-radius shadow rounded h-full"/> */}
    </div>
  </div>
</div>
  );
};

export default Login;