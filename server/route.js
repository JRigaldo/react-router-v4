const AuthentificationController = require("./controllers/authentification");
require('./services/passport');
const passport = require('passport');

const requireToken = passport.authenticate('jwt', {session: false});

module.exports = function (expressServer) {
    // expressServer.get("/", function (req, res, next) {
    //     res.send({ serverData: ["Stratocaster", "Gibson", "Ibanez"] })
    // });
    // // expressServer.get("/signup", function (req, res, next) {
    // //     res.send({ serverData: ["Stratocaster", "Gibson", "Ibanez"] })
    // // });
    expressServer.post("/signup", AuthentificationController.signup);
    expressServer.get('/ressourcesSecrete', requireToken, function(req, res){
        res.send({codeDeLaMort: 42})
    })
}