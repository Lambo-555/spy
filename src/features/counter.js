import { createSlice } from "@reduxjs/toolkit";

export const gameManager = createSlice({
  name: "gameManager",
  initialState: {
    value: 0,
    isGameOver: false,
    isSpyWin: false,
    currentPlayer: null,
    currentMap: null,
    spyCount: 0, //
    timer: 0, //
    players: [], //
    locations: {
      hospital: ["doctor", "client", "client", "cleaner", "cleaner", "nurce"],
      carWash: ["cleaner", "client", "client", "boss", "boss", "manager"],
      space: ["spaceman", "huston", "huston", "manager", "manager", "alien"],
    },
  },
  reducers: {
    playerAdd: (state, action) => {
      state.players.push({ name: action.payload, role: null });
      state.spyCount = state.players.length % 6;
      state.timer = state.players.length;
    },
    playerKick: (state, action) => {
      state.players = state.players.filter(
        (player) => player.name !== action.payload
      );
      state.spyCount = state.players.length % 6;
      state.timer = state.players.length;
    },
    setMap: (state, action) => {
      state.currentMap = action.payload;
    },
    setTimer: (state, action) => {
      state.timer = action.payload;
    },

    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  playerAdd,
  playerKick,
  setMap,
  setTimer,
  decrement,
  incrementByAmount,
} = gameManager.actions;

export default gameManager.reducer;
