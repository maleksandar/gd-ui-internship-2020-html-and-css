import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import Task from "./Task";

const useStyles = makeStyles(({
    column: {
        flexDirection: 'column',
        backgroundColor: '#F5F5F5',
        padding: '0 .8rem',
        paddingBottom: '.5rem',
        borderRadius: '.3rem'
    },
    list: {
        flexDirection: 'column',
        paddingBottom: '.8rem'
    },
    title: {
        margin: '.6rem 0'
    },
    buttonAdd: {
        alignSelf: 'center',
    }
  }));

function TaskList(props) {
    const classes = useStyles();
    return (
        <Grid container className={classes.column}>
            <Typography 
                variant="subtitle1" 
                className={classes.title}>
                {props.title} 
            </Typography>
            <Droppable droppableId={props.title}>
                {(provided) => (
                    <Grid 
                        item 
                        container 
                        spacing={2} 
                        className={classes.list}
                        innerRef={provided.innerRef}
                        {...provided.droppableProps} >
                        {provided.placeholder}
                        { props.tasks.map((task, index) => 
                            <Draggable key={task.id} draggableId={String(task.id)} index={index}> 
                                {(provided) => (
                                    <Grid 
                                        item 
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        innerRef={provided.innerRef}>
                                        <Task
                                            key={task.id} 
                                            listName={props.title}
                                            id={task.id}
                                            title={task.title} 
                                            description={task.description}/>
                                    </Grid>
                                )}
                            </Draggable>
                        )} 
                </Grid>
                )}
            </Droppable>
            { 
                props.title === 'TODO' ? 
                <Button
                    className={classes.buttonAdd}
                    color="primary"
                    startIcon={<AddIcon/>}>
                    Add card
                </Button>
                : null
            }
        </Grid>
    )
}

export default TaskList;