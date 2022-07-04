const User = require("./model");

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
		//
	} catch (error) {
		console.log(error);
		res.send({ error });
	}
};
