import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Card, Typography, CardContent, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { validateTitle, validateDescription } from '../redux/Error/error.actions';
import { deleteTask } from '../redux/Tasks/tasks.actions';
import TrelloDialog from './TrelloDialog';

const useStyles = makeStyles(({
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

function TrelloTask(props) {
  const clasess = useStyles();

  const [open, setOpen] = React.useState(false);
  const { listName, id, title, description, deleteTask, validateTitle, validateDescription } = props;

  const handleDelete = () => {
    deleteTask(listName, id);
  };

  const handleOpenDialog = () => {
    validateTitle(title);
    validateDescription(description);
    setOpen(true);
  };

  return (
    <Grid item>
      <Card>
        <CardContent>
          <Typography
            variant='h6'
            gutterBottom>
            {title}
          </Typography>

          <Typography
            variant='body1'>
            {description}
          </Typography>
        </CardContent>

        <CardActions className={clasess.cardActions}>
          <Button
            color='primary'
            size='small'
            onClick={handleOpenDialog}
            startIcon={<EditIcon/>}
          >
            Edit
          </Button>

          <Button
            color='secondary'
            size='small'
            onClick={handleDelete}
            startIcon={<DeleteIcon/>}
          >
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

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    deleteTask,
    validateTitle,
    validateDescription
  },
  dispatch
);

export default connect(null, mapDispatchToProps)(TrelloTask);