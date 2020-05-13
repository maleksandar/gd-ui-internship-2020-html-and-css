import React from "react";
import { Droppable } from "react-beautiful-dnd";

import './CardList.css';

//Components
import Card from "../Card/Card";
import AddTask from "../AddTask/AddTask";
import Grid from "@material-ui/core/Grid";

const CardList = ({ title, cards, listID }) => {
    return (
        <Grid>
            <Droppable droppableId={String(listID)}>
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="listContainer"
                    >
                        <h4 style={{ color: "#6b778c" }}>{title}</h4>
                        {cards.map((card, index) => (
                            <Card
                                key={card.id}
                                id={card.id}
                                index={index}
                                text={card.text}
                                description={card.description}
                                listID={listID}
                                task={card}
                            />
                        ))}
                        {title === 'To Do' ? <AddTask
                            listID={listID}
                        /> : null}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </Grid>
    );
};

export default CardList;
