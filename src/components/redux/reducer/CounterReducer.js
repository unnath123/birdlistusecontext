import React from 'react'
import { INCREMENT, DECREMENT, RESET } from '../actions/actionTypes';

const initialstate = 0;

const CounterReducer = (state=initialstate, actions) =>{
    switch (actions.type) {
        case INCREMENT: return state+1;
        case DECREMENT: return state+1;
        case RESET: return initialstate;
        default:return state
    }
}

export default CounterReducer