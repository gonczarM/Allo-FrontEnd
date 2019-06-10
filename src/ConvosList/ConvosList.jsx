import React from 'react';
import SearchUsers from './SearchUsers/SearchUsers'
import './ConvosList.css'
import Logo from '../Images/smallLogo.png'
import Setting from '../Images/setting.png'
import StartConvo from '../Images/startConvo.png'
import Search from '../Images/search.png'

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
		const convos = this.state.conversations.map((convo) => 
			<li key={convo._id}>
				<button onClick={this.props.convoToShow.bind(null, convo._id)}>{convo.users[0].username} {convo.users[1].username}</button><br/>
			</li>
		)
		return(
			<div className='convosList'>
				<div className='controls'>
					<button className='settings'><img src={Setting} alt='settings'/></button>
						<img className='logo' src={Logo} alt='logo'/>
					<button className='create' onClick={this.createConvo}><img src={StartConvo} alt="StartConvo"/></button><br/>
				</div>
				<div>
					<h2>Allo! {this.props.user.username}</h2>
				</div>
				{this.state.showCreateConvo ?
					<SearchUsers/>
					:
					null
				}
				<div className='list'>
					<form className='searchConvo'>
						<input type='text' placeholder='Search Conversations'/>
						<button className='search' ><img src={Search} alt='search users'/></button>
					</form>
					<ul className='convos'>
						{convos}
					</ul>
				</div>
			</div>
		)
	}
}

export default ConvosList;