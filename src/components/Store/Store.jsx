import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';

const pitcherList = (state = ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'], action) => {
    switch (action.type) {
        case 'ADD_PITCHER':
            return [...state, action.payload];
        default:
            return state;

    }
}

const catcherList = (state = ['Roy Campanella', 'Elston Howard', 'Kenji Jojima'], action) => {
    switch (action.type) {
        case 'ADD_CATCHER':
            return [...state, action.payload];
        default:
            return state
    }
}

const onTheMound = (state = 'Maud Nelson', action) => {
    switch (action.type) {
        case 'ONTHEMOUND':
            return action.payload
    }
    return state
}

const behindThePlate = (state = 'Elston Howard', action) => {
    switch (action.type) {
        case 'BEHINDTHEPLATE':
            return action.payload
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        pitcherList,
        catcherList,
        onTheMound,
        behindThePlate
    }),
    composeWithDevTools(
        applyMiddleware(
            logger
        )
    )
)
export default storeInstance