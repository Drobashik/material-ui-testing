import React, { useState } from 'react';
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './style.css';

const AdditionUserInformation = ({ user, isOpened }) => {
    return (
        <>
            <Grid container className={isOpened ? 'opened' : ''} >
                <Grid xs={6}>
                    <div className="paper">
                        <p>Street: {user.address.street}</p>
                        <p>City: {user.address.city}</p>
                        <p>Zipcode: {user.address.zipcode}</p>
                    </div>
                </Grid>
                <Grid xs={6}>
                    <div className="paper">
                        <p>Company: {user.company.name}</p>
                        <p>Phrase: {user.company.catchPhrase}</p>
                        <p>Phone: {user.phone}</p>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

const ShowMoreLessIndicator = ({ isOpened = false }) => {
    return (
        <>
            {isOpened
                ? <ExpandLessIcon sx={{ color: '#a0a0a0' }} />
                : <ExpandMoreIcon sx={{ color: '#a0a0a0' }} />
            }
        </>
    );
}

const ListUserButton = ({ deleteUsers, user }) => {
    const [openDeleteAlert, setOpenDeleteAlert] = useState(false);

    return (
        <>
            <Button
                color='error'
                variant='contained'
                onClick={(e) => {
                    e.stopPropagation()
                    setOpenDeleteAlert(true)
                }}
            >
                Delete
            </Button>
            <DeleteAlertPopUp
                open={openDeleteAlert}
                handleClose={setOpenDeleteAlert}
                deleteUsers={deleteUsers}
                user={user}
            />
        </>
    );
}

const DeleteAlertPopUp = ({ open, handleClose, deleteUsers, user }) => {

    const closeModal = (e) => {
        e.stopPropagation()
        handleClose(false)
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={closeModal}
            >
                <DialogTitle>
                    Do you really want to delete?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        After deletion you cannot recover it.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        deleteUsers(user.id)
                    }}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export const ListUserItem = ({ user, deleteUsers }) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <>
            <ListItem
                sx={{cursor: 'pointer'}}
                onClick={() => {
                    setIsOpened(prev => !prev)
                }}
            >
                <ShowMoreLessIndicator isOpened={isOpened} />
                <ListItemAvatar>
                    <Avatar
                        sx={{ bgcolor: '#c0c0c0' }}
                    >
                        {user.name[0]}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.name} secondary={user.email} />
                <ListUserButton deleteUsers={deleteUsers} user={user} />
            </ListItem>
            <AdditionUserInformation user={user} isOpened={isOpened} />
        </>
    );
}
