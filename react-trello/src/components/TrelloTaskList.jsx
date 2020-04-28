import React from 'react';
import TrelloTask from './TrelloTask';
import TrelloDialog from './TrelloDialog';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { validateTitle, validateDescription } from '../redux/Error/error.actions';

const useStyles = makeStyles(({
    column: {
        flexDirection: 'column',
        backgroundColor: '#F5F5F5',
        padding: '0 .8rem',
        paddingBottom: '.5rem',
        borderRadius: '.3rem',
    },
    list: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
        paddingBottom: '.8rem',
        minHeight: '2rem',
        maxHeight: '30rem',
        overflowY: 'auto',
        marginBottom: '.5rem',
    },
    title: {
        margin: '.6rem',
    },
    buttonAdd: {
        alignSelf: 'center',
    },
}));

function TrelloTaskList(props) {
    const classes = useStyles();

    const [ open, setOpen ] = React.useState(false);
    const { validateTitle, validateDescription } = props;

    const handleOpenDialog = () => {
        validateTitle('');
        validateDescription('');
        setOpen(true);
    };

    return (
        <Grid container className={classes.column}>
            <Typography 
                variant='subtitle1' 
                className={classes.title}>
                {props.title} 
            </Typography>
            <Droppable droppableId={props.title}>
                {(provided) => (
                    <Grid  
                        container 
                        spacing={2} 
                        className={classes.list}
                        innerRef={provided.innerRef}
                        {...provided.droppableProps}>
                        { 
                            props.tasks.map((task, index) => 
                            <Draggable key={task.id} draggableId={String(task.id)} index={index}> 
                                {(provided) => (
                                    <Grid 
                                        item 
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        innerRef={provided.innerRef}>
                                        <TrelloTask
                                            key={task.id} 
                                            listName={props.title}
                                            id={task.id}
                                            title={task.title} 
                                            description={task.description}/>
                                    </Grid>
                                )}
                            </Draggable>
                        )} 
                        {provided.placeholder}
                    </Grid>
                )}
            </Droppable>
            { 
                props.title === 'TODO' ? 
                <Button
                    className={classes.buttonAdd}
                    color='primary'
                    onClick={handleOpenDialog}
                    startIcon={<AddIcon/>}>
                    Add card
                </Button>
                : null
            }

            <TrelloDialog 
                open={open}
                setOpen={setOpen}
                title=''
                description=''
                listName={props.title}
                buttonType='DELETE_BUTTON'
            />
        </Grid>
    );
}

const mapDispatchToProps = (dispatch) => ({
    validateTitle: (value) => dispatch(validateTitle(value)),
    validateDescription: (value) => dispatch(validateDescription(value)),
});
  
export default connect(null, mapDispatchToProps)(TrelloTaskList);