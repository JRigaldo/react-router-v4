const User = require("../models/user")
const lodash = require("lodash")

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
                res.json(user);
            })
        }
    })
}

// const User = require("../models/user")
// const lodash = require("lodash")

// exports.signup = function (req, res, next) {
//     const email = req.body.email;
//     const password = req.body.password;

//     User.findOne({ email: email }, function (err, existingUser) {
//         if (err) {
//             return next(err)
//         }
//         if (existingUser) {
//             return res.status(422).send({ error: "Email utilisé" })
//         }
//         if (!lodash.isEmpty(email) && !lodash.isEmpty(password)) {
//             const user = new User({
//                 email: email,
//                 password: password
//             })

//             user.save(function (err) {
//                 if (err) {
//                     return next(err);
//                 }
//                 res.json(user);
//             })
//         } else {
//             return res.status(422).send({ error: "Mot de passe ou email vide" })
//         }

//     })
// }