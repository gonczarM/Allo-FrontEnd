import React from 'react';
import AuthGateway from './AuthGateway/AuthGateway'
import Conversation from './Conversation/Conversation'
import ConvosList from './ConvosList/ConvosList'
import './App.css'
import CurrentUser from './CurrentUser/CurrentUser'

class App extends React.Component {
	constructor(){
		super()
		this.state = {
			convoId: '',
			showConvo: false,
			loggedIn: false,
			user: {},
			showUserInfo: false
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

	userSearch(){
		this.setState({
			showConvo: false
		})
	}

	showUser(){
		this.setState({
			showUserInfo: true
		})
	}

	render(){
		let conversationList = <ConvosList 
			convoToShow={this.convoToShow.bind(this)} 
			userSearch={this.userSearch.bind(this)} 
			user={this.state.user}
			showUser={this.showUser.bind(this)}
		/>
		let convo;
		let auth;
		let user;
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
		else if(this.state.showUserInfo){
			auth = ''
			convo = ''
			conversationList = ''
			user = <CurrentUser/>
		}
	  return (
	    <div className="App">
	    	{conversationList}
	    	{convo}
	    	{auth}
	    	{user}
	    </div>
	  );
	}
}

export default App;
