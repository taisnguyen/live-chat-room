// Setup server
const { app, server } = require("./setupServer");

// Set up routes
require("./routes")(app);

// Setup socket
require("./setupSocket")(server);