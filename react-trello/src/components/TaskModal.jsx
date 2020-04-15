import React from 'react';
import { connect } from 'react-redux';
import { Modal, Paper, TextField, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { toggleModal } from '../redux/TaskModal/taskModal.actions';
import { addTask, removeTask } from '../redux/Task/task.actions';
import { changeText } from '../redux/TaskModal/taskModal.actions';

const useStyles = makeStyles({
  modalContent: {
    width: '500px',
    padding: '20px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -80%)'
  }
})

export const TaskModal = (props) => {
  const handleAdd = () => {
    props.addTask(props.modal);
    props.toggleModal();
  }
  const handleDelete = () => {
    props.removeTask(props.modal.taskId, props.modal.listId);
    props.toggleModal();
  }
  const classes = useStyles();
  return (
    <Modal
    open={props.open}
    onClose={props.toggleModal}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    >
      <Paper component="form" className={classes.modalContent}>
        <TextField
          onChange={(e) => props.changeText('title', e.target.value)}
          defaultValue={props.title}
        />
        <Box my={3}>
          <TextField
            label="Task Description"
            defaultValue={props.description}
            multiline
            rows={5}
            fullWidth
            variant="outlined"
            onChange={(e) => props.changeText('description', e.target.value)}
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Button 
          onClick={handleDelete}
          variant="contained" color="secondary">delete</Button>
          <Box>
            <Button
              onClick={props.toggleModal}
              variant="text" 
              color="primary"
              disableFocusRipple
            >
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleAdd}>save</Button>
          </Box>
        </Box>
        {props.taskID}
      </Paper>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  modal: state.modal,
  tasks: state.task.tasks,
  open: state.modal.open,
  title: state.modal.title,
  description: state.modal.description,
  taskId: state.modal.taskId
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
  addTask: (modal) => dispatch(addTask(modal)),
  changeText: (field,text) => dispatch(changeText(field, text)),
  removeTask: (taskId, listId) => dispatch(removeTask(taskId, listId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal);
