import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

function SidebarChat({ id, channelName, message }) {
	return (
		<div className='chat'>
			<Avatar />
			<div className='chat__info'>
				<h3>{channelName}</h3>
				<p>{message}</p>
				<small>timestamp</small>
			</div>
		</div>
	)
}

export default SidebarChat
