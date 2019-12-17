import { combineReducers } from "redux";
import AuthentificationReducer from './authentification-reducer';
import actionInfoReducer from './action-info';
const rootReducer = combineReducers({
    authentification: AuthentificationReducer,
    actionInfo: actionInfoReducer
});

export default rootReducer;