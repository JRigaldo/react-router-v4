exports.signup= function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    console.log("Email et password", email, password);
    res.send({test: "blouloulou"})
}