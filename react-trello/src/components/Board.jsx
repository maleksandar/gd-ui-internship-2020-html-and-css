import React from "react";
import { Grid } from '@material-ui/core';
import TaskList from './TaskList';
import { makeStyles } from "@material-ui/styles";

const useClasess = makeStyles(({
    board: {
        margin: '0 auto',
        flexWrap: 'nowrap', 
        overflow: 'scroll',
        alignItems: 'flex-start',
    },
    column: {
        flex: '0 0 20rem',
    }
}))


function Board() {
    const toDo = [
        {
            id: 4,
            title: "Redux",
            description: "Use redux"
        }
    ];

    const inProgress = [
        {
            id: 3,
            title: "Drop and drag",
            description: "Do drop and drag functionality"
        }
    ];

    const done = [
        {
            id: 1,
            title: "Plan project",
            description: "Do plan of a project"
        },
        {
            id: 2,
            title: "Basic layout",
            description: "Do basic layout"
        }
    ];

    const classes = useClasess();
    return (
            <Grid 
                container 
                spacing={4}
                className={classes.board}>
              <Grid item className={classes.column}>
                <TaskList title="TODO" tasks={toDo}/>
              </Grid>
              <Grid item className={classes.column}>
                <TaskList title="IN PROGRESS" tasks={inProgress}/>
              </Grid>
              <Grid item className={classes.column}>
                <TaskList title="DONE" tasks={done}/>
              </Grid>
          </Grid>
    )
}

export default Board;