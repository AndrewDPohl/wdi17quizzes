	1. What is NPM?

	node package manager

	2. What does CRUD stand for?

	create read update delete
	3. When adding middleware to and Express Application, where would you need to include the middleware after it's been
    installed?  For example, how would you include the body-parser middleware?

	at the top you would need to include it. var body-parser = require('body-parser')

	4. What are the four HTTP verbs that we should be using?

	GET, POST, PUT, DELETE

	5. What is the command to list all of my databases in psql?

	\list

	6. What is the command to connect to a specific database?

	psql <databasename>

	7. What is the command to show all of my tables in a particular database?
	
	\d 

	8. What does RESTful stand for?
	
	REcommended STructure 

	9. What are the 7 RESTful routes?
	
	list, show, edit, new, create, update, delete

	10. What does adding salt do?

	Adds encryption

	11. What would be the command to create a new model of Person with the attributes of 'name', 'age', 'height', 'origin'
    
	create model --new Person --attributes name: string, age: number, height, number, origin boolean; 	

    (assuming that these would all be strings or integers)?
	12. What is an ORM?
	

	object relational mapper? 

	13. Why do we include session data when we authenticate a user?  What would happen if we didn't?

	so that when they are logged in they dont have to keep logging in while navigating the site 

	14. How would you make a request for all movies with the word 'wedding' using the NPM module REQUEST?

	? 

	15. What is the difference between authentication and authorization?
	
	Authentication is figuring out if you are who you say you are and authroization is like "clearance "

***BONUS***
	16. If you have any specific topics that we have gone over for the past four weeks that you would like us to review, 
     please list those here.
