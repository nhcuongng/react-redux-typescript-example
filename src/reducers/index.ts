import { combineReducers } from 'redux'
import { peopleReducer } from './person';
import { toggleReducer } from './toggle';

export const rootReducer = combineReducers({
  peopleReducer,
  toggleReducer
})

export type TReducers = ReturnType<typeof rootReducer>