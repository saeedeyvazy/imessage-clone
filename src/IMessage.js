import React from 'react'
import Sidebar from './Sidebar'
import './IMessage.css'
import Chat from './Chat'
function IMessage() {
	return (
		<div className='imessage'>
			<Sidebar />
			<Chat />
		</div>
	)
}

export default IMessage
