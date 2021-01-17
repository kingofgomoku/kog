import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let chessInit = {}
for (let row = 1; row <= 15; row++) {
  let columns = {}
  for (let column = 1; column <= 15; column++) {
    columns[column] = 'none'
  }
  chessInit[row] = columns
}

export default new Vuex.Store({
  state: {
    chessBoard: chessInit
  },
  mutations: {
    RESET_CHESS (state) {
      state.chessBoard = chessInit
    },
    SET_CHESS (state, { row, column, type }) {
      state.chessBoard[row][column] = type
      console.log(state.chessBoard)
      console.log(state.chessBoard[row][column])
    }
  }
})
