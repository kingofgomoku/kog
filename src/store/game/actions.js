/* eslint-disable */

const actions = {
  gameInitializeGameBoard(context, size) {
    context.commit('gameClearGameBoard', size);
    context.commit('gameUpdateGameLog', {
      action: 'Game Start',
      color: 'white'
    });
    context.dispatch('messagingInitializeChatRoom')
  },
  gameUpdateGameBoard(context, move) {
    context.commit('gameUpdateGameBoard', move);
  }
};

export default actions;
