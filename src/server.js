require("db/connection"); // Run DB Connection right away
const express = require("express"); // Pull expressJS in
const _PORT = process.env.PORT || 5001; // Store supplied port or default (5001)
const app = express(); // Create web server constant to manipulate

app.use(express.json()); // Parses all following requests if they are JSON, sends all responses as JSON.

// Listening on provided port on current location (localhost).
app.listen(_PORT, () => {
	console.log(`Listening on port ${_PORT}`);
});
