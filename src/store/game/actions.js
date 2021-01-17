/* eslint-disable */

const actions = {
  gameInitializeGameBoard(context, size) {
    context.commit('gameClearGameBoard', size);
  },
  gameUpdateGameBoard(context, move) {
    context.commit('gameUpdateGameBoard', move);
  }
};

export default actions;
