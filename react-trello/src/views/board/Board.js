import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

// Components
import CardList from "../../components/CardList/CardList";
import Grid from "@material-ui/core/Grid";

// Actions
import * as actions from "../../redux/actions";

const Board = ({ lists, dragCardInOtherList, dragCardInSameList }) => {
    const LIST_TITLE = {
        todoList: "To Do",
        inProgresList: "In Progress",
        doneList: "Done",
    };

    const onDragEnd = ({ destination, source, draggableId }) => {
        if (!destination) {
            return;
        }

        if (source.droppableId !== destination.droppableId) {
            const task = lists[source.droppableId].filter(
                (item) => item.id === draggableId
            );

            const { list } = lists[destination.droppableId].reduce(
                (acc, curr, index) => {
                    if (destination.index === index) {
                        acc.list.push(task[0]);
                        acc.list.push(lists[destination.droppableId][index]);
                    }
                    else {
                        acc.list.push(lists[destination.droppableId][index]);
                    }
                    return acc;
                }, { list: [] }
            )
            dragCardInOtherList(source.droppableId, destination.droppableId, task[0], list);
        } else {
            const { list, element } = lists[source.droppableId].reduce(
                (acc, curr, index) => {
                    if (source.index === index) {
                        acc.element = lists[source.droppableId][index];
                    } else {
                        acc.list.push(lists[source.droppableId][index]);
                    }
                    return acc;
                },
                { list: [], element: null }
            );

            list.splice(destination.index, 0, element);
            dragCardInSameList(source.droppableId, list);
        }
    };

    return (
        <Grid>
            <DragDropContext onDragEnd={onDragEnd}>
                <div style={{ display: "flex" }}>
                    {Object.keys(lists).map((key) => (
                        <CardList
                            key={key}
                            listID={key}
                            title={LIST_TITLE[key]}
                            cards={lists[key]}
                        />
                    ))}
                </div>
            </DragDropContext>
        </Grid>
    );
};

const mapStateToProps = (state) => ({
    lists: state,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Board);
