// \frontend\src\infrastructure\redux\slices\chatSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
}

interface ChatState {
  messages: Message[];
}

const initialState: ChatState = {
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setMessages, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
