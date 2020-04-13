import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const TaskCard = ({ title, desc }) => (
  <Card>
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
);
export default TaskCard;
