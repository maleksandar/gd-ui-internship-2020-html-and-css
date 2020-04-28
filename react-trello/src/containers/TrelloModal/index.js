import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Modal, Paper, TextField, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { toggleModal } from './actions';
import { addTask, removeTask, updateTask } from '../TrelloBoard/actions';
import SaveIcon from '@material-ui/icons/Save';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

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
  const { taskId, listId, open } = props.modal;
  const task = props.tasks[taskId];
  const inputTitle = useRef(null);
  const inputDescription = useRef(null);

  const handleSave = () => {
    const newTask = {
      id: taskId,
      title: inputTitle.current.value,
      desc: inputDescription.current.value
    }
    taskId? props.updateTask(newTask) : props.addTask(newTask, listId);
    props.toggleModal();
  }

  const handleDelete = () => {
    props.removeTask(taskId, listId);
    props.toggleModal();
  }
  
  return (
    <Modal
      open={open}
      onClose={props.toggleModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description">

      <Paper component="form" className={classes.modalContent}>
        <TextField
          inputRef={inputTitle}
          defaultValue={taskId? task.title : 'Title'}/>

        <Box my={3}>
          <TextField
            label="Task Description"
            defaultValue={taskId? task.desc: 'enter the description'}
            multiline
            rows={5}
            fullWidth
            variant="outlined"
            inputRef={inputDescription}/>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between">
          <Button 
            onClick={handleDelete}
            variant="contained"
            color="secondary"
            startIcon={<DeleteForeverIcon/>}
            disabled={!taskId}>
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
              onClick={handleSave}
              startIcon={<SaveIcon/>}>
              save
            </Button>
          </Box>
        </Box>

      </Paper>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  tasks: state.board.tasks,
  modal: state.modal
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
  addTask: (task, listId) => dispatch(addTask(task, listId)),
  updateTask: (task) => dispatch(updateTask(task)),
  removeTask: (taskId, listId) => dispatch(removeTask(taskId, listId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal);
