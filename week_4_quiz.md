Annie Pennell

	1. What is NPM?
			Node Package Manager--allows you to install node javascript packages .

	2. What does CRUD stand for?
			Create, Read, Update, Delete

	3. When adding middleware to an Express Application, where would you need to include the middleware after it's been installed?  For example, how would you include the body-parser middleware?
			Put it in the main js file (like app.js) with var ____ = require("_____");

	4. What are the four HTTP verbs that we should be using?
			Get, post, put/patch, delete

	5. What is the command to list all of my databases in psql?
			\list

	6. What is the command to connect to a specific database?
			\c someDatabase

	7. What is the command to show all of my tables in a particular database?
			SELECT * FROM "someDatabase";

	8. What does RESTful stand for?
			Representational State Transfer

	9. What are the 7 RESTful routes?
			GET to list, GET to show, GET to edit, GET to make new, POST to create, PUT/PATCH to update, and DELETE to delete.

	10. What does adding salt do?
			Obscures a password so it's harder to decrypt.

	11. What would be the command to create a new model of Person with the attributes of 'name', 'age', 'height', 'origin' (assuming that these would all be strings or integers)?
			sequelize model:create --name Person --attributes name:string,age:integer,height:string,origin:string 

	12. What is an ORM?
			Object-relational mapping, which connects your app to your database.

	13. Why do we include session data when we authenticate a user?  What would happen if we didn't?
			So that we know they're signed in. If we didn't, they wouldn't stay logged in.

	14. How would you make a request for all movies with the word 'wedding' using the NPM module REQUEST?
			I could use review on this one!

	15. What is the difference between authentication and authorization?
			Authentication checks who the user is for access and authorization checks for what they're authorized to access or see.

***BONUS***
	16. If you have any specific topics that we have gone over for the past four weeks that you would like us to review, please list those here.
			Joins, request module, associations, setting up APIs 
