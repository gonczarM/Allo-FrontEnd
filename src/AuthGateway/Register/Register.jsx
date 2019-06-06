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
			Have an Account? <button onClick={toggleLogin}>
			Login Here
			</button>
			<form onSubmit={(event) => {
				event.preventDefault()
				handleRegister({username, password, language, location, about, first_name, last_name})
			}}>
				First Name<input type='text' onChange={e => setFirstName(e.target.value)}/><br/>
				Last Name<input type='text' onChange={e => setLastName(e.target.value)}/><br/>
				Language<input type='text' onChange={e => setLanguage(e.target.value)}/><br/>
				Location<input type='text' onChange={e => setLocation(e.target.value)}/><br/>
				About<input type='text' onChange={e => setAbout(e.target.value)}/><br/>
				Username<input type='text' onChange={e => setUsername(e.target.value)}/><br/>
				Password<input type='password' onChange={e => setPassword(e.target.value)}/><br/>
				<button value='Register'>Register</button>
			</form>
		</div>
	)
}

export default Register