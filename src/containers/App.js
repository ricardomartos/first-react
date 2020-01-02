import React, { Component } from 'react';

import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import classes from './App.module.css';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';


class App extends Component {

  constructor( props ){
    super(props);
    
    console.log('[App.js] contructor')
  };

  state = {
    persons: [
      { id: 'qwert', name: "Ricardo", age: 25 },
      { id: 'asdfg', name: "Maite", age: 29 },
      { id: 'zxcvb', name: "Caro", age: 24 }
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  } 

  // static getDerivedStateFromProps( props, state ){
  //   console.log('[App.js] getDerivedStateFromProps', props)
  //   return state
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nestState){
    console.log('[App.js] shouldComponentUpdate')
    return true
  }

  nameChangeHandler = ( event , id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState( ( prevState, props ) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1 
      };
    });
      
  }

  deletePersonHandler = (indexPerson) => {
    const persons = [...this.state.persons];
    persons.splice(indexPerson, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    let doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {
    console.log('[App.js] rendering...')
    let persons = null;

    if(this.state.showPersons){
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
    }

    return (
      <Aux>
        <button onClick={() => {
          this.setState({ showCockpit: false })
          }}>Remove Cockpit</button>
        <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler}}>
        { this.state.showCockpit ? 
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}/>
        : null }
        {persons}
        </AuthContext.Provider>
        
      </Aux>
    );
  }
}

export default withClass( App, classes.App);
