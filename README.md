# Starter React V16 + Redux

+ ```npm install```
+ ```npm start```

Si vous souhaitez générer votre app vous même il vous faudra juste node avec une version >=6 et npm puis :
+ ```npm install -g npx```
+ ```npm install -g react-create-app```
+ ```npx create-react-app votre-nom-d-app```

+ ```cd votre-nom-d-app ```
+ ```npm start```
# react-router-v4

APP BOILER PLATE

- npm install -g npx
- npm install -g crest-react-app
- npx create-react-app mon-app
- cd -> mon app 
- npm start


RECAP

- Les fonctions avec will n’existent plus
- ComponentWillMount est devenu le constructeur
- On fait PLUS setState dans componentWillReceiveProps 
- MAIS DANS getDerivedStateFromProps -> retourne directement le state sans faire de setState
- PureComponent -> c’est un nouveau composant de react qui ne va pas render si le state n’a pas été changer
- React.createContext -> envoyer une une des datas à un/des composants profonds
    - MyContext.Provider enverrai des valser à ses enfants (ne remplace pas redux car c’est juste pour une donnée -> à déconseiller)

- Les hook permettent d’avoir plus de visibilité dans les classes et fonctions en faisant des setName ou setAge sans avoir besoin de créer de fonction nous-même avec setState (simplifie le code)

- Hooks useEffect() permet de simplifier le code car cette fonction prends en compte les fonctions de quand ‘on arrive’, quand ‘ça change’ et quand ‘on s’en va’ (componentWillMont, componentDidUpdate, componentWillUnmont)
    - Est appelé à chaque modification (componentWillMont et componentDidUpdate)
    -  On peut en mettre plusieurs et ils seront appelé dans l’ordre
    - Le 2e args permet de faire des comparaisons directement (avant on devait faire un if(l’ancienne props et diff de la nouvelle props fait telle chose))
    - Le 2e args est un tableau vide =  execute toi seulement dans un certain cas… (Permet de faire des requêtes async seulement dans un certain cas (if(machin truc alors execute))
    - Le 2e args est un tableau vide = Permet de retourner la fonction que lorsque l’effet prend fin. Return (quand il se termine) fait ça… l’équivalent d’un componentWillUnMount -> avec true / false

REACT ROUTER V4
- Affichage en design des composants (header, home ressources)
- Mise en place des actions isLoggedIn (action_types, index, reducer, index_reducer)
- Mise en place du dispatcher dans le composant avec if else isLoggedIn dans une fonction onClickIsLoggedIn
- Intégration de la Route avec réacteur-router-dom où les composant s’occupent d’afficher leurs propres route

HOC
- High Order Component (Super composant qui lègue ses paramètres pour ne pas avoir besoin de les répéter dans chacun d’eux) ex: si le composant doit s’afficher lorsque l’utilisateur est loggé
- HOC est dans un dossier helpers 
- Ce sera une fonction anonyme exportée et composée d’une class qui va être importée dans le composant qui à besoin…
- Très spécial à voir dans la doc ou sur la vidéo
- Voir la vidéo pour le helpeur d’authentification qui montre le fonctionnement du helpeur pour authentifier lia route en fonction de si on a cliqué sur connexion ou pas

MIDDLEWEAR
- Redux-thunk -> est un middlewear qui se trouve entre l’action et le raucher et permet de dispatcher l’action à tous les reducers
- Le middlewear qu’on créer increment_action_count va compter le nombre d’actions qu’on fait dans l’application sans qu’on soit obliger de lancer la fonction incrementActionCount dans chaque fonction action -> middlewear
- Les middlewears dans rehaut va être une fonction exportée dans une fonction avec en paramètre le store (dispatche), dans une fonction avec en paramètre next (va dire de passer au reducer), dans une fonction avec en paramètre l’action.type
- Dans cette dernière fonction tous les paramètres précité sont accessible
- On va dispatcher le store avec la fonction action que l’on souhaite intercaler et qui est directement appelée du fichier action
- Il faut faire un if et définir si l’action que l’on souhaite lancer n’est pas l’action en cours sinon on rentre dans une boucle infini et on risque de faire cracher l’application 

LES TESTS
- Import {shallow} permet de simuler les tests provient de la librairie enzyme de Airbnb (Jest librairie comme Mocha est déjà intégré dans react)
- Enzyme avce shallow permet de faire des tests unitaires très précis sans que ça Render toute l’application

LES SELECTEURS
- Les selecteurs dans react, ça sert à décharger le mapStateToProps et à regrouper les différentes requêtes du state.
- Permet d'optimiser l'application
ex: MapStateToProps = state => {
    return {
        panierDuProduitEnPromotionOuGratuit: state.unEndroit.unAutre.AutreChose.panier.map(produit => return produit.type == "Promotion" || produit.type == "Free" )

        AmisAvecPromotionDansLePanier: state...

        ...

    }
}



