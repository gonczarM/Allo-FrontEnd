import React, {Component} from 'react'
import Register from './Register/Register'
import Login from './Login/Login'

class AuthGateway extends Component{
	constructor(){
		super()
		this.state = {
			login: true
		}
	}

	toggleLogin = (event) => {
		this.setState({
			login: !this.state.login
		})
	}

	render(){
		return(
			<div>
				{ this.state.login ?
					<Register handleRegister={this.props.handleRegister} toggleLogin={this.toggleLogin}>
					</Register>
					:
					<Login handleLogin={this.props.handleLogin} toggleLogin={this.toggleLogin}>
					</Login>
				}
			</div>
		)
	}
}

export default AuthGateway