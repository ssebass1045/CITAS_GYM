import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    turns: [],
};

const turnsSlice = createSlice({
    name: 'userTurns',
    initialState,
    reducers: {
        setTurns: (state, action) => {
            console.log(state.turns);
            console.log(action.payload);
            state.turns = [...action.payload];
        },
        addTurn: (state, action) => {
            state.turns.push(action.payload);
        },
        clearTurns: (state) => {
            state.turns = [];
        },
    },
});

export const { setTurns, clearTurns } = turnsSlice.actions;
export default turnsSlice.reducer;
