/* eslint-disable */

const actions = {
  gameInitializeGameBoard(context) {

  },
  gameUpdateGameBoard(context, move) {
    context.commit('gameUpdateGameBoard', move)
  }
};

export default actions;
