import React, { Component } from 'react';
import TodoList from './todolist';

export default class ToDoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            list_items: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text)

        if(!this.state.text.length) {
            return;
        }

        this.setState({ 
            list_items: this.state.list_items.concat({ text: this.state.text}),
            text: ''
        })
    }

    delete_list = () => {
        this.setState({
            list_items: []
        })
    }

    delete_list_item = (index, e) => {
        const list_items = Object.assign([], this.state.list_items);
        list_items.splice(index, 1);
        this.setState({ list_items: list_items})
    }

    render() {
        return (
            <div>
              <form onSubmit={this.onSubmit}>
                    <h3>My to do list</h3>
                    <input
                       name='text' 
                       value={this.state.text}
                       onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <button>Add to list</button>
                    <TodoList list_items={this.state.list_items} deleteItem={this.delete_list_item.bind(this)}/>
                    {
                        this.state.list_items.length > 0 ?
                        <button onClick={this.delete_list}>Delete List</button>:
                        null
                    }
              </form>
            </div>
        )
    }
}