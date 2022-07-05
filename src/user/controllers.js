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
		// Search the database for the user provided email and password
		const user = await User.findOne({
			username: req.body.username,
			pass: req.body.pass,
		});

		// Check the length of results
		if (!user) {
			// If existingUser is EMPTY:
			throw new Error("Incorrect credentials");
		} else {
			// Otherwise, the login details are correct
			console.log("Welcome back");
			res.send({ user });
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

