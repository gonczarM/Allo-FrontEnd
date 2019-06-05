import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import openSocket from 'socket.io-client'
export const socket = openSocket('http://localhost:9021')

ReactDOM.render(<App />, document.getElementById('root'));

socket.on('message', (m) => {
	console.log("we got this from the server:");
	console.log(m);
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
