const User = require("./model");

const getToken = () => {
	return "placeholder";
};

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

exports.logIn = async (req, res) => {
	try {
		// Search the database for the user provided email and password
		const existingUser = await User.find(req.body);

		console.log(existingUser);
		// Check the length of results
		if (!existingUser.length) {
			// If existingUser is EMPTY:
			console.log(`Invalid login details, please try again`);
			res.send({ success: false, session_token: null });
		} else {
			// Otherwise, the login details are correct
			console.log("Welcome back");
			res.send({ success: true, session_token: getToken() });
		}
	} catch (error) {
		console.log(error);
		res.send({ error });
	}
};
