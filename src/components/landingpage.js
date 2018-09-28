import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

let imgUrl = 'image/todo_background.jpeg';

var divStyle = {
    color: 'white',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + imgUrl + ')',
    WebkitTransition: 'all',
    msTransition: 'all',
  };

export default class LandingPage extends Component {

    navigate = (path) => {
        this.props.history.push(path)
    }

    render () {
        return (
            <div style={divStyle}>
                <h1>Welcome to your To Do List</h1>
                <p>An easy way to keep track of all the things you need to do in a day.</p>
                <RaisedButton label="Launch" secondary={true} style={{margin: '12px'}} onClick={() => { this.navigate('/todolist')}} />
            </div>
        )
    }
}