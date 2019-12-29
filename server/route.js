const AuthentificationController = require("./controllers/authentification");
require('./services/passport');
const passport = require('passport');


// Indique a passport d'utiliser un type d'authentification jwt et pas de session ( authentification avec cookie )
const requireToken = passport.authenticate('jwt', {session: false});
const requireValidCredentials = passport.authenticate("local", { session: false })

module.exports = function (expressServer) {
    // expressServer.get("/", function (req, res, next) {
    //     res.send({ serverData: ["Stratocaster", "Gibson", "Ibanez"] })
    // });
    // // expressServer.get("/signup", function (req, res, next) {
    // //     res.send({ serverData: ["Stratocaster", "Gibson", "Ibanez"] })
    // // });
    expressServer.get("/ressourceSecrete", requireToken, function(req, res){
        res.send({codeDeLaMort: 42})
    })
    
    expressServer.post("/signup", AuthentificationController.signup);

    expressServer.post("/signin", requireValidCredentials, AuthentificationController.signin);
    
}