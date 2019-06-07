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
				Username<input type='text' onChange={e => setUsername(e.target.value)}/><br/>
				Choose a Prefered Language<select onChange={e => setLanguage(e.target.value)}>
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
				Password<input type='password' onChange={e => setPassword(e.target.value)}/><br/>
				<button value='Register'>Register</button>
			</form>
		</div>
	)
}

export default Register