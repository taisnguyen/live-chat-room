module.exports = (app) => {

    // login page
    // GET /login
    app.use("/login", require("./login"));

    // create room page
    // GET /createRoom
    app.use("/createRoom", require("./createRoom"));

    // chatroom page
    // GET /chatroom
    app.use("/chatroom", require("./chatroom"));

    // API
    // /api
    app.use("/api", require("./api"));

    // home page
    // GET / 
    app.use("/", (req, res) => {
        res.redirect("/login");
    });

}