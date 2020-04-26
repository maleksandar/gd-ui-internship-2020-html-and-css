import React from 'react';
import { connect } from 'react-redux';
import CardList from './CardList';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../store/actions'
import Grid from '@material-ui/core/Grid';

const Board = (props) => {
    const { lists, dispatch } = props;

    const onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        dispatch(sort(
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,
            draggableId
        ))
    }

    return (
        <Grid>
            <DragDropContext onDragEnd={onDragEnd}>

                <div style={{
                    display: 'flex'
                }}>
                    {lists.map(list => (
                        <CardList
                            key={list.id}
                            listID={list.id}
                            title={list.title}
                            cards={list.cards}
                        />
                    ))}
                </div>
            </DragDropContext>
        </Grid>
    );
}

const mapStateToProps = state => ({
    lists: state
})

export default connect(mapStateToProps)(Board);