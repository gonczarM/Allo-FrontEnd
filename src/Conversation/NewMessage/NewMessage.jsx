import React, {useState} from 'react'

const NewMessage = ({createMessage}) => {
	const [text, setText] = useState("")
	return <form className='message' onSubmit={(e) => {
		e.preventDefault()
		createMessage({text})
	}}>
		<input type='textarea' placeholder='type a message' onChange={e => setText(e.target.value)}/>
	</form>
}

export default NewMessage