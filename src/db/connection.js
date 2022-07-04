require("dotenv").config();
const mongoose = require("mongoose");

const connection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("Successfully established connection.");
	} catch (error) {
		console.log(
			"Something has gone wrong while connecting to the databse:",
			error
		);
	}
};

connection();
