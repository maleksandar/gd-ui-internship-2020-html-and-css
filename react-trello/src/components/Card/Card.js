import React from 'react';
import { bindActionCreators } from "redux";
import { Draggable } from 'react-beautiful-dnd'
import { connect } from 'react-redux';

//Components
import EditTask from '../EditModal/EditModal';
import {
    Card as CardMaterial,
    Typography,
    CardContent,
    Button,
    CardActions
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

//Actions
import * as actions from "../../redux/actions";


const Card = ({ id, index, text, description, listID, task, deleteTask }) => {
    const [open, setOpen] = React.useState(false);

    const handleDeleteCard = () => {
        deleteTask(listID, id);
    }

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Draggable draggableId={String(id)} index={index}>
                {provided => (
                    <div ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <CardMaterial style={{
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
                        </CardMaterial>
                    </div>
                )}
            </Draggable>
            <EditTask
                listID={listID}
                open={open}
                setOpen={setOpen}
                task={task}
            />
        </div>
    );
}

const mapStateToProps = (state) => ({
    lists: state,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Card);