import React, { useState } from 'react'
import './Chat.css'
import MicNoneIcon from '@material-ui/icons/MicNone'

function Chat() {
	const [msg, setMsg] = useState('')

	const sendMsg = (e) => {
		setMsg('')
		e.preventDefault()
	}

	return (
		<div className='chats'>
			<div className='chat__header'>
				<h4>
					To: <span>Channel name</span>
				</h4>
				<strong>Details</strong>
			</div>
			<div className='chat__messages'>
				<h5>A Mesasge</h5>
				<h5>A Mesasge</h5>
				<h5>A Mesasge</h5>
				<h5>A Mesasge</h5>
				<h5>A Mesasge</h5>
			</div>
			<div className='chat__input'>
				<form>
					<input
						type='text'
						placeholder='iMessage'
						onChange={(e) => setMsg(e.target.value)}
						value={msg}
					/>
					<button onClick={sendMsg} />
					<MicNoneIcon className='chat__inputIcon' />
				</form>
			</div>
		</div>
	)
}

export default Chat
