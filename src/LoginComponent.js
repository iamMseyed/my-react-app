import React, { useContext, useState, createContext } from "react";
import InputField from "./InputField";

const LoginDetailsContext = createContext();

function LoginComponent() {
    const [details, setDetails] = useState({
        username: '',
        password: ''
    });

    return (
        <LoginDetailsContext.Provider value={{ details, setDetails }}>
            <Layout />
        </LoginDetailsContext.Provider>
    );
}

function Layout() {
    return (
        <div>
            <Header/>
            <Login/>
        </div>
    );
}

function Header() {
    return <h1>Welcome - Signin here</h1>;
}

function Login() {
    const { details, setDetails } = useContext(LoginDetailsContext);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const signin = (e) => {
        e.preventDefault();
        if (details.username.length === 0 || details.password.length === 0) {
            alert("All fields are required");
            return;
        }
        console.log(details); 
         setDetails({
            username: '',
            password: ''
        }); 
    };

    const reset = () => {
        setDetails({
            username: '',
            password: ''
        }); 
    };

    return (
        <>
            <InputField
                test="true"
                placeholder="Enter username"
                name="username"
                value={details.username}
                onChange={handleChange} 

            />
            <InputField
                test="false"
                placeholder="Enter Password"
                name="password"
                value={details.password}
                onChange={handleChange} 
            />
            <button className="button" onClick={signin}>Signin</button>
            <button id="Reset" onClick={reset}>Reset</button>
        </>
    );
}


export default LoginComponent;