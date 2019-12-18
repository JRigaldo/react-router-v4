import {createSelector} from 'reselect';
import lodash from 'lodash';

export const getIntegerList = state => {
    // Export = fonction que l'on va retourner
    // On retourne exactement ce qu'il y a dans le mapStateToProps
    // On le met dans le dossier selecteur car c'est une fonction générique
    return state.ressource.ressourceList;
}

export const getContainsOneList = state => {
    // return state.ressource.ressourceList.filter(r => r.toString().indexOf('1') > -1);
    // Même chose quie si on faisait
    return getIntegerList(state).filter(r => r.toString().indexOf('1') > -1);
}

export const getPrimeNumber = state => {
    return getIntegerList(state).filter(r => primeNumber(r));
}

function primeNumber(value){
    // On parcourt les nombres à partir de 2 car 1 n'est pas un nombre premier
    // Si le reste de la value est égale à 0 on retourne faut car un nombre ne peu pas 
    for(var i = 2; i < value; i++){
        if(value % i === 0){
            return false 
        }
    }    
    return value > 1;
}

// createSelector vient de la libraire reselect et va prendre le state automatiquement de façon caché
// Ensuite on peut appeler les selecteurs qu'on veut 
// createSelector va lui passer le state
export const getSpecialNumbersList = createSelector(
    // Les functions en argument des parenthèses
    getContainsOneList,
    getPrimeNumber,
    // alias du résultat de chaque selecteur
    (containsOneList, primeNumberList) => {
        // les paramètres représente le resultat de notre selecteur
        return lodash.intersection(containsOneList, primeNumberList);
    }
)