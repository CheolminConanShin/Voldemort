import { createStore, combineReducers } from 'redux'
import { cardInfoReducer } from '../reducers/cardInfoReducer'
import { slidesReducer } from '../reducers/slidesReducer'

const reducer = combineReducers({
    cardInfoReducer,
    slidesReducer
})

const store = createStore(reducer);

export default store;