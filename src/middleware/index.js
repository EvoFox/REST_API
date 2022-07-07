const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const _SALT = 8;
const User = require("../user/model");

exports.hashPass = async (req, res, next) => {
	try {
		req.body.pass = await bcrypt.hash(req.body.pass, _SALT); // Hash the password from req.body.pass, reasserting into req.body.pass

		// If changing password:
		if (req.body.newPass) {
			req.user.newPass = await bcrypt.hash(req.body.newPass, _SALT); // Hash the password from req.body.newPass if it exists, reassert into req.body.newPass
		}

		next(); // Moves onto next middleware/controller in endpoint
	} catch (error) {
		console.log(error);
		res.send({ error });
	}
};

exports.comparePass = async (req, res, next) => {
	try {
		// Lookup username OR email in database - Store it in req.user
		req.user = await User.findOne({ username: req.body.username });

		// Check the req.user password matches the req.body password
		if (await bcrypt.compare(req.body.pass, req.user.pass)) {
			next(); // Move onto the next middleware/controller in endpoint
		} else {
			// If they do not match, throw a new error "Invalid login details"
			throw new Error("Invalid login details");
		}
	} catch (error) {
		console.log(error);
		res.send({ error });
	}
};

exports.tokenCheck = async (req, res, next) => {
	try {
		// Decode token using secret key stored in .env file
		const decodedToken = jwt.verify(
			req.header("Authorization"),
			process.env.SECRET_KEY
		);

		// Find user by their ID stored in the token
		req.user = User.findById(decodedToken.id);
		next();
	} catch (error) {
		console.log(error);
		res.send({ error });
	}
};
