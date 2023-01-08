import React, { useEffect, useState } from 'react'
import { ListContainer } from '../../List'

export const UserListContainer = () => {
    const [users, setUsers] = useState([]);
    
    const getUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const usersResponse = await response.json();
      setUsers(usersResponse)
    }
  
    const deleteUsers = (userId) => {
      setUsers(prevUserArray => {
        return prevUserArray.filter(user => user.id !== userId)
      })
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <div className='container'>
                <ListContainer
                    users={users}
                    deleteUsers={deleteUsers}
                />
            </div>
        </>
    )
}
