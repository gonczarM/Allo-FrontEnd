import React from 'react';

class ConvosList extends React.Component {
	constructor(){
		super()
		this.state = {
			conversations: []
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

	render(){
		console.log(this.state.conversations);
		const convos = this.state.conversations.map((convo) => {
			return <button key={convo._id} onClick={this.props.convoToShow.bind(null, convo._id)}> {convo.users[0].username}</button>
		})
		return(
			<div>
				{convos}
			</div>
		)
	}
}

export default ConvosList;