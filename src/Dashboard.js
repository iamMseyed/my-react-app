// Dashboard.js
import { useContext } from 'react';
import { UserContext } from './AccessController';

function Dashboard() {
    const { authUser,setAuthUser,email,setEmail,setError} = useContext(UserContext); // get details from context
    // skip this code here and move down, this is called in return part
    // so the code came to return and ther we are calling it, this is called once logout button is hit, now setAuthUser to null and email to null and set success msg too 
    const handleLogout = () => {
        setAuthUser(null);
        setEmail("");
        setError("Logged Out Successfully!");
    };

    if (!authUser) { // if the user is not logged, show this message
        return <p>No user is logged in.</p>;
    }
// else show this
    return (
        <form>
            <h2>Dashboard</h2>
            <p>Username: {authUser.username}</p>
            <p>Email: {email}</p> 
            <button onClick={handleLogout}>Logout</button> 
        </form>
        
        /*authuser has un and pw, but email is in seperate varibale. thus using two different names. once clicked on logout, call handleLogout method
        
        */
    );
}

export default Dashboard;