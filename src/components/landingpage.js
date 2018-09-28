import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class LandingPage extends Component {

    navigate = (path) => {
        this.props.history.push(path)
    }

    render () {
        return (
            <div>
                <h1>Welcome to your To Do List</h1>
                <RaisedButton label="Launch" secondary={true} style={{margin: '12px'}} onClick={() => { this.navigate('/todolist')}} />
            </div>
        )
    }
}