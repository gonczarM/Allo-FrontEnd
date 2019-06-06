import React from 'react';

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
			console.log('we made it');
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
			<div>
				<form onSubmit={(event) => {
				event.preventDefault()
				this.search()
				}}>
					<p>Search for user by username</p>
					<input type='text' name='username' onChange={this.updateSearch}/><br/>
					<button>Search</button>
				</form>
				<button onClick={this.createConvo}>{this.state.foundUser}</button>
			</div>
		)
	}
}

export default SearchUsers;