import React, {useState} from 'react'

const NewMessage = ({createMessage}) => {
	const [text, setText] = useState("")
	return <form onSubmit={(e) => {
		e.preventDefault()
		// socket.emit("chat message", val({text}))
		createMessage({text})
	}}>
		<input type='textarea' onChange={e => setText(e.target.value)}/>
		<button>Send</button>
	</form>
}

export default NewMessage