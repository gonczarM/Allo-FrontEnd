import React, {useState} from 'react'

function Login({toggleLogin, handleLogin}){
	const [username, setUsername] = useState(null)
	const [password, setPassword] = useState(null)

	return(
		<div>
			New User? <button onClick={toggleLogin}>
			Register Here
			</button>
			<form onSubmit={(event) => {
				event.preventDefault()
				handleLogin({username, password})
			}}>
				Username<input type='text' onChange={e => setUsername(e.target.value)}/><br/>
				Password<input type='password' onChange={e => setPassword(e.target.value)}/><br/>
				<button value='Login'>Login</button>
			</form>
		</div>
	)
}

export default Login