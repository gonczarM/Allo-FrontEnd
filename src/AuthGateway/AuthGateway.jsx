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
					<Login handleLogin={this.props.handleLogin} toggleLogin={this.toggleLogin}>
					</Login>
					:
					<Register handleRegister={this.props.handleRegister} toggleLogin={this.toggleLogin}>
					</Register>
				}
			</div>
		)
	}
}

export default AuthGateway