import React from 'react';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { Icon } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { editTask, deleteTask } from '../store/actions';
import Grid from '@material-ui/core/Grid';

const EditTask = (props) => {
    const { id, text, description, listID, open, setOpen, dispatch } = props;
    const classes = useStyles();
    let newTitle = '';
    let newDescription = '';

    const handleClose = () => {
        setOpen(false);
    };

    const handleTextChange = (event) => {
        newTitle = event.target.value;
    }

    const handleDescriptionChange = (event) => {
        newDescription = event.target.value;
    }

    const handleSaveTask = () => {
        dispatch(editTask(listID, id, newTitle, newDescription));
        handleClose();
    }

    const handleDeleteTask = () => {
        dispatch(deleteTask(id, listID));
        handleClose();
    }

    return (
        <Grid>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Icon
                            onClick={handleClose}
                            style={{
                                alignSelf: 'flex-end',
                                cursor: 'pointer'
                            }}>close</Icon>
                        <TextField
                            style={{
                                marginBottom: 20,
                                marginTop: 10
                            }}
                            id="outlined-basic1" label="Task title" variant="outlined"
                            defaultValue={text}
                            autoFocus
                            onChange={handleTextChange}
                        />
                        <TextField
                            style={{
                                height: 200
                            }}
                            id="outlined-basic2" label="Task description" variant="outlined"
                            defaultValue={description}
                            onChange={handleDescriptionChange}
                            rowsMax={4}
                            multiline
                        />
                        <div style={{ display: 'flex' }}>
                            <Button
                                style={{ marginRight: 'auto' }}
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                startIcon={<DeleteIcon />}
                                size='small'
                                onClick={handleDeleteTask}
                            >
                                Delete
                        </Button>

                            <Button color="primary"
                                onClick={handleClose}
                                style={{ marginRight: 10 }}>Cancel</Button>

                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                className={classes.button}
                                startIcon={<SaveIcon />}
                                onClick={handleSaveTask}
                            >
                                Save
                        </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: 470,
        height: 280,
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        display: 'flex',
    }
}));

export default connect()(EditTask);