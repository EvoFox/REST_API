const bcrypt = require("bcryptjs");
const User = require("../user/model");
const _SALT = 8;

exports.hashPass = async (req, res, next) => {
	try {
		req.body.pass = await bcrypt.hash(req.body.pass, _SALT); // Hash the password from req.body.pass, reasserting into req.body.pass

		// If changing password:
		if (req.body.newPass) {
			req.body.newPass = await bcrypt.hash(req.body.newPass, _SALT); // Hash the password from req.body.newPass if it exists, reassert into req.body.newPass
		}

		next(); // Moves onto next middleware/controller in endpoint
	} catch (error) {
		console.log(error);
		res.send({ error });
	}
};

exports.comparePass = async (req, res, next) => {
	try {
		// Lookup username OR email in database - This allows it to be used in functions that require either of them for searching
		const user = await User.findOne({
			$or: [{ username: req.body.username }, { email: req.body.email }],
		});

		// Check if a record exists in the database matching criteria
		if (!user) {
			// If a record is not found, throw a new error "Account not found"
			throw new Error("Account not found.");
		} else {
			// Check if the passwords match
			if (await await bcrypt.compare(req.body.pass, user.pass)) {
				// If they match, add auth:true to request body
				req.body.auth = true;
			} else {
				// If they do not match, throw a new error "Invalid login details"
				throw new Error("Invalid login details");
			}
		}

		next(); // Move onto the next middleware/controller in endpoint
	} catch (error) {
		console.log(error);
		res.send({ error });
	}
};
