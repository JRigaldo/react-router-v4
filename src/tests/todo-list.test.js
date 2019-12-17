import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import TodoApp from '../components/todo-app';


describe("Test TodoApp de fonctionnement", function(){

    // Normalement au lieu de se repeter on met beforeEach()
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<TodoApp />);
        });

        afterEach(() => {
            //inutil ici mais c'est pour l'exemple de comment détruire le composant du shallow DOM
            wrapper.unmount();
        })

    it("Render le composant TodoApp sans erreur", () => {
        const div = document.createElement('div');
        // Ceci n'est pas un test unitaire car il n'y a pas shallow 
        //Le render qui suis est lemême render que l'on retrouve dans les classes. Ici il va render TodoApp dans un div
        ReactDOM.render(<TodoApp />, div);
        // console.log(div.innerHTML);
    });

    it("Render le composant TodoApp sans erreur", () => {
        const div = document.createElement('div');
        ReactDOM.render(<TodoApp />, div);
        // Il y a plein de fonction sur l'expect à voir dans la doc 
        expect(div.innerHTML).toContain("Nouvelle tâche");
    });

    it("Render le composant TodoApp sans erreur avec shallow", () => {
        // shallow va créer un faut DOM pour ses tests
        // shallow va permettre de faire des test unitaire sans render tout les enfants du composant testé
        // html() est une methode de shallow
        // const wrappe r = shallow(<TodoApp />);
        expect(wrapper.html()).toContain("Nouvelle tâche");
    });

    it("Possède 2 classes css 'row'", () => {
        // const wrapper = shallow(<TodoApp />);
        expect(wrapper.find('.row').length).toEqual(2); 
    });

    it("Possède 1 id 'addButton'", () => {
        // const wrapper = shallow(<TodoApp />);
        expect(wrapper.find('#addButton').length).toEqual(1); 
    });

    it("Change la valeur de l'input", () => {
        // const wrapper = shallow(<TodoApp />)
        wrapper.find('input').simulate('change', {
            target: {value: "Yo"}
        })
        expect(wrapper.find('input').prop('value')).toEqual ("Yo");
    });

    it("Saisire une valeur dans l'input, clqieu sur le bouton et vérifie que le texte est dans la liste", () => {
        wrapper.find('input').simulate('change', {
            target: {value: "Yo"}
        });
        wrapper.find('button').simulate('click');
        expect(wrapper.find('.list-group-item').text()).toContain("Yo")
    })
})