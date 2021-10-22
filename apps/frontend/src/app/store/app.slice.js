import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

export const APP_FEATURE_KEY = 'app'
/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchApp())
 * }, [dispatch]);
 * ```
 */
export const fetchApp = createAsyncThunk(
	'app/fetchStatus',
	async (_, thunkAPI) => {
		/**
		 * Replace this with your custom fetch call.
		 * For example, `return myApi.getApps()`;
		 * Right now we just return an empty array.
		 */
		return Promise.resolve([])
	}
)
export const initialAppState = {
	stage: 'home',
	userName: ''
}
export const appSlice = createSlice({
	name: APP_FEATURE_KEY,
	initialState: initialAppState,
	reducers: {
		startTask: (state, action) => {
			state.stage = 'task'
			state.userName = action.payload
		}
		// ...
	},
	extraReducers: (builder) => {
		builder.addCase(fetchApp.pending, (state) => {
			state.loadingStatus = 'loading'
		})
	}
})
/*
 * Export reducer for store configuration.
 */
export const appReducer = appSlice.reducer
/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(appActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const appActions = appSlice.actions
/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllApp);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */

const getAppState = (rootState) => rootState[APP_FEATURE_KEY]
const getStage = createSelector(getAppState, (state) => state.stage)

export const appSelectors = {
	getStage
}
// export const selectAppEntities = createSelector(getAppState, selectEntities)
