import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  card: {
    transition: 'all .2s',
    transform: (isDragging) => isDragging? 'rotate(3deg)': 'rotate(0)'
  }
})
const TaskCard = (props) => {
  const { title, desc ,innerRef, provided, isDragging } = props;
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
      <Button variant="contained" color="primary">Edit</Button>
      <Button variant="contained" color="secondary">Delete</Button>
    </CardActions>
    </Card>
  </Grid>
  )
}
export default TaskCard;
