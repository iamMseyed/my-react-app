// Dashboard.js
import { useContext } from 'react';
import { UserContext } from './LoginController';

function Dashboard() {
    const { authUser,setAuthUser,email,setEmail } = useContext(UserContext);
    const handleLogout = () => {
        setAuthUser(null);
        setEmail("");
    };

    if (!authUser) {
        return <p>No user is logged in.</p>;
    }

    return (
        <>
            <h2>Dashboard</h2>
            <p>Username: {authUser.username}</p>
            <p>Email: {email}</p>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}

export default Dashboard;