const { Router } = require("express"); // Import Router method only from express
const { signUp, login, searchUser } = require("./controllers"); // Import controllers from ./controllers
const { hashPass, comparePass } = require("../middleware"); // Import middleware from ../middleware
const userRouter = Router(); // Create a Router that can have endpoints added to it.

userRouter.post("/user", hashPass, signUp); // define a post request on /user endpoint that calls the signUp controller
userRouter.post("/login", comparePass, login); // define a get request on /log-in endpoint that calls the logIn controller
userRouter.get("/search-user", searchUser); // define a get request on /search-user endpoint that calls the searchUser controller

module.exports = { userRouter };
