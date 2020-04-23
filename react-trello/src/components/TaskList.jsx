import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

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
            <Grid item container spacing={2} className={classes.list}>
                { 
                    props.tasks.map(task => 
                        <Task key={task.id} title={task.title} description={task.description}/>
                    )
                } 
            </Grid>
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