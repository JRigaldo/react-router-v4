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
- Dans l'exercice, un selecteur est une action générique standard mise dans le dossier selectors
- Une fonction qui prend le state en paramètre et qui retourne ce que je veux
- Le selecteur c'est une fonction qui mise avec le state en paramètre dans l'objet de mapStateToProps
- INSTALL reselect qui permet de fusionner les selecteurs pour entre plus efficiant
- INSTALL loadash est une petite librairie qui permet de faire des petit calaculs sur les tableaux et les objets
- Voir la video

IMPORTANT EN DEVELOPPEMENT
- INSTALL meadllewear immutable state pour pas avoir de conflit quand on code et qu'on fait des erreur dans la mutation de state
- INSTALL immmutable.js à voir dans la vidéo pour la présentation de cet outil



"server": "nodemon server/index.js"

JE VIENS D'INSTALLER nodemon body-parser express ET JE L'AI CONFIGUER POUR POUVOIR FAIRE UN res.post()
J'AI MIS EN PLACE LE DOSSIER CONTROLLER OU SE TROUVE L'authentification qui est inporté dans la route

AUTHENTIFICATION
- On va enregistrer un id pour le login user dans mangoDB et lui retourner qu'il est connecté
    - Pour ça on connecte le model user à l'authentification dans controller, on import lodash
    - Gérer les cas d'erreurs
    - user.findOne() trouve nous le une erreur ou si le user est déjà présent avec un statut 404
    - Et s'il n'as pas de mot de passe créer une nouvelle instance user 
    - On send les status dans des objets
    - On fait la même chose avec lodash.isEmpty(email), on send les status dans des objets

    - Au départ on a une fake data de res.send({"login": "blblabla"}) en post dans la route
    - Il faut mettre ça dans une nouvelle instance et sauver celle-ci, de "user" en locurance. Car pour l'intsant il n'y a pas de login de user défini
    
ENCRYPTION BCRYPT SALE
    - Il faut être connecté à Mlab
    - La manière d'encryptage pour une application et de salé le mot de passe c'est à dire d'y ajouter des lettres et des chiffres avec un algrorythme de Bcrypte et ensuite d'utiliser la librairie de Bcrypte pour l'encrypter. Si l'utilisateur à perdu le mot de passe, ou pour le loger, on passera par la même procèdure pour le comparer avec l'original parce qu'on l'a mais on le connait pas.
    - Cela se passe dans le model du user.js
    - Pour créer un token (clé secrète ) c'est jwtToken permet de d'ancoder et de décoder le password avec des methode jwtToken. Ce qui permettra d'identifier un utilisateur via le token.
    - Pour élaobrer des stratégies de sécurité c'est passportJS
    
    INSTALL
    - npm install jwt-simple passport passport-jwt passport-local --save
    
    - config.js à la racine -> module.exports = {secret: "au bol"} -> authentification.js -> import config + jwt-simple
    - Création d'une fonction qui getTokenForUser(user) qui va utiliser les libraries et le token
    - res.json({token: getTokenForUser(user)})

    - Voir si l'utilisateur est légitime. A-t-il le droit d'accèder à la ressource qu'il demande...
    - passportJS importé depuis la route.js
    - On va concevoir notre strategie pour passport dans services/passport.js

    




