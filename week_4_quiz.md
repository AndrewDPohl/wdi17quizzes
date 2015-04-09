	1. What is NPM?
		It's Node's package manager. It helps us install stuff that we need.

	2. What does CRUD stand for?
		Create, Read, Update, Delete

	3. When adding middleware to and Express Application, where would you need to include the middleware after it's been installed?  For example, how would you include the body-parser middleware?
		You'd put it in the app.js file as..
			var express = require('express');
			var bodyParser = require('body-parser');
			var pg = require("pg");
			var app = express();
		It gets documented in the .json file


	4. What are the four HTTP verbs that we should be using?
		GET, POST, PUT/PATCH, DELETE


	5. What is the command to list all of my databases in psql?
		\l

	6. What is the command to connect to a specific database?
		\c thedatabase


	7. What is the command to show all of my tables in a particular database?
		\dt

	8. What does RESTful stand for?
		Representational state transfer, but I had to look it up. It refers to the simple forms that routes can take.

	9. What are the 7 RESTful routes?
		GET /users --displays users
		GET users/:id --displays a specific user
		GET users/new --renders a page to make a new user
		POST users/ --actually creates the new user
		GET users/:id/edit/ --renders a page to edit a user
		PATCH/PUT users/:id --actually edits those
		DELETE users/:id --deletes a user

	10. What does adding salt do?

		Messes up your liver.
		It adds a bunch of garbage and for each (x) salty number, it puts your password and the garbage through a washing machine again.


	11. What would be the command to create a new model of Person with the attributes of 'name', 'age', 'height', 'origin'
    (assuming that these would all be strings or integers)?
		
		sequelize model:create --name Student --attributes "name:string,age:integer,height:integer,origin:string"



	12. What is an ORM?
	It connects the database to the javascript.

	13. Why do we include session data when we authenticate a user?  What would happen if we didn't?
		I'm not sure...maybe it would log them out all the time? Not recognize that they've already logged in?

	14. How would you make a request for all movies with the word 'wedding' using the NPM module REQUEST?
		Still need to figure this out...

	15. What is the difference between authentication and authorization?
		Authentication figures out if you're real and who you are, and authorization figures out if you have the permissions to access the thing.

***BONUS***
	16. If you have any specific topics that we have gone over for the past four weeks that you would like us to review, 
     please list those here.
I'd love some practice with testing. Also, joining models. 