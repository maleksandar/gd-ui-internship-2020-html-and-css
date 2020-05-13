import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import './AddTask.css';

//Components
import {
    Icon,
    Card,
    Button,
    Input
} from "@material-ui/core";
import Textarea from "react-textarea-autosize";


//Actions
import * as actions from "../../redux/actions";

const AddTask = (props) => {
    const { addTask } = props;
    const [isFormOpen, setIsFormOpen] = React.useState(false);
    const [text, setText] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [task, setTask] = React.useState({});

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

    const handleAddCard = () => {
        task.text = text;
        task.description = description
        if (task.text && task.description) {
            addTask(task);
            setText('');
            setDescription('');
            closeForm();
        }
        else {
            alert('Title and description are required!');
        }
    };

    const showForm = () => (
        <div>
            <Card
                style={{
                    minHeight: 90,
                    padding: "6px 10px",
                }}
            >
                <div>
                    <Input
                        placeholder="Enter a title for this card..."
                        autoFocus
                        name="text"
                        onChange={e => setText(e.target.value)}
                        className="inputAndTextareaElement"
                    />
                    <Textarea
                        name="description"
                        placeholder="Enter a description for this card..."
                        onChange={e => setDescription(e.target.value)}
                        className="inputAndTextareaElement"
                    />
                </div>
            </Card>
            <div className="buttonGroup">
                <Button
                    style={styles.addCardButton}
                    // className="addCardButton"
                    onClick={handleAddCard}
                    size="small"
                    variant="contained"
                >
                    Add card
        </Button>
                <Icon
                    onClick={closeForm}
                    style={{
                        cursor: "pointer",
                        color: "#6b778c",
                    }}
                >
                    close
        </Icon>
            </div>
        </div>
    );

    const showAddButton = () => (
        <div className="addButton" onClick={openForm}>
            <Icon>add</Icon>
            <p>Add another card</p>
        </div>
    );

    return isFormOpen ? showForm() : showAddButton();

}

const styles = {
    addCardButton: {
        backgroundColor: "#5aac44",
        color: "white",
        marginRight: 8,
    }
};

const mapStateToProps = (state) => ({
    lists: state,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
