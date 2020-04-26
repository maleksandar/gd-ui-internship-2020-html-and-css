import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { Draggable } from 'react-beautiful-dnd'
import { deleteTask } from '../store/actions';
import { connect } from 'react-redux';
import EditTask from './EditModal';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Task = (props) => {
    const { id, index, text, description, listID, dispatch } = props;
    const [open, setOpen] = React.useState(false);

    const handleDeleteCard = () => {
        dispatch(deleteTask(id, listID));
    }

    const handleOpen = () => {
        setOpen(true);
        console.log(id, text, description);
    };

    return (
        <div>
            <Draggable draggableId={String(id)} index={index}>
                {provided => (
                    <div ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <Card style={{
                            marginBottom: 8
                        }}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    {text}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    style={{ marginRight: 'auto' }}
                                    onClick={handleOpen}
                                    variant="contained"
                                    color="default"
                                    size="small"
                                    startIcon={<EditIcon />}>
                                    Edit
                                </Button>
                                <Button
                                    onClick={handleDeleteCard}
                                    variant="contained"
                                    color="secondary"
                                    size="small"
                                    startIcon={<DeleteIcon />}>
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                )}
            </Draggable>
            <EditTask
                id={id}
                text={text}
                description={description}
                listID={listID}
                open={open}
                setOpen={setOpen}
            />
        </div>
    );
}

export default connect()(Task);