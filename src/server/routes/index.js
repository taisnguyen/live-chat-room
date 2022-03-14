module.exports = (app) => {

    // login page
    // GET /login
    app.use("/login", require("./login"));

    // API
    // /api
    app.use("/api", require("./api"));

    // home page
    // GET / 
    app.use("/", (req, res) => {
        res.redirect("/login");
    });

}