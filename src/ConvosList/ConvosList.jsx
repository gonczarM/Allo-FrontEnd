import React from 'react';
import SearchUsers from './SearchUsers/SearchUsers'

class ConvosList extends React.Component {
	constructor(){
		super()
		this.state = {
			conversations: [],
			showCreateConvo: false
		}
	}

	componentDidMount(){
		this.getConvos()
	}

	getConvos = async () => {
		const convosResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/convos/current', {
			credentials: 'include'
		})
		console.log(convosResponse);
		const parsedResponse = await convosResponse.json()
		console.log(parsedResponse);
		if(parsedResponse.status === 200){
			this.setState({
				conversations: parsedResponse.convos
			})
		}
	}

	createConvo = () => {
		this.props.userSearch()
		this.setState({
			showCreateConvo: true
		})
	}

	render(){
		console.log(this.props);
		console.log(this.state);
		const convos = this.state.conversations.map((convo) => {
			return <button key={convo._id} onClick={this.props.convoToShow.bind(null, convo._id)}> {convo.users[0].username} {convo.users[1].username}</button>
		})
		return(
			<div>
				<button onClick={this.createConvo}>Create conversation</button><br/>
				{convos}
				{this.state.showCreateConvo ?
					<SearchUsers/>
					:
					null
				}
			</div>
		)
	}
}

export default ConvosList;