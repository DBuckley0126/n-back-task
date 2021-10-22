import { createSelector, createSlice } from '@reduxjs/toolkit'
import { startTask } from '../features/task/store/task.slice'

export const APP_FEATURE_KEY = 'app'

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
		},
		setStage: (state, action) => {
			state.stage = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(startTask.fulfilled, (state, action) => {
			state.stage = 'scoreboard'
		})
	}
})

export const appReducer = appSlice.reducer

export const appActions = appSlice.actions

const getAppState = (rootState) => rootState[APP_FEATURE_KEY]
const getStage = createSelector(getAppState, (state) => state.stage)

export const appSelectors = {
	getStage
}
// export const selectAppEntities = createSelector(getAppState, selectEntities)
