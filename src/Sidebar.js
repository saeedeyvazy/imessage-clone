import { Avatar, IconButton } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import CommentIcon from '@material-ui/icons/Comment'
import React from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat'

function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebar__header'>
				<Avatar />
				<div className='sidebar__input'>
					<Search />
					<input className='search__input' type='text' placeholder='Search' />
				</div>
				<IconButton>
					<CommentIcon />
				</IconButton>
			</div>
			<div className='sidebar__chat'>
				<SidebarChat message='last msg from...' channelName='Test' />
				<SidebarChat message='last msg from...' channelName='Test' />
				<SidebarChat message='last msg from...' channelName='Test' />
				<SidebarChat message='last msg from...' channelName='Test' />
				<SidebarChat message='last msg from...' channelName='Test' />
				<SidebarChat message='last msg from...' channelName='Test' />
				<SidebarChat message='last msg from...' channelName='Test' />
				<SidebarChat message='last msg from...' channelName='Test' />
				<SidebarChat message='last msg from...' channelName='Test' />
				<SidebarChat message='last msg from...' channelName='Test' />
				<SidebarChat message='last msg from...' channelName='Test' />
				<SidebarChat message='last msg from...' channelName='Test' />
				<SidebarChat message='last msg from...' channelName='Test' />
			</div>
		</div>
	)
}
export default Sidebar
