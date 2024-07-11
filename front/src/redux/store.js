import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import turnsReducer from './turnsSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        userTurns: turnsReducer,
    }
});

export default store;
