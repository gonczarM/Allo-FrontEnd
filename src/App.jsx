import React from 'react';
import AuthGateway from './AuthGateway/AuthGateway'
import Conversation from './Conversation/Conversation'
import ConvosList from './ConvosList/ConvosList'
import './App.css'

class App extends React.Component {
	constructor(){
		super()
		this.state = {
			convoId: '',
			showConvo: false,
			loggedIn: false
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
				loggedIn: true
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
				loggedIn: true
			})
		}
	}

	convoToShow(id){
		this.setState({
			convoId: id,
			showConvo: true
		})
	}

	userSearch(){
		this.setState({
			showConvo: false
		})
	}

	render(){
		let conversationList = <ConvosList convoToShow={this.convoToShow.bind(this)} userSearch={this.userSearch.bind(this)}/>
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
