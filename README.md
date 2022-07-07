# JavaScript REST API

I undertook this project as part of a coding bootcamp, and it was an introduction into creating JS webservers and the use of ExpressJS, BCryptJS and Mongoose to create a functional back end for a future project.

## Installation and running of this application

### Environment Variables:
* `MONGO_URI`
> This is your connection string to a Mongo Database.
* `SECRET_KEY` 
> This is your string to generate JSON Web Tokens for the GET /user endpoint 

### Endpoints
* `http://localhost:5001/user`
    * GET
    > Uses Request Body
    > ```json
    > {
    >   "username": "username",
	>   "email": "user@email.com",
	>   "pass": "password"
    > }
    > ```
    * POST
    > Uses the HTML Request Authorization Header
* `http://localhost:5001/login`
    * POST
    > Uses Request Body
    > ```json
    > {
    >   "username": "username",
	>   "pass": "password"
    > }
    > ```
* `http://localhost:5001/change-password`
    * PUT
    > Uses Request Body
    > ```json
    > {
    >   "username": "username",
	>   "pass": "password",
	>   "newPass": "new password",
    > }
    > ```

* `http://localhost:5001/delete-account`
    * DELETE
    > Uses Request Body
    > ```json
    > {
    >   "username": "username",
	>   "email": "user@email.com",
	>   "pass": "password",
    > }
    > ```