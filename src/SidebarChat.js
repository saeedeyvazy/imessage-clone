import { Avatar } from '@material-ui/core'
import React from 'react'
import { setChat } from './features/chatSlice'
import './SidebarChat.css'
import { useDispatch } from 'react-redux'
function SidebarChat({ id, channelName, message }) {
	const dispatch = useDispatch()
	return (
		<div
			className='chat'
			onClick={() =>
				dispatch(
					setChat({
						chatId: id,
						chatName: channelName,
					})
				)
			}
		>
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
