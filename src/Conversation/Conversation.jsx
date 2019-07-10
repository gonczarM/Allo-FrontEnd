import React, {Component} from 'react'
import NewMessage from './NewMessage/NewMessage'
import openSocket from 'socket.io-client'
import './Conversation.css'
export const socket = openSocket(process.env.REACT_APP_BACKEND_URL);

class Conversation extends Component{
	constructor(){
		super()
		this.state = {
			messages: [],
			convoId: ''
		}
	}

	// this checks convo id and will have it changed
	static getDerivedStateFromProps(nextProps, prevState){
		if(nextProps.convoId!==prevState.convoId){
	     	return { convoId: nextProps.convoId};
	  	}
	  	else return null;
	}

	// if the convo is changed updated the messages
	componentDidUpdate(prevProps){
		if(prevProps.convoId!==this.props.convoId){
			let convoId = this.state.convoId
	    this.setState({convoId});
	    this.getMessages();
  		}
	}

	// socket.io, updates messages for both users in real time
	componentDidMount(){
		this.getMessages()
		socket.on('messages', (msg) => {
			console.log('messages reiceved from server');
			this.getMessages()
		})
	}

	// pulls all messages from conversation
	getMessages = async () => {
		const messagesResponse = await fetch(process.env.REACT_APP_BACKEND_URL + `/convos/convo/${this.state.convoId}`, {
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
		this.scrollToBottom()
	}

	// creates a message route
	createMessage = async (formData) => {
		console.log(formData);
		const messageResponse = await 
		fetch(process.env.REACT_APP_BACKEND_URL + `/messages/${this.state.convoId}`, {
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

	sendSocket(){
		socket.emit('messages', this.state.messages);
		console.log('sending messages from client');
	}

	scrollToBottom(){
		const div = document.body;
		console.log(div);
		console.log(div.scrollHeight);
		console.log(div.scrollTop);
		div.scrollTop = div.scrollHeight;
		console.log(div.scrollHeight);
		console.log(div.scrollTop);
	}

	render(){
		console.log(this.props.convoId);
		console.log(this.state.messages, 'state');
		const chat = this.state.messages.map((message) => 
			<li key={message._id}>
				<span className='username'>{message.user[0].username}</span>
				<p className='text' >{message.text}</p>
				<p className='translated' >{message.translatedText}</p>
			</li>
		)
		return(
			<div className='chat'>
				<ul>
					{chat}
				</ul>
				<NewMessage createMessage={this.createMessage}/>
			</div>
		)
	}
}

export default Conversation