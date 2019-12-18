import { combineReducers } from "redux";
import AuthentificationReducer from './authentification-reducer';
import actionInfoReducer from './action-info';
import RessourceReducer from './ressource';
const rootReducer = combineReducers({
    authentification: AuthentificationReducer,
    actionInfo: actionInfoReducer,
    ressource: RessourceReducer
});

export default rootReducer;