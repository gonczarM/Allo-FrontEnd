import React, {Component} from 'react'
import NewMessage from './NewMessage/NewMessage'
import openSocket from 'socket.io-client'
export const socket = openSocket(process.env.REACT_APP_BACKEND_URL)

class Conversation extends Component{
	constructor(){
		super()
		this.state = {
			messages: []
		}
	}

	componentDidMount(){
		this.getMessages()
		socket.on('messages', (msg) => {
			console.log('messages reiceved from server');
			this.setState({
				messages: msg
			})
		})
	}

	getMessages = async () => {
		const messagesResponse = await fetch(process.env.REACT_APP_BACKEND_URL + `/convos/convo/${this.props.convoId}`, {
			credentials: 'include'
		})
		console.log(messagesResponse);
		const parsedResponse = await messagesResponse.json()
		console.log(parsedResponse);
		if(parsedResponse.status === 200){
			this.setState({
				messages: parsedResponse.convo.messages
			})
		}
	}

	sendSocket(){
		socket.emit('messages', this.state.messages);
		console.log('sending messages from client');
	}

	createMessage = async (formData) => {
		console.log(formData);
		const messageResponse = await fetch(process.env.REACT_APP_BACKEND_URL + `/messages/${this.props.convoId}`, {
			method: "POST",
			credentials: "include",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": 'application/json'
			}
		})
		console.log(messageResponse);
		const parsedResponse = await messageResponse.json()
		console.log(parsedResponse);
		if(parsedResponse.status === 200){
			this.setState({
				messages: [...this.state.messages, parsedResponse.message]
			})
		}
		this.sendSocket()
	}

	render(){
		console.log(this.props.convoId);
		console.log(this.state.messages, 'state');
		const chat = this.state.messages.map((message) => {
			return <p key={message._id}>{message.text} {message.translatedText}</p>
		})
		return(
			<div>
				{chat}
				<NewMessage createMessage={this.createMessage}></NewMessage>
			</div>
		)
	}
}

export default Conversation