  import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Ricardo", age: 25 },
      { name: "Maite", age: 29 },
      { name: "Caro", age: 24 }
    ]
  } 

  switchNameHandler = () => {
    // console.log('Was clicked!');
    this.setState( {
      persons: [
        { name: "Ricky", age: 25 },
        { name: "Maite", age: 29 },
        { name: "Caro", age: 23 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Reading</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, (React.createElement('h1', null, 'It does Work!')))
  }
}

export default App;
