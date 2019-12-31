import React, { Component } from 'react';

import classes from './Cockpit.module.css';

const cockpit = ( props ) => {
    
     const assignedClasses = [];
     let btnClass = '';

     if( props.showPersons ) { 
        btnClass = classes.Red
     }

    if(props.persons.length <= 2){
      assignedClasses.push(classes.red)
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold)
    }
 
    return (
        <div className={classes.Cockpit}>
            <h1>Hello world!</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
                className={btnClass}
                toggle={props.showPersons}
                onClick={props.clicked}>Show Persons</button>
        </div>
    )
}

export default cockpit;