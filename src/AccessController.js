import { useState,createContext } from "react";

import Login from "./Login"; // share context to this
import Dashboard from "./Dashboard"; // and this

const UserContext = createContext();

const users =[
    {username:'un1',kunz:'pas1'},
    {username:'un2',kunz:'pas2'},
    {username:'un3',kunz:'pas3'},
    {username:'un4',kunz:'pas4'},
    {username:'un5',kunz:'pas5'}
];

 function AccessController(){
    const[authUser,setAuthUser] = useState(null); // set authUser as null initially
    const[email,setEmail]=useState(""); // set email as empty
    const[error, setError] = useState("");

    return (
        //share the details with the components below and store in context
        <UserContext.Provider value={{authUser,setAuthUser,users,email,setEmail,error,setError}}>  
            {authUser?<Dashboard/>:<Login/>}
        </UserContext.Provider>
    )
}

export {AccessController,UserContext};