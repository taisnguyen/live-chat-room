const express = require("express");
const path = require("path");

// Setup server
const PORT = process.env.PORT || 3000;
const app = express();
const server = app.listen(PORT, () => console.log(`listening on port ${PORT}`));
app.use(require("sanitize").middleware);
app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

module.exports = { app, server };