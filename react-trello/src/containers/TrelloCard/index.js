import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { toggleModal } from '../TrelloModal/actions';
import { removeTask } from '../TrelloBoard/actions';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { 
  Card,
  Grid,
  CardActions,
  CardContent,
  Button,
  Typography 
} from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    transition: 'all .2s',
    transform: (isDragging) => isDragging? 'rotate(3deg)': 'rotate(0)'
  }
})

const TaskCard = (props) => {
  const {task, listId, innerRef, provided, isDragging } = props;
  const classes = useStyles(isDragging);
  console.log(props);
  return (
  <Grid
    ref={innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    item>
    <Card className={classes.card}>

      <CardContent>
        <Typography
          variant="h6"
          component="h3"
          gutterBottom>
          {task.title}
        </Typography>

        <Typography
          variant="body2"
          component="p">
          {task.desc}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          onClick={() => props.toggleModal(task.id, listId)}
          startIcon={<EditIcon/>}
          size="small"
          color="primary">
          Edit
        </Button>

        <Button
          variant="contained"
          onClick={() => props.removeTask(task.id, listId)}
          startIcon={<DeleteIcon/>}
          size="small"
          color="secondary">
          Delete
        </Button>
      </CardActions>

    </Card>
  </Grid>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (taskId, listId) => dispatch(toggleModal(taskId, listId)),
  removeTask: (taskId, listId) => dispatch(removeTask(taskId, listId))
})

export default connect(null,mapDispatchToProps)(TaskCard);
