import React from 'react';
import { connect } from 'react-redux';
import { Modal, Paper, TextField, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { toggleModal } from '../redux/TaskModal/taskModal.actions';

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
  return (
    <Modal
    open={props.open}
    onClose={props.toggleModal}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    >
      <Paper component="form" className={classes.modalContent}>
        <TextField defaultValue="Task Title" />
        <Box my={3}>
          <TextField
            label="Task Description"
            defaultValue="ovde ide neki malooo veci teks"
            multiline
            rows={5}
            fullWidth
            variant="outlined"
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Button variant="contained" color="secondary">delete</Button>
          <Box>
            <Button
              onClick={props.toggleModal}
              variant="text" 
              color="primary"
              disableFocusRipple>
              cancel
            </Button>
            <Button variant="contained" color="primary">save</Button>
          </Box>
        </Box>
      </Paper>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  open: state.modal.open,
  title: state.modal.title,
  description: state.modal.description
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal);
