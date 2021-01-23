const getters = {
  gameReturnGameBoard(state) {
    return state.gameboard;
  },
  gameReturnPlayerTurn(state) {
    return state.turn;
  },
  gameReturnWinner(state) {
    return state.winner;
  },
  gameReturnPlayers(state) {
    return state.players;
  },
  gameReturnMoveLog(state) {
    return state.movelog;
  },
  gameReturnBoardSize(state) {
    return state.boardSize;
  },
  gameReturnLatestMove(state) {
    if (state.movelog.length !== 0) {
      return state.movelog[state.movelog.length - 1];
    } else {
      return false;
    }
  }
};

export default getters;
