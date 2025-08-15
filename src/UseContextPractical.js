import { useContext, createContext, useState } from 'react';
import InputField from './InputField';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function UseContextPractical() {
  const [details, setDetails] = useState({
    username: '',
    password: '',
    email: '',
  });

  const [compare] = useState({
    username: [
      'un1', 'un2','un3', 'un4','un5', 'un6','un7', 'un8','un9', 'un10'
    ],
    kunz: [
      'pw1','pw2','pw3','pw4','pw5','pw6','pw7','pw8','pw9','pw10'
    ]
  });

  return (
    <AuthProvider>
      <LoginPage details={details} setDetails={setDetails} />
      <Dashboard compare={compare} />
    </AuthProvider>
  );
}

function LoginPage({ details, setDetails }) {
  const { user, login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const signin = (e) => {
    e.preventDefault();
    if (
      details.username.length === 0 ||
      details.password.length === 0 ||
      details.email.length === 0
    ) {
      alert('All fields are required');
      return;
    }

    const userData = {
      username: details.username,
      password: details.password,
      email: details.email
    };

    login(userData);
    setDetails({
      username: '',
      password: '',
      email: '',
    });
  };

  const reset = () => {
    setDetails({
      username: '',
      password: '',
      email: '',
    });
  };

  if (!user) {
    return (
      <form>
        <InputField
          placeholder="Enter username"
          name="username"
          type="text"
          value={details.username}
          onChange={handleChange}
        />
        <InputField
          placeholder="Enter Password"
          name="password"
          type="password"
          value={details.password}
          onChange={handleChange}
        />
        <InputField
          placeholder="Enter Email"
          name="email"
          type="email"
          value={details.email}
          onChange={handleChange}
        />
        <button className="button" onClick={signin}>
          Sign In
        </button>
        <button id="Reset" onClick={reset}>
          Reset
        </button>
      </form>
    );
  }

  return null;
}

const Dashboard = ({ compare }) => {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return null;
  }

  const usernames = compare.username;
  const passwords = compare.kunz;

  const isValidUser = usernames.includes(user.username) && passwords.includes(user.password);

  if (isValidUser) {
    return (
      <form>
        <h1>Dashboard</h1>
        <p>Welcome, {user.username} ({user.email})</p>
        <button onClick={logout}>Logout</button>
      </form>
    );
  } else {
    return (
      <form>
        <p>Bad credentials!</p>
        <button onClick={logout}>Back To Login</button>
      </form>
    );
  }
};

export default UseContextPractical;