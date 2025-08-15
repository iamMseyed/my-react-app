import { useState,createContext } from "react";

import Login from "./Login";
import Dashboard from "./Dashboard";

const UserContext = createContext();

const users =[
    {username:'un1',kunz:'pas1'},
    {username:'un2',kunz:'pas2'},
    {username:'un3',kunz:'pas3'},
    {username:'un4',kunz:'pas4'},
    {username:'un5',kunz:'pas5'}
];

 function AccessController(){
    const[authUser,setAuthUser] = useState(null);
    const[email,setEmail]=useState("");

    return (
        <UserContext.Provider value={{authUser,setAuthUser,users,email,setEmail}}>
            {authUser?<Dashboard/>:<Login/>}
        </UserContext.Provider>
    )
}

export {AccessController,UserContext};