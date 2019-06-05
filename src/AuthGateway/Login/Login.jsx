import React, {useState} from 'react'

function Login({toggleLogin, handleLogin}){
	const [username, setUsername] = useState(null)
	const [password, setPassword] = useState(null)

	return(
		<div>
			<button onClick={toggleLogin}>
			New User? Register Here
			</button>
			<form onSubmit={(event) => {
				event.preventDefault()
				handleLogin({username, password})
			}}>
				<input type='text' onChange={e => setUsername(e.target.value)}/>
				<input type='password' onChange={e => setPassword(e.target.value)}/>
				<button value='Login'>Login</button>
			</form>
		</div>
	)
}

export default Login