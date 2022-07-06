const { Router } = require("express"); // Import Router method only from express
const {
	signUp,
	login,
	searchUser,
	changePassword,
	deleteUser,
} = require("./controllers"); // Import controllers from ./controllers
const { hashPass, comparePass } = require("../middleware"); // Import middleware from ../middleware
const userRouter = Router(); // Create a Router that can have endpoints added to it.

userRouter.post("/user", hashPass, signUp); // define a post request on /user endpoint that calls the signUp controller
userRouter.post("/login", comparePass, login); // define a get request on /log-in endpoint that calls the logIn controller
userRouter.put("/change-password", comparePass, hashPass, changePassword); // define a post request on /change-password endpoint that calls the changePassword controller
userRouter.delete("/delete-account", comparePass, hashPass, deleteUser); // define a delete request on /delete-account endpoint that calls the deleteUser controller
userRouter.get("/search-user", searchUser); // define a get request on /search-user endpoint that calls the searchUser controller

module.exports = { userRouter }; // export the Router so that it can be used in the server
