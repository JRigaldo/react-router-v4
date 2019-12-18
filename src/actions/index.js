import {SET_AUTHENTIFICATION, INCREMENT_ACTION_COUNT, ADD_RESSOURCE} from './action-types';

export function setAuthentification(isLoggedIn){
    return function (dispatch){
        dispatch({
            type: SET_AUTHENTIFICATION,
            payload: isLoggedIn
        })
        // dispatch(incrementActionCount()); -> mis dans les middlewears
    }
}

export function incrementActionCount(){
    return {
        type: INCREMENT_ACTION_COUNT
    }
}

export function addRessource(){
    return {
        type: ADD_RESSOURCE
    }
}