import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Message.css'

const Message = forwardRef(({ id, msg, avatar, time, senderEmail }, ref) => {
	const { email } = useSelector(selectUser)
	return (
		<div
			ref={ref}
			className={`message ${email === senderEmail && 'message__sender'}`}
		>
			<Avatar className='message__photo' src={avatar} />
			<p>{msg}</p>
			<small>{new Date(time?.toDate()).toLocaleString()}</small>
		</div>
	)
})

export default Message
