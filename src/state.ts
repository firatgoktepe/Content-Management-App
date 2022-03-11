import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

const reducer = combineReducers({})

export default function configureStore(preloadedState: any) {
    const middlewares = [ReduxThunk]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancer = composeWithDevTools(middlewareEnhancer)

    const store = createStore(reducer, preloadedState, enhancer)
    return store
}

export interface AppState {}

export const initialAppState: AppState = {}

export const store = configureStore(initialAppState)