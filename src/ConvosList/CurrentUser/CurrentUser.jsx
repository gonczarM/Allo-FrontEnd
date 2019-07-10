import React from 'react';
import './CurrentUser.css';

class CurrentUser extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			user: {},
			language: ''
		}
	}

	componentDidMount(){
		this.getUserInfo()
	}

	// current users info route
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

	updateSettings = async (formData, event) => {
		event.preventDefault()
		this.props.hideSettings()
		console.log(formData);
		const userResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/users/current',{
			method: "PUT",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json"
			},
			credentials: "include"
		})
		console.log(userResponse);
		const parsedResponse = await userResponse.json()
		console.log(parsedResponse);

	}

	updateLanguage = (event) => {
		this.setState({
			[event.currentTarget.name]: event.currentTarget.value	
		})
	}

	render(){
		console.log(this.state);
		return (
			<div className="userSettings">
				<h1>Settings</h1>
				<h3>Username</h3>
				<h2>{this.state.user.username}</h2>
				<h3>Language</h3>
				<form onSubmit={
				this.updateSettings.bind(null, this.state.language)
				}>
					<select className='select' name='language' onChange={this.updateLanguage}>
						<option value={this.state.user.language}>{this.state.user.language}</option>
						<option value="ar">Arabic</option>
						<option value="cs">Czech</option>
						<option value="da">Danish</option>
						<option value="nl">Dutch</option>
						<option value="en">English</option>
						<option value="fi">Finish</option>
						<option value="fr">French</option>
						<option value="de">German</option>
						<option value="hi">Hindi</option>
						<option value="hu">Hungarian</option>
						<option value="it">Italian</option>
						<option value="ja">Japanese</option>
						<option value="ko">Korean</option>
						<option value="nb">Norwegian Bokmal</option>
						<option value="pl">Polish</option>
						<option value="pt">Portuguese</option>
						<option value="ru">Russian</option>
						<option value="zh">Simplified Chinese</option>
						<option value="es">Spanish</option>
						<option value="sv">Swedish</option>
						<option value="zh-TW">Traditional Chinese</option>
						<option value="tr">Turkish</option>
					</select><br/>
					<button>Update</button>
				</form>
			</div>
		)
	}
}

export default CurrentUser;