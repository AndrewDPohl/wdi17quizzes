	1. What is NPM?
		Package Managment that installs requirements that it reads in json package files
		My best guess for the N is that it stands for Node

	2. What does CRUD stand for?
		Create, Read, Update, Delete
	3. When adding middleware to and Express Application, where would you need to include the middleware after it's been
    installed?  For example, how would you include the body-parser middleware?
    	I would include the middle ware in my app.js in between the requirements at top and the js code. Hierarchy can matter as the one middle ware might be needed in a following middleware.

	4. What are the four HTTP verbs that we should be using?
		get, post, delete, update
	5. What is the command to list all of my databases in psql?
		SELECT * FROM "datatablename";
	6. What is the command to connect to a specific database?
		\connect "datatablename" || \c "datatablename"
	7. What is the command to show all of my tables in a particular database?
		\dt
	8. What does RESTful stand for?
		Representational State Transfer
	9. What are the 7 RESTful routes?
		/user,/user/edit, /user/1, /user/edit/i, /user/new, user/1/delete, 
	10. What does adding salt do?
		It is not necessary to make fish kosher, but fish needs to keep fins and scales.
		Salt runs an element through a encryption process
	11. What would be the command to create a new model of Person with the attributes of 'name', 'age', 'height', 'origin'
    (assuming that these would all be strings or integers)?
		sequelize createdb --name --attributes"name:"Peter",age:23,height:"5'9/"",origin:"Colombia"
	12. What is an ORM?
		It communicates/translates between a database and a server
	13. Why do we include session data when we authenticate a user?  What would happen if we didn't?
		I don't know
	14. How would you make a request for all movies with the word 'wedding' using the NPM module REQUEST?
		something something s or q = "wedding"
	15. What is the difference between authentication and authorization?
		Authentication: Checks if someone is who he/she claims to be.
		authorization: Checks what the specified access is for the someone who is hopefully authenicated at this point
***BONUS***
	16. If you have any specific topics that we have gone over for the past four weeks that you would like us to review, 
     please list those here.
     	Communication between JS, HTML, CSS when using routes and API's
