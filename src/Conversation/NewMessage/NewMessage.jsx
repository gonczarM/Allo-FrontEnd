import React, {useState} from 'react'

const NewMessage = ({createMessage}) => {
	const [text, setText] = useState("")
	console.log(text);
	return <form id='message' className='message' onSubmit={(e) => {
		e.preventDefault()
		createMessage({text})
		setText("")
		document.getElementById('message').reset()
	}}>
		<input type='textarea' placeholder='type a message' onChange={e => setText(e.target.value)}/>
	</form>
}

export default NewMessage