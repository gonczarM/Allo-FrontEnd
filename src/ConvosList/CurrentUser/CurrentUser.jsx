import React from 'react';

class CurrentUser extends React.Component {
	constructor(){
		super()
		this.state = {
			user: {}
		}
	}

	componentDidMount(){
		this.getUserInfo()
	}

	getUserInfo = async () => {
		const userResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/users/current',{
			credentials: 'include'
		})
		console.log(userResponse);
		const parsedResponse = await userResponse.json()
		console.log(parsedResponse);
		if(parsedResponse.status === 200){
			this.setState({
				user: parsedResponse.user
			})
		}
	}

	render(){
		console.log(this.state.user);
		return (
			<div>
				hello
			</div>
		)
	}
}

export default CurrentUser;