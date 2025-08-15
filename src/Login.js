// Login.js
import  { useState, useContext } from 'react';
import {UserContext } from './AccessController';
import InputField from './InputField';

function Login() {
    const {users,setAuthUser,setEmail,error,setError} = useContext(UserContext); // get the details stored in UserContext context. we don't need authUser here we need setAuthUser, thus importing that only
    const [username, setUsername] = useState(""); // initially set username
    const [password, setPassword] = useState(""); // password 
    const [email, setUpdateEmail] = useState(""); // email
    //const [error, setError] = useState(""); // and error to empty

    // go to return part and from there watch the code moving here
    const handleLogin = (e) => {
        //once the form is submitted, get the event (e) object and use its method preventDefault to stop form from automatically submit and reload the page
        e.preventDefault(); // don't do default action, follow the code

    // get details from users array object and compare with what is entered through input field
    const foundUser = users.find( (value) =>  value.username === username && value.kunz === password);

    // if any user found 
    if (foundUser) {
        setAuthUser(foundUser); // setAuthUser to that user details
        setEmail(email); // setEmail to what email was entered
        setError(""); // if any error msg, remove
      } else {
          setError("Bad Creds!"); // else setError message as bad creds
      }
    };

    return (
        <div>
            
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <InputField label="username" type="text" name = 'username' placeholder='username' value={username} onChange={setUsername} />
                <InputField label="password" type="password" name = 'password' placeholder='password' value={password} onChange={setPassword} />
                <InputField label="email" type="email" name = 'email' placeholder='email' value={email} onChange={setUpdateEmail} />
                <button type="submit">Login</button>
            </form>
            {error && ( // if error is set, print this too
                <div>
                    <p>{error}</p>
                </div>
            )}
        </div>

        /*  Get the username, password, email and use the InputField component, onchange get what the user entered and call handleLogin
            method once form is submitted if error, put that in error msg
            */
    );
}

export default Login;