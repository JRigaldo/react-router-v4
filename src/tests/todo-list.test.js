import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import TodoApp from '../components/todo-app';

describe("Test TodoApp de fonctionnement", function(){
    it("Render le composant TodoApp sans erreur", () => {
        const div = document.createElement('div');
        ReactDOM.render(<TodoApp />, div);
    }) 
})