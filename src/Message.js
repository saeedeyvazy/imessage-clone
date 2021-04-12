import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'
function Message({ id, msg }) {
	return (
		<div className='message'>
			<Avatar />
			<p>{msg}</p>
			<small>timestamp</small>
		</div>
	)
}

export default Message
