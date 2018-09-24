import React, { Component } from 'react';

export default class TodoList extends Component {

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.list_items.map((list_item, index) => (
                            <li key={index}>
                                { list_item.text }
                                <button onClick={this.props.deleteItem}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}