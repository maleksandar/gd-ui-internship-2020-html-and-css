import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Grid, Container } from '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd';
import { moveTask, fetchTasksStart } from './actions';
import TrelloList from '../TrelloList';
import TrelloModal from '../TrelloModal';
import Spinner from './Spinner';

class ListContainer extends Component {
  
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    const { lists, moveTask, isFetching } = this.props;  
    const keys = Object.keys(lists);
    const taskLists = keys.map((key) => {
      const list = lists[key];
      return (
        <TrelloList
          key={list.id}
          list={list}/>
      );
    });

    return (
      isFetching? <Spinner/> :
      <Container
        maxWidth="xl">
        <Grid 
          container
          style={{flexWrap:'nowrap'}}
          spacing={7} 
          alignItems="flex-start">
            <DragDropContext
              onDragEnd={moveTask}>
              {taskLists}
            </DragDropContext>
        </Grid>
        <TrelloModal />
      
      </Container>
    );
  }
};

const mapStateToProps = (state) => ({
  lists: state.board.lists,
  modal: state.modal,
  isFetching: state.board.isFetching
});

const mapDispatchToProps = (dispatch) => ({
  moveTask: (moveResult) => dispatch(moveTask(moveResult)),
  fetchTasks: () => dispatch(fetchTasksStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
