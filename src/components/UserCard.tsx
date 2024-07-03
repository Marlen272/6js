import React from 'react';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

interface UserCardProps {
    user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px', width: '300px' }}>
            <h2>{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserCard;