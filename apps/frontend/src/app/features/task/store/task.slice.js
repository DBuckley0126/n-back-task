/* eslint-disable no-restricted-syntax */
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { getRandomisedLetterArray, asyncTimeout } from '../utils'
import { appActions } from '../../../store/app.slice'

export const TASK_FEATURE_KEY = 'task'

const initialAppState = {
	currentLetterObject: null,
	letterObjectToCheck: null,
	interactionStatus: null,
	correctInteractions: 0,
	incorrectInteractions: 0
}
export const taskSlice = createSlice({
	name: TASK_FEATURE_KEY,
	initialState: initialAppState,
	reducers: {
		setCurrentLetterObject: (state, action) => {
			state.currentLetterObject = action.payload
		},
		setLetterObjectToCheck: (state, action) => {
			state.letterObjectToCheck = action.payload
		},
		plusCorrectInteractions: (state) => {
			state.correctInteractions += 1
		},
		plusIncorrectInteractions: (state) => {
			state.incorrectInteractions += 1
		},
		setInteractionStatus: (state, action) => {
			state.interactionStatus = action.payload
		}
		// ...
	}
})

export const startTask = createAsyncThunk(
	'task/startTask',
	async (_, thunkAPI) => {
		const randomisedLetterArray = getRandomisedLetterArray()

		for await (const letterObject of randomisedLetterArray) {
			thunkAPI.dispatch(taskSlice.actions.setInteractionStatus(null))
			await asyncTimeout(2000)

			thunkAPI.dispatch(
				taskSlice.actions.setCurrentLetterObject(letterObject)
			)
			if (letterObject.index > 1) {
				thunkAPI.dispatch(
					taskSlice.actions.setLetterObjectToCheck(
						randomisedLetterArray[letterObject.index - 2]
					)
				)
			}
		}

		return Promise.resolve([])
	}
)

export const interactionCheck = createAsyncThunk(
	'task/startTask',
	async (payload, thunkAPI) => {
		const state = thunkAPI.getState()

		if (state.task.letterObjectToCheck.letter === payload) {
			thunkAPI.dispatch(taskSlice.actions.plusCorrectInteractions())
			thunkAPI.dispatch(taskSlice.actions.setInteractionStatus('success'))
		} else {
			thunkAPI.dispatch(taskSlice.actions.plusIncorrectInteractions())
			thunkAPI.dispatch(taskSlice.actions.setInteractionStatus('error'))
			if (state.task.errors >= 2) {
				thunkAPI.dispatch(appActions.setStage('scoreboard'))
			}
		}

		return Promise.resolve([])
	}
)

export const taskReducer = taskSlice.reducer

export const taskActions = { ...taskSlice.actions, startTask, interactionCheck }

const getTaskState = (rootState) => rootState[TASK_FEATURE_KEY]

const getCurrentLetterObject = createSelector(
	getTaskState,
	(state) => state.currentLetterObject
)

const getInteractionStatus = createSelector(
	getTaskState,
	(state) => state.interactionStatus
)
export const taskSelectors = {
	getCurrentLetterObject,
	getInteractionStatus
}
