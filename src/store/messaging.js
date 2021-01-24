/* eslint-disable */
import unique from '@/plugins/unique'

const state = {
  chatroom: []
};
const getters = {
  messagingReturnChatRoom(state) {
    return state.chatroom;
  }
};
const mutations = {
  messagingLogChat(state, chat) {
    state.chatroom.push({
      _id: unique.unique(),
      message: chat.message,
      player: chat.player
    })
  },
  messagingClearLogChat(state) {
    state.chatroom = []
  }
};
const actions = {
  messagingInitializeChatRoom(context) {
    context.commit('messagingClearLogChat');
  },
  messagingSendMessage(context, chat) {
    context.commit('messagingLogChat', chat)
  } 
};

export default {
  state,
  getters,
  mutations,
  actions
};
