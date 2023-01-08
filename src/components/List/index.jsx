import React from 'react';
import { ListUserItem } from './ListUserItem';
import { List } from '@mui/material';
import './style.css';

export const ListContainer = ({ users, deleteUsers }) => {
    return (
        <div>
            <List>
                {users.map(user => (
                    <ListUserItem
                        key={user.id}
                        user={user}
                        deleteUsers={deleteUsers}
                    />
                ))}
            </List>
        </div>
    )
}
