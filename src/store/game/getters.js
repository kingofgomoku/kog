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
  }
};

export default getters;
