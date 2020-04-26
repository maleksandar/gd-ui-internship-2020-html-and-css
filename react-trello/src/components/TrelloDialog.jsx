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
import { addTask, editTask, deleteTask } from '../redux/Tasks/tasks.actions';
import { connect } from 'react-redux';
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
        height: '6rem'
    },
    description: {
        height: '10.5rem'
    }
}));

function TrelloDialog(props) {
    const { open, setOpen } = props;
    const { addTask, editTask, deleteTask, buttonType, id, title, description, listName } = props;
    const { validateTitle, validateDescription, errors } = props;

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
                descriptionInput.current.value.trim())
            :
            addTask(
                listName, 
                titleInput.current.value, 
                descriptionInput.current.value.trim());

        handleClose();
    }

    const handleDelete = () => {
        deleteTask(listName, id);

        handleClose();
    }

    const handleTitleChange = () => {
        validateTitle(titleInput.current.value.trim());
    }

    const handleDescriptionChange = () => {
        validateDescription(descriptionInput.current.value.trim());
    }
    
    return (
        <div>
        <Dialog 
            open={open}>
            <DialogContent
                className={classes.dialogContent}>
                <TextField
                    className={classes.title}
                    label="Card Title"
                    type="text"
                    fullWidth
                    variant="outlined"
                    defaultValue={title}
                    inputRef={titleInput}
                    onChange={handleTitleChange}
                    error={errors.titleError.error}
                    helperText={errors.titleError.errorMessage}
                />
                <TextField
                    className={classes.description}
                    label="Card Description"
                    type="text"
                    fullWidth
                    variant="outlined"
                    defaultValue={description}
                    inputRef={descriptionInput}
                    onChange={handleDescriptionChange}
                    error={errors.descriptionError.error}
                    helperText={errors.descriptionError.errorMessage}
                    multiline
                    rows={5}
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
                disabled={errors.titleError.error || errors.descriptionError.error}
                startIcon={<SaveIcon/>}>
                Save
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

const mapStateToProps = (state) => ({
    errors: state.errors
});
  
const mapDispatchToProps = (dispatch) => ({
    addTask: (listName, title, description) => dispatch(addTask(listName, title, description)),
    editTask: (listName, id, title, description) => dispatch(editTask(listName, id, title, description)),
    deleteTask: (listName, id) => dispatch(deleteTask(listName, id)),
    validateTitle: (value) => dispatch(validateTitle(value)),
    validateDescription: (value) => dispatch(validateDescription(value)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(TrelloDialog);