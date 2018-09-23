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
                    <TodoList list_items={this.state.list_items}/>
              </form>
            </div>
        )
    }
}