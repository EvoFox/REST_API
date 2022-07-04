require("./db/connection"); // Run DB Connection right away

const express = require("express"); // Import all of  express module;
const app = express(); // Create web server constant to manipulate
const { userRouter } = require("./user/routes"); // Import all endpoints connected to userRouter

const _PORT = process.env.PORT || 5001; // Store supplied port or default (5001)

app.use(express.json()); // Parses all following requests if they are JSON, sends all responses as JSON.
app.use(userRouter); // Give access to users

// Listening on provided port on current location (localhost).
app.listen(_PORT, () => {
	console.log(`Listening on port ${_PORT}`);
});
