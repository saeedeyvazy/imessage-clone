import { Avatar, IconButton } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import CommentIcon from '@material-ui/icons/Comment'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import db, { auth } from './firebase'
import './Sidebar.css'
import SidebarChat from './SidebarChat'

function Sidebar() {
	const user = useSelector(selectUser)
	const [chats, setChats] = useState([])

	useEffect(() => {
		db.collection('chats').onSnapshot((snapshot) => {
			setChats(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			)
		})
	}, [])
	const addChat = () => {
		const chatName = prompt('Enter chat name')
		db.collection('chats').add({
			chatName,
		})
	}
	return (
		<div className='sidebar'>
			<div className='sidebar__header'>
				<Avatar
					onClick={() => auth.signOut()}
					src={user.photo}
					className='sidebar__avatar'
				/>
				<div className='sidebar__input'>
					<Search />
					<input className='search__input' type='text' placeholder='Search' />
				</div>
				<IconButton onClick={addChat}>
					<CommentIcon />
				</IconButton>
			</div>
			<div className='sidebar__chat'>
				{chats.map(({ id, data: { chatName } }) => (
					<SidebarChat
						key={id}
						id={id}
						message='empty'
						channelName={chatName}
					/>
				))}
			</div>
		</div>
	)
}
export default Sidebar
