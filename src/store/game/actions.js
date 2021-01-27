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
    context.dispatch('gameCheckGameWinner');
  },
  async gameCheckGameWinner(context) {
    context.commit('gameUpdateLoading', true)
    let formattedString = context.state.gameboard.map(rows => {
      return rows.map(col => {
        if ( 
          Object.keys(col).length === 0 && 
          col.constructor === Object 
        ) {
          return 'x'
        } else {
          return col.color.slice(0,1)
        }
      }).join('')
    })
    let transposed = context.state.gameboard[0].map((col,i) => context.state.gameboard.map(row => row[i]))
    let transposedFormattedString = transposed.map(rows => {
      return rows.map(col => {
        if ( 
          Object.keys(col).length === 0 && 
          col.constructor === Object 
        ) {
          return 'x'
        } else {
          return col.color.slice(0,1)
        }
      }).join('')
    })
    context.dispatch('gameCheckHorVerLineWinner', formattedString);
    context.dispatch('gameCheckHorVerLineWinner', transposedFormattedString);
    context.dispatch('gameCheckDiagLineWinner', {
      arrayString: formattedString,
      color: 'w'
    });
    context.dispatch('gameCheckDiagLineWinner', {
      arrayString: formattedString,
      color: 'b'
    });
    context.commit('gameUpdateLoading', false)
  },
  gameCheckHorVerLineWinner(context, arrayString) {
    let superString = arrayString.join('x');
    if(/(b{5,5})/.test(superString)) {
      console.log('black Wins')
      // use context to update
    }
    if (/(w{5,5})/.test(superString)) {
      console.log('white Wins')
      // use context to update
    }
  },
  gameCheckDiagLineWinner(context, {arrayString, color}) {
    // diagonal from left to right
    for (let i = 0; i < arrayString.length - 4 ; i++) {
      for(let j = 0; j < arrayString[i].length - 4 ; j++) {
        if(
          arrayString[i].charAt(j) === color &&
          arrayString[i+1].charAt(j+1) === color &&
          arrayString[i+2].charAt(j+2) === color &&
          arrayString[i+3].charAt(j+3) === color &&
          arrayString[i+4].charAt(j+4) === color 
        ) {
          //declare winner
          console.log(color,' wins')
        }
      }
    }

    // diagonal from right to left
    for (let i = 0; i < arrayString.length - 4; i++) {
      for(let j = 0; j < arrayString[i].length ; j++) {
        if(
          j >= 4 &&
          arrayString[i].charAt(j) === color &&
          arrayString[i+1].charAt(j-1) === color &&
          arrayString[i+2].charAt(j-2) === color &&
          arrayString[i+3].charAt(j-3) === color &&
          arrayString[i+4].charAt(j-4) === color 
          ) {
          //declare winner
          console.log(color,' wins')
        }
      }
    }
  }
};

export default actions;
