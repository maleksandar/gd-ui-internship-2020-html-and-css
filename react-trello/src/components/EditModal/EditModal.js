import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

//Components
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import {
    Grid,
    Button,
    Fade,
    Backdrop,
    TextField,
    Icon,
    Modal,
    makeStyles
} from '@material-ui/core';

//Actions
import * as actions from "../../redux/actions";

const EditTask = (props) => {
    const { listID, open, setOpen, task, editTask, deleteTask } = props;
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    const handleTextChange = (event) => {
        task.text = event.target.value;
    }

    const handleDescriptionChange = (event) => {
        task.description = event.target.value;
    }

    const handleSaveTask = () => {
        if (task.text && task.description) {
            editTask(listID, task);
            handleClose();
        }
        else {
            alert('Title and description are required!');
        }
    }

    const handleDeleteTask = () => {
        deleteTask(listID, task.id);
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
                            defaultValue={task.text}
                            autoFocus
                            onChange={handleTextChange}
                        />
                        <TextField
                            style={{
                                height: 200
                            }}
                            id="outlined-basic2" label="Task description" variant="outlined"
                            defaultValue={task.description}
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

const mapStateToProps = (state) => ({
    lists: state,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);