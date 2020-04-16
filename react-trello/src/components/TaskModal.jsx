import React from 'react';
import { connect } from 'react-redux';
import { Modal, Paper, TextField, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { toggleModal } from '../redux/TaskModal/taskModal.actions';
import { addTask, removeTask, updateTask } from '../redux/Task/task.actions';
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
  const classes = useStyles();
  const { modal } = props;

  const handleSave = () => {
    modal.taskId? props.updateTask(modal) : props.addTask(modal)
    props.toggleModal();
  }
  const handleDelete = () => {
    props.removeTask(modal.taskId, modal.listId);
    props.toggleModal();
  }
  
  return (
    <Modal
      open={modal.open}
      onClose={props.toggleModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description">

      <Paper component="form" className={classes.modalContent}>
        <TextField
          onChange={(e) => props.changeText('title', e.target.value)}
          defaultValue={modal.title}/>

        <Box my={3}>
          <TextField
            label="Task Description"
            defaultValue={modal.description}
            multiline
            rows={5}
            fullWidth
            variant="outlined"
            onChange={(e) => props.changeText('description', e.target.value)}/>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between">
          <Button 
            onClick={handleDelete}
            variant="contained"
            color="secondary"
            disabled={!modal.taskId}>
            delete
          </Button>

          <Box>
            <Button
              onClick={props.toggleModal}
              variant="text" 
              color="primary"
              disableFocusRipple>
              Cancel
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}>
              save
            </Button>
          </Box>
        </Box>

      </Paper>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  modal: state.modal
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
  addTask: (modal) => dispatch(addTask(modal)),
  updateTask: (modal) => dispatch(updateTask(modal)),
  changeText: (field,text) => dispatch(changeText(field, text)),
  removeTask: (taskId, listId) => dispatch(removeTask(taskId, listId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal);
