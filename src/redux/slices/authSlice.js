import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    password: '',
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginAction: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.isLoggedIn = true;
        },
        logoutAction: (state) => {
            state.username = '';
            state.password = '';
            state.isLoggedIn = false;
        },
    },
});

export const { loginAction, logoutAction } = authSlice.actions;
export default authSlice.reducer;
