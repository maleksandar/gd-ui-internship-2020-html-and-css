import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import { Button, Dialog, TextField, DialogActions, DialogContent } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

import { addTask, editTask, deleteTask } from '../redux/Tasks/tasks.actions';
import { validateTitle, validateDescription} from '../redux/Error/error.actions';

const useStyles = makeStyles(({
    dialogContent: {
        width: '30rem',
        paddingBottom: '0',
    },
    dialogActions: {
        padding: '0.625rem 1.5rem',
        display: 'flex',
    },
    buttonDelete: {
        marginRight: 'auto',
    },
    title: {
        height: '6rem',
    },
    description: {
        height: '10.5rem',
    },
}));

function TrelloDialog(props) {
    const classes = useStyles();

    const { open, setOpen, listName, id, title, description, buttonType } = props;
    const { addTask, editTask, deleteTask, validateTitle, validateDescription, errors } = props;
    
    const [titleInput, setTitleInput] = useState(title);
    const [descriptionInput, setDescriptionInput] = useState(description);

    const handleClose = () => {
        setDescriptionInput(description);
        setTitleInput(title);
        setOpen(false);
    };

    const handleSave = () => {
        id ?
            editTask(
                listName, 
                id,
                titleInput.trim(),
                descriptionInput.trim())
            :
            addTask(
                listName,
                {
                    id: uuidv1(),
                    title: titleInput.trim(),
                    description: descriptionInput.trim()
                });

        handleClose();
    };

    const handleDelete = () => {
        deleteTask(listName, id);
        handleClose();
    };

    const handleTitleChange = (e) => {
        setTitleInput(e.target.value);
        validateTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescriptionInput(e.target.value);
        validateDescription(e.target.value);
    };

    return (
        <Dialog 
            open={open}
            onClose={handleClose}
        >
            <DialogContent className={classes.dialogContent}>
                <TextField
                    className={classes.title}
                    label='Card Title'
                    type='text'
                    fullWidth
                    variant='outlined'
                    value={titleInput}
                    onChange={handleTitleChange}
                    error={errors.titleError.error}
                    helperText={errors.titleError.errorMessage}
                />
                <TextField
                    className={classes.description}
                    label='Card Description'
                    type='text'
                    fullWidth
                    variant='outlined'
                    value={descriptionInput}
                    onChange={handleDescriptionChange}
                    error={errors.descriptionError.error}
                    helperText={errors.descriptionError.errorMessage}
                    multiline
                    rows={5}
                />
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
            <Button
                className={classes.buttonDelete}
                color='secondary'
                size='small'
                onClick={handleDelete}
                startIcon={<DeleteIcon/>}
                disabled={buttonType === 'DELETE_BUTTON'}
            >
                Delete
            </Button>
            <Button
                size='small'
                onClick={handleClose}
                startIcon={<CancelIcon/>}
            >
                Cancel
            </Button>
            <Button
                color='primary'
                size='small'
                onClick={handleSave}
                disabled={errors.titleError.error || errors.descriptionError.error}
                startIcon={<SaveIcon/>}
            >
                Save
            </Button>
            </DialogActions>
        </Dialog>
    );
}

const mapStateToProps = (state) => ({
    errors: state.errors
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
      addTask,
      editTask,
      deleteTask,
      validateTitle,
      validateDescription
    },
    dispatch
);
  
export default connect(mapStateToProps, mapDispatchToProps)(TrelloDialog);