import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { APP_FEATURE_KEY, appReducer } from './app/store/app.slice'
import {
	TASK_FEATURE_KEY,
	taskReducer
} from './app/features/task/store/task.slice'
const store = configureStore({
	reducer: {
		[APP_FEATURE_KEY]: appReducer,
		[TASK_FEATURE_KEY]: taskReducer
	},
	// Additional middleware can be passed to this array
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
	devTools: process.env.NODE_ENV !== 'production',
	// Optional Redux store enhancers
	enhancers: []
})

setupListeners(store.dispatch)

export default store
