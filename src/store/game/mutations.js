/* eslint-disable */

const mutations = {
  gameUpdateGameBoard(state, move) {
    console.log('LoggedMove', move);
    if(move.color === 'black') {
      state.turn = 'white';
    } else {
      state.turn = 'black'
    }
    console.log('It is ', state.turn, ' to move now')
    state.movelog.push(move)
    
    state.gameboard[move.row][move.column] = move
    
    console.log(state.gameboard)
  },
  gameUpdatePlayerMove(state, player) {
  },
  gameClearGameBoard(state, player) {
  },
  gameDeclareWinner(state, player) {
  }
};

export default mutations;
