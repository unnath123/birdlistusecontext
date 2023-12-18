import { ADD_TO_DO, DELETE_TO_DO, EDIT_TO_DO } from "./actionTypes";

export const add_to_do = (todo) =>{
    return {
        type:ADD_TO_DO,
        payload: todo
    }
}

export const delete_todo = (id) =>{
    return {
        type:DELETE_TO_DO,
        payload: id
    }
}

export const edit_todo = (id) =>{
    return {
        type:ADD_TO_DO,
        payload: id
    }
}