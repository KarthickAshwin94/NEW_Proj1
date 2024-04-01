// AdminDashboard.js

import React, { useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const[newPassword,setNewPassword]=useState('')

    const handleCreateUser = async () => {
        try {
            await axios.post('http://localhost:5000/createUser', { newUsername, newEmail, newPassword });
            alert('User created successfully');
            // You can add logic to display a success message or update the UI as needed
        } catch (error) {
            //console.error('Error creating user:', error.response.data.message);
            alert("Unable to register!")
        }
    };

    return (
        <div className="admin-dashboard-container">
            <h2>Create User</h2>
            <input type="text" placeholder="Username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
            <input type="email" placeholder="Email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
            <input type="text" placeholder='Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
            <button onClick={handleCreateUser}>Create User</button>
        </div>
    );
};

export default AdminDashboard;
