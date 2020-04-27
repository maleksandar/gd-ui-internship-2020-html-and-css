import React from 'react';
import TrelloDialog from './TrelloDialog';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { deleteTask } from '../redux/Tasks/tasks.actions';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, Typography, CardContent, CardActions, Button } from '@material-ui/core';

const useStyles = makeStyles(({
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

function TrelloTask(props) {
  const clasess = useStyles();
  
  const { listName, id, title, description } = props;
  const { deleteTask } = props;

  const [open, setOpen] = React.useState(false);

  const handleDelete = () => {
    deleteTask(props.listName, props.id);
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  return (
    <Grid item>
      <Card>
        <CardContent>
          <Typography
            variant='h6'
            gutterBottom>
            {props.title}
          </Typography>

          <Typography
            variant='body1'>
            {props.description}
          </Typography>
        </CardContent>

        <CardActions className={clasess.cardActions}>
          <Button
            color='primary'
            size='small'
            onClick={handleOpenDialog}
            startIcon={<EditIcon/>}>
            Edit
          </Button>

          <Button
            color='secondary'
            size='small'
            onClick={handleDelete}
            startIcon={<DeleteIcon/>}>
            Delete
          </Button>
        </CardActions>
      </Card>

      <TrelloDialog 
          open={open}
          setOpen={setOpen}
          listName={listName}
          id={id}
          title={title}
          description={description}/>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (listName, id) => dispatch(deleteTask(listName, id)),
});

export default connect(null, mapDispatchToProps)(TrelloTask);