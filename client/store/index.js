import { createStore, combineReducers } from 'redux'
import cardInfoReducer from '../reducers/cardInfoReducer'
import slidesReducer from '../reducers/slidesReducer'
import calculatorReducer from '../reducers/calculatorReducer'

const reducer = combineReducers({
    cardInfoReducer,
    slidesReducer,
    calculatorReducer
})

const store = createStore(reducer);

export default store;