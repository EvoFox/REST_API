const { Router } = require("express"); // Import Router method only from express
const { signUp, login, changePassword, deleteUser } = require("./controllers"); // Import controllers from ./controllers
const {
	hashPass,
	comparePass,
	tokenCheck,
	verifyEmail,
} = require("../middleware"); // Import middleware from ../middleware
const userRouter = Router(); // Create a Router that can have endpoints added to it.

userRouter.post("/user", verifyEmail, hashPass, signUp); // define a post request on /user endpoint that calls the signUp controller

userRouter.post("/login", comparePass, login); // define a get request on /log-in endpoint that calls the logIn controller
userRouter.get("/login", tokenCheck, login); // define a get request on /user endpoint that calls the tokenCheck and login methods

userRouter.put("/change-password", comparePass, hashPass, changePassword); // define a post request on /change-password endpoint that calls the changePassword controller

userRouter.delete("/delete-account", comparePass, deleteUser); // define a delete request on /delete-account endpoint that calls the deleteUser controller

module.exports = { userRouter }; // export the Router so that it can be used in the server
