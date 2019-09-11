import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { content: "" }
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" value={this.state.content} onChange={this.updateContent.bind(this)} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.content}</p>
      </div>
    );
  }

  // method that updates the state.content value
  updateContent(event) {
    this.setState({
      content: event.target.value
    });

  }

}

export default App;
