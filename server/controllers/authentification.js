const User = require("../models/user")
const lodash = require("lodash")
const jwt = require("jwt-simple");
const config = require('../../config');

function getTokenForUser(user){
    const timeStamp =  new Date().getTime();
    return jwt.encode({
        // Sujet (identifiant) du token
        sub: user.id,
        // issue at time (date d'émission du token)
        iat: timeStamp
    },
    config.secret
    )
}

exports.signup = function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    // console.log("email et password", email, password);

    // res.send({"type": "email"})
    User.findOne({ email: email }, function (err, existingUser) {
        if (err) {
            return next(err);
        }
        if (existingUser) {
            return res.status(422).send({ error: "Email utilisé" })
        }
        if (lodash.isEmpty(email) || lodash.isEmpty(password)) {
            return res.status(422).send({ error: "Email ou mot de passe vide" })
        }else{
            const user = new User({
                email: email,
                password: password
            })
            user.save(function (err) {
                if (err) {
                    return next(err);
                }
                // Plus besoin du user mais plutot du token
                // res.json(user);
                res.json({token: getTokenForUser(user)})
            })
        }
    })
}
