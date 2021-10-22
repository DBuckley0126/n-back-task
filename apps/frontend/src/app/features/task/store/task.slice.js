/* eslint-disable no-restricted-syntax */
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import {
	getRandomisedLetterArray,
	asyncTimeout,
	processCorrectChancesWithinArray
} from '../utils'
import { appActions } from '../../../store/app.slice'
import config from '../../../config.json'

export const TASK_FEATURE_KEY = 'task'

const initialAppState = {
	currentLetterObject: null,
	letterObjectToCheck: null,
	interactionStatus: null,
	correctInteractions: 0,
	incorrectInteractions: 0,
	missedCorrectInteractions: 0
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
		},
		setMissedCorrectInteractions: (state, action) => {
			state.missedCorrectInteractions = action.payload
		}
	}
})

export const startTaskProcess = createAsyncThunk(
	'task/startTaskProcess',
	async (_, thunkAPI) => {
		const randomisedLetterArray = getRandomisedLetterArray()

		let currentLetterCount = 0

		await asyncTimeout(2000)
		for await (const letterObject of randomisedLetterArray) {
			thunkAPI.dispatch(taskSlice.actions.setInteractionStatus(null))

			if (
				thunkAPI.getState().task.incorrectInteractions <
				config.incorrectInteractionsAllowed
			) {
				currentLetterCount += 1
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
				await asyncTimeout(config.stimulusTime)
			}
		}

		const totalAmountOfCorrectChances = processCorrectChancesWithinArray(
			randomisedLetterArray.slice(0, currentLetterCount)
		)

		thunkAPI.dispatch(
			taskSlice.actions.setMissedCorrectInteractions(
				totalAmountOfCorrectChances -
					thunkAPI.getState().task.correctInteractions
			)
		)
		return Promise.resolve([])
	}
)

export const interactionCheck = createAsyncThunk(
	'task/interactionCheck',
	async (payload, thunkAPI) => {
		const state = thunkAPI.getState()

		if (state.task.letterObjectToCheck.letter === payload) {
			thunkAPI.dispatch(taskSlice.actions.plusCorrectInteractions())
			thunkAPI.dispatch(taskSlice.actions.setInteractionStatus('success'))
		} else {
			thunkAPI.dispatch(taskSlice.actions.plusIncorrectInteractions())
			thunkAPI.dispatch(taskSlice.actions.setInteractionStatus('error'))
			if (
				state.task.incorrectInteractions >=
				config.incorrectInteractionsAllowed - 1
			) {
				thunkAPI.dispatch(appActions.setStage('scoreboard'))
			}
		}

		return Promise.resolve([])
	}
)

export const taskReducer = taskSlice.reducer

export const taskActions = { ...taskSlice.actions, startTaskProcess, interactionCheck }

const getTaskState = (rootState) => rootState[TASK_FEATURE_KEY]

const getCurrentLetterObject = createSelector(
	getTaskState,
	(state) => state.currentLetterObject
)

const getInteractionStatus = createSelector(
	getTaskState,
	(state) => state.interactionStatus
)

const getIncorrectInteractions = createSelector(
	getTaskState,
	(state) => state.incorrectInteractions
)

const getMissedCorrectInteractions = createSelector(
	getTaskState,
	(state) => state.missedCorrectInteractions
)

const getCorrectInteractions = createSelector(
	getTaskState,
	(state) => state.correctInteractions
)

export const taskSelectors = {
	getCurrentLetterObject,
	getInteractionStatus,
	getIncorrectInteractions,
	getMissedCorrectInteractions,
	getCorrectInteractions
}
