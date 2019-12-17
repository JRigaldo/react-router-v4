import React from 'react';
import {shallow, mount} from 'enzyme';

import AuthentificationReducer from '../reducers/authentification-reducer';
import {SET_ATHENTIFICATION, INCREMENT_ACTION_COUNT} from '../actions/action-types';
import {setAuthentification, incrementActionCount} from '../actions';

import Header from '../containers/header';
import RootTest from './root-test';

describe("Test sur le Header", () => {
    it("Render le composant connecté sans erreur", () => {
        const wrapper = shallow(
            <RootTest>
                <Header />
            </RootTest>
        );
    });

    it("Test que le libellé du bouton connexion soit bien 'connexion' puis déconnexion après le click", () => {
        // Le mount retourne du text html dans le test alors que le shallow pas...
        const wrapper = mount(
            <RootTest>
                <Header />
            </RootTest>
        );
        // .at(2) retourne le 3e <a href> du text  
        expect(wrapper.find("a").at(2).text()).toEqual("Connexion");
        // On va simuler le cliquer pour regarder s'il devient déconnexion
        wrapper.find("a").at(2).simulate("click");
        expect(wrapper.find("a").at(2).text()).toEqual("Déconnexion");
        console.log(wrapper.debug());
    });

    it("Test le payload d'une action", () => {
        const action = incrementActionCount();
        expect(action.type).toEqual(INCREMENT_ACTION_COUNT);
    });

    it("Test le reducer authetification sans action", () => {
        const initialState = {
            isLoggedIn : false
        }
        expect(AuthentificationReducer(initialState, {}).isLoggedIn).toEqual(false);
    });

    it("Test le reducer authetification sans action type", () => {
        const action = {type: SET_ATHENTIFICATION, payload: true}
        const initialState = {
            isLoggedIn : false
        }
        expect(AuthentificationReducer(initialState, action).isLoggedIn).toEqual(false);
    });
});
