import { createSlice } from '@reduxjs/toolkit';

const AuthLoginState = {
  isAuthenticated: false,
  accessToken: '',
  refreshToken: '',
  user: null,
};

export const authLoginSlice = createSlice({
  name: 'authLogin',
  initialState: AuthLoginState,
  reducers: {
    setLogin: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    setLogout: (state) => {
      state.isAuthenticated = false;
      state.accessToken = '';
      state.refreshToken = '';
      state.user = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setLogin, setLogout, setAccessToken, setRefreshToken, setUser } =
  authLoginSlice.actions;

export const loginSelector = (state) => state.authLogin.isAuthenticated;
export const logoutSelector = (state) => state.authLogin.isAuthenticated;
export const accessTokenSelector = (state) => state.authLogin.accessToken;
export const refreshTokenSelector = (state) => state.authLogin.refreshToken;
export const userSelector = (state) => state.authLogin.user;

export default authLoginSlice.reducer;
