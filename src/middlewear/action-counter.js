import {INCREMENT_ACTION_COUNT} from '../actions/action-types';
import {incrementActionCount} from '../actions/index';

// les parametres remontent dans les fonctions une fois executées
export const actionCounter = store => next => action => {
    if(action.type !== INCREMENT_ACTION_COUNT){
        store.dispatch(incrementActionCount());
    }
    console.log("Action qui passe", action);
    next(action);
}