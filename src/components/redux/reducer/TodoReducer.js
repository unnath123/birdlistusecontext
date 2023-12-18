import React from 'react'
import { ADD_TO_DO, DELETE_TO_DO, EDIT_TO_DO } from '../actions/actionTypes';

let items =[];

const TodoReducer = (state = items, actions) =>{
    if(actions.type === ADD_TO_DO){
        return [...state, actions.payload]
    }
    else if(actions.type === DELETE_TO_DO){
        return state.filter((ele)=>(ele.id!==actions.payload))
    }
    else{
        return state 
    }
}

export default TodoReducer