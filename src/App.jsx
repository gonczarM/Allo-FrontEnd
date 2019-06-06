import React from 'react';
import AuthGateway from './AuthGateway/AuthGateway'
import Conversation from './Conversation/Conversation'
import ConvosList from './ConvosList/ConvosList'

class App extends React.Component {
	constructor(){
		super()
		this.state = {
			convoId: '',
			showConvo: false,
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
		if(parsedResponse.status === 200){
			this.setState({
				loggedIn: true,
				user: parsedResponse.user
			})
		}
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

	convoToShow(id){
		this.setState({
			convoId: id,
			showConvo: true
		})
	}

	render(){
		let conversationList = <ConvosList convoToShow={this.convoToShow.bind(this)}/>
		let convo;
		let auth;
		if(!this.state.loggedIn){
			convo = ''
			conversationList = ''
			auth = <AuthGateway
				handleLogin={this.handleLogin}
				handleRegister={this.handleRegister}
			/>
		}
		else if(this.state.showConvo){
			conversationList = ''
			auth = ''
			convo = <Conversation convoId={this.state.convoId}/>
		}
	  return (
	    <div className="App">
	    	{conversationList}
	    	{convo}
	    	{auth}
	    </div>
	  );
	}
}

export default App;
