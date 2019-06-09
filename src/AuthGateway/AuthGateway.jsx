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

	componentDidMount(){
		document.body.style.background = "linear-gradient(rgba(0, 191, 255, .8), rgba(0, 0, 100, .8))";
	}

	componentWillUnmount(){
		document.body.style.background = null;
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