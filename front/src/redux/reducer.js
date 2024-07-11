import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userTurns: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserTurns: (state, action) => {
      state.userTurns = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.userTurns = [];
    },
  },
});

export const { setUser, setUserTurns, clearUser } = userSlice.actions;
export default userSlice.reducer;

















// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     todos: [],
// };

// export const todoSlice = createSlice({
//     name: 'todos',
//     initialState,
//     reducers: {
//         addTodo: (state, action) => {
//             console.log(state);
//             console.log(action);
//         },
//         removeTodo: (state, action) => {},
//     },
// });

// export const { addTodo, removeTodo } = todoSlice.actions;