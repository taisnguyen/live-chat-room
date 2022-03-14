const axios = require("axios");

// Setup axios
//axios.defaults.baseURL = "http://104.179.129.31:3000";
axios.defaults.baseURL = "http://localhost:3000";

// Setup server
const { app, server } = require("./setupServer");

// Set up routes
require("./routes")(app);

// Setup socket
require("./setupSocket")(server);