const User = require("./model");

const getToken = () => {
	return "placeholder";
};

// Create user
exports.signUp = async (req, res) => {
	try {
		// req.body contains k/v pairs that match the User model
		const newUser = await User.create(req.body);
		res.send({ user: newUser });
	} catch (error) {
		console.log(error);
		res.send({ error });
	}
};

// Read/Check if user exists
exports.login = async (req, res) => {
	try {
		if (req.body.auth) {
			// auth succeeded
			console.log(`${req.body.username} has logged in`);
			res.send({ user: req.body.username, session_token: "placeholder" });
		}
	} catch (error) {
		console.log(error);
		res.send({ error });
	}
};

exports.searchUser = async (req, res) => {
	try {
		// req input = { "username": "<username>" }
		const re = new RegExp(`${req.body.username}`); // Define regex pattern to search usernames based on partial string
		const details = await User.find({ username: { $regex: re } }); // Search database on usernames using Regex pattern, storing results in details

		let arrResult = []; // Define an empty array to store ONLY usernames in
		details.map((i) => arrResult.push(i.username)); // Map the results of the query to arrResult in order to form the response.

		res.send({ username: arrResult }); // Send the formulated response.
	} catch (error) {
		console.log(error);
		res.send({ error });
	}
};

