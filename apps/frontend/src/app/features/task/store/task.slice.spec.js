import { fetchApp, appAdapter, appReducer } from './task.slice'

describe('app reducer', () => {
	// it('should handle initial state', () => {
	// 	const expected = appAdapter.getInitialState({
	// 		loadingStatus: 'not loaded',
	// 		error: null
	// 	})
	// 	expect(appReducer(undefined, { type: '' })).toEqual(expected)
	// })
	// it('should handle fetchApps', () => {
	// 	let state = appReducer(undefined, fetchApp.pending(null, null))
	// 	expect(state).toEqual(
	// 		expect.objectContaining({
	// 			loadingStatus: 'loading',
	// 			error: null,
	// 			entities: {}
	// 		})
	// 	)
	// 	state = appReducer(state, fetchApp.fulfilled([{ id: 1 }], null, null))
	// 	expect(state).toEqual(
	// 		expect.objectContaining({
	// 			loadingStatus: 'loaded',
	// 			error: null,
	// 			entities: { 1: { id: 1 } }
	// 		})
	// 	)
	// 	state = appReducer(
	// 		state,
	// 		fetchApp.rejected(new Error('Uh oh'), null, null)
	// 	)
	// 	expect(state).toEqual(
	// 		expect.objectContaining({
	// 			loadingStatus: 'error',
	// 			error: 'Uh oh',
	// 			entities: { 1: { id: 1 } }
	// 		})
	// 	)
	// })
})
