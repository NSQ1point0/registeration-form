import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './../reducers';

const UserList: React.FC = () => {
    const users = useSelector((state: RootState) => state.user.users);
    const [searchQuery, setSearchQuery] = useState('');

    // Filter users based on the search query
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h2 className='user-title'>User List</h2>

            <input
                className='seachUser'
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name"
            />

            {filteredUsers.length === 0 ? (
                <p>No users registered yet.</p>
            ) : (
                <table id='userList'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date of Birth</th>
                            <th>City</th>
                            <th>Pincode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.dob}</td>
                                <td>{user.city}</td>
                                <td>{user.pincode}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UserList;
