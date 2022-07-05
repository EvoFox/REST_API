const { Router } = require("express"); // Import Router method only from express
const { signUp, logIn, searchUser } = require("./controllers"); // Import controllers from ./controllers
const userRouter = Router(); // Create a Router that can have endpoints added to it.

userRouter.post("/user", signUp); // define a post request on /user path that calls the signUp controller
userRouter.get("/log-in", logIn);
userRouter.get("/search-user", searchUser);

module.exports = { userRouter };
