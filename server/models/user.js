const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs');

//Création du model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

//Début du salage de bcrypt
userSchema.pre('save', function(next){
    // On stock l'instance de du schema dans user
    const user = this;
    bcrypt.genSalt(10, function(err, salt){
        if(err){
            return next(err);
        }
        bcrypt.hash(user.password, salt, null, function(err, hash){
            if(err){
                return next(err);
            }
            user.password = hash;
            next();
        })
    });
})

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;

