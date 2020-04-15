import React from 'react';
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import { toggleModal } from '../redux/TaskModal/taskModal.actions';
import { removeTask } from '../redux/Task/task.actions';

const useStyles = makeStyles({
  card: {
    transition: 'all .2s',
    transform: (isDragging) => isDragging? 'rotate(3deg)': 'rotate(0)'
  }
})
const TaskCard = (props) => {
  const {id, listId, title, desc ,innerRef, provided, isDragging } = props;
  const classes = useStyles(isDragging);
  return (
  <Grid
    ref={innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    item
   >
    <Card className={classes.card}>
    <CardContent>
      <Typography variant="h6" component="h3">
        {title}
      </Typography>
      <Typography variant="body2" component="p">
        {desc}
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" onClick={() => props.toggleModal(id, title, desc, listId)} color="primary">Edit</Button>
      <Button variant="contained" onClick={() => props.removeTask(id,listId)} color="secondary">Delete</Button>
    </CardActions>
    </Card>
  </Grid>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (taskID, title, desc, listId) => dispatch(toggleModal(taskID, title, desc, listId)),
  removeTask: (taskId, listId) => dispatch(removeTask(taskId, listId))
})

export default connect(null,mapDispatchToProps)(TaskCard);
