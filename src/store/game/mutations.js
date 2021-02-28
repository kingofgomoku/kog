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
  gameClearGameBoard(state, size) {
    state.gameboard = [];
    for( let i = 0; i < size; i++) {
      let row = [];
      for( let j = 0; j < size; j++) {
        row.push({})
      }
      state.gameboard.push(row)
    }
    state.boardSize.rows = size
    state.boardSize.columns = size
    state.boardSize.size = size
    state.movelog = []
  },
  gameDeclareWinner(state, player) {
  },
  gameUpdateGameLog(state, log) {
    state.movelog.push(log)
  },
  gameUpdateLoading(state, loading) {
    state.loading = loading
  }
};

export default mutations;
