import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
import Hello from './App';

const person = {
    personName: "Doji Saber",
    personAge: 29,
    favorites:["horses","rabbits","birds"]
}

ReactDOM.render(<Hello name={person.personName} age={person.personAge} animals={person.favorites} />, document.getElementById('root'));

// serviceWorker.unregister();
