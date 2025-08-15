// Login.js
import  { useState, useContext } from 'react';
import {UserContext } from './LoginController';
import InputField from './InputField';

function Login() {
    const {users,setAuthUser,setEmail} = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setUpdateEmail] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault(); // don't do default action, follow the code

    // get details from users array object and compare with what is entered through input field
    const foundUser = users.find( (value) =>  value.username === username && value.kunz === password);

    if (foundUser) {
        setAuthUser(foundUser);
        setEmail(email);
        setError("");
      } else {
          setError("Bad Creds!");
      }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <InputField label="username" type="text" name = 'username' placeholder='username' value={username} onChange={setUsername} />
                <InputField label="password" type="password" name = 'password' placeholder='password' value={password} onChange={setPassword} />
                <InputField label="email" type="email" name = 'email' placeholder='email' value={email} onChange={setUpdateEmail} />
                <button  type="submit">Login</button>
            </form>
            {error && (
                <div>
                    <p style={{ color: 'red' }}>{error}</p>
                </div>
            )}
        </div>
    );
}

export default Login;