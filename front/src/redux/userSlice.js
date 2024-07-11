import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: 0,
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        clearUser: (state) => {
            state.user =0;
            state.isAuthenticated = false;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     user: null,
// };

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setUser: (state, action) => {
//             state.user = action.payload;
//         },
//         clearUser: (state) => {
//             state.user = null;
//         },
//     },
// });

// export const { setUser, clearUser } = userSlice.actions;
// export default userSlice.reducer;
