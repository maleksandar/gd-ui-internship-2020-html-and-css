import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Textarea from 'react-textarea-autosize';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { addTask } from '../store/actions'

class AddTask extends Component {
    state = {
        isFormOpen: false,
        text: '',
        description: ''
    }

    openForm = () => {
        this.setState({
            isFormOpen: true
        })
    }

    closeForm = () => {
        this.setState({
            isFormOpen: false
        })
    }

    showForm = () => {
        return (
            <div>
                <Card style={{
                    minHeight: 90,
                    padding: '6px 10px'
                }}
                >
                    <div>
                        <Input
                            placeholder='Enter a title for this card...'
                            autoFocus
                            value={this.state.text}
                            onChange={this.handleInputChange}
                            style={styles.inputAndTextareaElement}
                        />
                        <Textarea
                            placeholder='Enter a description for this card...'
                            value={this.state.description}
                            onChange={this.handleTextareaChange}
                            style={styles.inputAndTextareaElement} />
                    </div>
                </Card>
                <div style={styles.buttonGroup}>
                    <Button
                        onClick={this.handleAddCard}
                        size='small'
                        variant='contained'
                        style={styles.addCardButton}>Add card</Button>
                    <Icon
                        onClick={this.closeForm}
                        style={{
                            cursor: 'pointer',
                            color: '#6b778c'
                        }}
                    >close</Icon>
                </div>
            </div>
        )
    }

    showAddButton = () => {
        return (
            <div
                style={styles.addButton}
                onClick={this.openForm}>
                <Icon>add</Icon>
                <p>Add another card</p>
            </div>
        );
    }

    handleAddCard = () => {
        const { dispatch, listID } = this.props;
        const { text, description } = this.state;

        if (text && description) {
            this.setState({
                text: '',
                description: ''
            })
            this.closeForm();
            dispatch(addTask(listID, text, description))
        }
    }

    handleInputChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleTextareaChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    render() {
        return (
            this.state.isFormOpen ? this.showForm() : this.showAddButton()
        )
    }
}

const styles = {
    addButton: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        height: 35,
        paddingLeft: 10,
        opacity: .5,
    },
    buttonGroup: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 8
    },
    addCardButton: {
        backgroundColor: '#5aac44',
        color: 'white',
        marginRight: 8
    },
    inputAndTextareaElement: {
        resize: 'none',
        width: '100%',
        outline: 'none',
        border: 'none',
        overflow: 'hidden'
    }
}

export default connect()(AddTask);