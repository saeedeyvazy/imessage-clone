import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	chatId: null,
	chatName: null,
}

export const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		setChat: (state, action) => {
			const { chatId, chatName } = action.payload
			state.chatName = chatName
			state.chatId = chatId
		},
	},
})

export const { setChat } = chatSlice.actions

export const selectChatId = (state) => state.chat.chatId
export const selectChatName = (state) => state.chat.chatName

export default chatSlice.reducer
