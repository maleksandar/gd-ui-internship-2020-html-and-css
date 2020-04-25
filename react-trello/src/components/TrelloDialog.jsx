import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import { addTask, editTask, deleteTask } from '../redux/actions';
import { connect } from 'react-redux';

const useStyles = makeStyles(({
    dialogActions: {
        display: 'flex',
    },
    buttonDelete: {
        marginRight: 'auto',
    },
    title: {
        marginBottom: '1rem'
    }
}));

function TrelloDialog(props) {
    const { open, setOpen } = props;
    const { addTask, editTask, deleteTask, buttonType, id, title, description, listName } = props;

    const titleInput = React.createRef(null);
    const descriptionInput = React.createRef(null);

    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        id ?
            editTask(
                listName, 
                id,
                titleInput.current.value,
                descriptionInput.current.value)
            :
            addTask(
                listName, 
                titleInput.current.value, 
                descriptionInput.current.value);

        handleClose();
    }

    const handleDelete = () => {
        deleteTask(listName, id);

        handleClose();
    }
    
    return (
        <div>
        <Dialog 
            open={open}>
            <DialogContent>
                <TextField
                    className={classes.title}
                    id="title"
                    label="Card Title"
                    type="text"
                    fullWidth
                    variant="outlined"
                    defaultValue={title}
                    inputRef={titleInput}
                />
                <TextField
                    id="description"
                    label="Card Description"
                    type="text"
                    fullWidth
                    variant="outlined"
                    defaultValue={description}
                    inputRef={descriptionInput}
                />
            </DialogContent>
            <DialogActions
                className={classes.dialogActions}>
            <Button
                className={classes.buttonDelete}
                color="secondary"
                size="small"
                onClick={handleDelete}
                startIcon={<DeleteIcon/>}
                disabled={buttonType === "DELETE_BUTTON"}>
                Delete
            </Button>
            <Button
                size="small"
                onClick={handleClose}
                startIcon={<CancelIcon/>}>
                Cancel
            </Button>
            <Button
                color="primary"
                size="small"
                onClick={handleSave}
                startIcon={<SaveIcon/>}>
                Save
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addTask: (listName, title, description) => dispatch(addTask(listName, title, description)),
    editTask: (listName, id, title, description) => dispatch(editTask(listName, id, title, description)),
    deleteTask: (listName, id) => dispatch(deleteTask(listName, id)),
})
  
export default connect(null, mapDispatchToProps)(TrelloDialog);