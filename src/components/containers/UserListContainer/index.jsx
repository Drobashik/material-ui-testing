import { Button } from '@mui/material'
import React, { useState } from 'react'
import { ListContainer } from '../../List'

export const UserListContainer = () => {
    const [users, setUsers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)
  
    const getUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const usersResponse = await response.json();
      setUsers(usersResponse)
      setIsLoaded(true)
    }
  
    const deleteUsers = (userId) => {
      setUsers(prevUserArray => {
        return prevUserArray.filter(user => user.id !== userId)
      })
    }

    return (
        <>
            <div className='container'>
                <ListContainer
                    users={users}
                    deleteUsers={deleteUsers}
                />
                <div className='center'>
                    {
                        (!isLoaded ||
                            !users.length) &&
                        <Button
                            variant='contained'
                            onClick={getUsers}
                        >
                            Load users
                        </Button>
                    }
                </div>
            </div>
        </>
    )
}
