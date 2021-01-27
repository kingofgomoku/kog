const state = {
  gameboard: null,
  boardSize: {
    rows: 15,
    columns: 15,
    size: 15
  },
  turn: "white",
  winner: null,
  players: [{ profile: {} }, { profile: {} }],
  movelog: [],
  loading: false
};

export default state;
