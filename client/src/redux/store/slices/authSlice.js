import { createSlice } from '@reduxjs/toolkit';

const emptyUserInfo = {
	token: null,
	id: null,
	role: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState: localStorage.getItem('userInfo')
		? { token: JSON.parse(localStorage.getItem('userInfo')) }
		: emptyUserInfo,
	reducers: {
		setCredentials: (state, { payload }) => {
			const accessToken = payload.token;
			localStorage.setItem('userInfo', JSON.stringify(accessToken));
			state.token = accessToken;
		},
		logOut: (state) => {
			state = emptyUserInfo;
			localStorage.removeItem('userInfo');
			return state;
		},
	},
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;
