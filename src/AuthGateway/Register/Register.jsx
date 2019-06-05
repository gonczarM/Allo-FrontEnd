import React, {useState} from 'react'

function Register({toggleLogin, handleRegister}){
	const [username, setUsername] = useState(null)
	const [password, setPassword] = useState(null)
	const [language, setLanguage] = useState(null)
	const [location, setLocation] = useState(null)
	const [about, setAbout] = useState(null)
	const [first_name, setFirstName] = useState(null)
	const [last_name, setLastName] = useState(null)

	return(
		<div>
			<button onClick={toggleLogin}>
			Have an Account? Login Here
			</button>
			<form onSubmit={(event) => {
				event.preventDefault()
				handleRegister({username, password, language, location, about, first_name, last_name})
			}}>
				<input type='text' onChange={e => setUsername(e.target.value)}/>
				<input type='password' onChange={e => setPassword(e.target.value)}/>
				<input type='text' onChange={e => setLanguage(e.target.value)}/>
				<input type='text' onChange={e => setLocation(e.target.value)}/>
				<input type='text' onChange={e => setAbout(e.target.value)}/>
				<input type='text' onChange={e => setFirstName(e.target.value)}/>
				<input type='text' onChange={e => setLastName(e.target.value)}/>
				<button value='Register'>Register</button>
			</form>
		</div>
	)
}

export default Register