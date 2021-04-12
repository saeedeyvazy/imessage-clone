import React, { useEffect, useState } from 'react'
import './Chat.css'
import MicNoneIcon from '@material-ui/icons/MicNone'
import Message from './Message'
import { selectChatName, selectChatId } from './features/chatSlice'
import { useSelector } from 'react-redux'
import db from './firebase'
import { selectUser } from './features/userSlice'
import firebase from 'firebase'

function Chat() {
	const [msg, setMsg] = useState('')
	const [messages, setMessages] = useState([])
	const chatName = useSelector(selectChatName)
	const chatId = useSelector(selectChatId)
	const user = useSelector(selectUser)

	const sendMsg = (e) => {
		console.log(user.name)
		e.preventDefault()
		db.collection('chats').doc(chatId).collection('messages').add({
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			message: msg,
			uid: user.uid,
			name: user.name,
			photo: user.photo,
			email: user.email,
		})
		setMsg('')
	}

	useEffect(() => {
		if (chatId)
			db.collection('chats')
				.doc(chatId)
				.collection('messages')
				.orderBy('timestamp', 'desc')
				.onSnapshot((snapshot) =>
					setMessages(
						snapshot.docs.map((item) => ({
							id: item.id,
							data: item.data(),
						}))
					)
				)
	}, [chatId])

	return (
		<div className='chats'>
			<div className='chat__header'>
				<h4>
					To: <span>{chatName}</span>
				</h4>
				<strong>Details</strong>
			</div>
			<div className='chat__messages'>
				{messages.map(({ id, data: { message } }) => (
					<Message msg={message} key={id} />
				))}
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
