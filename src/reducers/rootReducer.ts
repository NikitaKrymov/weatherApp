import { combineReducers } from 'redux';
import appReducer from './appReducer';
import errorsReducer from './errorsReducer';

export const rootReducer =  combineReducers({
    app: appReducer,
    errors: errorsReducer
})

export type AppState = ReturnType<typeof rootReducer>;