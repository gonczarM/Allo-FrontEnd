import React from 'react';
import Search from '../../Images/search.png'

class SearchUsers extends React.Component {
	constructor(){
		super()
		this.state = {
			username: '',
			userId: '',
			foundUser: ''
		}
	}

	search = async () => {
		const userResponse = await fetch(process.env.REACT_APP_BACKEND_URL + `/users/search/${this.state.username}`, {
			'credentials': 'include'
		})
		console.log(userResponse);
		const parsedResponse = await userResponse.json()
		console.log(parsedResponse);
		if(parsedResponse.status === 200){
			this.setState({
				userId: parsedResponse.user._id,
				foundUser: parsedResponse.user.username
			})
		}
	}

	createConvo = async() => {
		const convoResponse = await fetch(process.env.REACT_APP_BACKEND_URL + `/convos/${this.state.username}`, {
			method: "POST",
			credentials: "include"
		})
		console.log(convoResponse);
		const parsedResponse = await convoResponse.json()
		if(parsedResponse.status === 200){
			this.props.hideSearchUser()
		}
	}

	updateSearch = (event) => {
		this.setState({
			[event.currentTarget.name]: event.currentTarget.value	
		})
	}

	render(){
		console.log(this.state);
		return (
			<div className='searchUsers'>
				<form onSubmit={(event) => {
				event.preventDefault()
				this.search()
				}}>
					<input type='text' name='username' placeholder='Search by username' onChange={this.updateSearch}/>
					<button className='search' ><img src={Search} alt='search users'/></button>
				</form>
				<button className='user' onClick={this.createConvo}>{this.state.foundUser}</button>
			</div>
		)
	}
}

export default SearchUsers;