import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
	user: {
		id: '',
		email: ''
	},
	isFetching: false
}

const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		setIsAuthenticated(state, action) {
			state.isAuthenticated = action.payload
		},
		setUser(state, action) {
			state.user = action.payload
		},
		setIsFetching(state, action) {
			state.isFetching = action.payload
		},
	}
})

const { actions, reducer } = authSlice

export const authActions = actions

export default reducer

