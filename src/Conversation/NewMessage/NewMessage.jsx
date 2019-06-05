import React, {useState} from 'react'
import openSocket from 'socket.io-client'
export const socket = openSocket('http://localhost:9021')

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