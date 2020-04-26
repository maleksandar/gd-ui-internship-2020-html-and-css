import React from 'react';
import Card from './Card';
import AddTask from './AddTask';
import { Droppable } from 'react-beautiful-dnd';
import Grid from '@material-ui/core/Grid';

const CardList = ({ title, cards, listID }) => {
    return (
        <Grid>
            <Droppable droppableId={String(listID)}>
                {provided => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={styles.container}>
                        <h4
                            style={{
                                color: '#6b778c'
                            }
                            }>{title}</h4>
                        {cards.map((card, index) =>
                            <Card
                                key={card.id}
                                id={card.id}
                                index={index}
                                text={card.text}
                                description={card.description}
                                listID={listID} />)}
                        {title === 'Todo' ?
                            <div>
                                <AddTask listID={listID} />

                            </div>
                            : null}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </Grid>
    );
}

const styles = {
    container: {
        width: 300,
        margin: '20px 6px',
        padding: 8,
        backgroundColor: '#dfe3e6',
        borderRadius: 3,
    }
}

export default CardList;