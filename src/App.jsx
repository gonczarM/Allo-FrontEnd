import React from 'react';
import './App.css';
import AuthGateway from './AuthGateway/AuthGateway'
import Conversation from './Conversation/Conversation'

class App extends React.Component {
	constructor(){
		super()
		this.state = {
			loggedIn: false,
			user: ''
		}
	}

	handleRegister = async (formData) => {
		console.log(formData);
		const registerResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/users/register', {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json"
			},
			credentials: "include"
		})
		console.log(registerResponse);
		const parsedResponse = await registerResponse.json()
		console.log(parsedResponse);
		// change the state
	}

	handleLogin = async (formData) => {
		const loginResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/users/login', {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json"
			},
			credentials: "include"
		})
		console.log(loginResponse);
		const parsedResponse = await loginResponse.json()
		console.log(parsedResponse);
		if(parsedResponse.status === 200){
			this.setState({
				loggedIn: true,
				user: parsedResponse.user
			})
		}
	}

	render(){
		console.log(this.props);
	  return (
	    <div className="App">
	      { this.state.loggedIn ?
	      	<Conversation>	
	      	</Conversation>
	      	:
	      	<AuthGateway handleLogin={this.handleLogin} handleRegister={this.handleRegister}>
	      	</AuthGateway>
	      }
	    </div>
	  );
	}
}

export default App;
