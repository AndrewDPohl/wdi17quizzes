	1. What is NPM?
	– It's Node Package Manager, helps us install useful packages that do stuff for us in Node.
	2. What does CRUD stand for?
	– Create, read, update, delete.
	3. When adding middleware to and Express Application, where would you need to include the middleware after it's been
    installed?  For example, how would you include the body-parser middleware?
    – I'd have to put it in the beginning of the file and then require it by var bodyparser = require('body-parser')
	4. What are the four HTTP verbs that we should be using?
	– GET, POST, PUT, DELETE
	5. What is the command to list all of my databases in psql?
	\list
	6. What is the command to connect to a specific database?
	\c <database_name>

	7. What is the command to show all of my tables in a particular database?
	\dt

	8. What does RESTful stand for?
	– Google tells me it stands for Representational State Transfer. But it's just the best practice for naming routes.

	9. What are the 7 RESTful routes?
	get /users
	get /users/new
	post /users
	get /users/:id
	get /users/:id/edit
	put /users/:id
	delete /users/:id
	
	10. What does adding salt do?
	– It adds complexity to the hash of the secure password we're creating.

	11. What would be the command to create a new model of Person with the attributes of 'name', 'age', 'height', 'origin'
    (assuming that these would all be strings or integers)?
    sequelize model:create --name Person --attributes "name:string,age:integer,height:integer,origin:string"

	12. What is an ORM?
	– Object Relational Mapping, mapping relations between objects.

	13. Why do we include session data when we authenticate a user?  What would happen if we didn't?
	– So they can stay logged in. Otherwise they'd have to log in each time they change page.

	14. How would you make a request for all movies with the word 'wedding' using the NPM module REQUEST?
	– I have no idea. Yet.

	15. What is the difference between authentication and authorization?
	– Authentication is checking if the user is who he/she says he/she is and authorization about what he/she is allowed to do.

***BONUS***
	16. If you have any specific topics that we have gone over for the past four weeks that you would like us to review, 
     please list those here.
     – Associating tables in practice.
