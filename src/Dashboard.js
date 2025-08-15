// Dashboard.js
import { useContext } from 'react';
import { UserContext } from './AccessController';

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
        <form>
            <h2>Dashboard</h2>
            <p>Username: {authUser.username}</p>
            <p>Email: {email}</p>
            <button onClick={handleLogout}>Logout</button>
        </form>
    );
}

export default Dashboard;