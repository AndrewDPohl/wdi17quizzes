

	1. What is NPM? 
		Node Package Manager. Used to install a set of modules that are generally required for applications as well as a huge library of modules that can be installed for specific purposes depending on your needs. 

	2. What does CRUD stand for?
		Create. Read. Update. Delete. 

	3. When adding middleware to an Express Application, where would you need to include the middleware after it's been installed?  For example, how would you include the body-parser middleware?
		You need to define and require it as a variable at the top off app.js. e.g.  
		var bodyParser = require('body-parser');

		And then you need to tell the app to use it in app.js: 
		app.use(bodyParser.urlencoded({extended: true}))


	4. What are the four HTTP verbs that we should be using?
		GET. POST. PATCH/ PUT. DELETE. 


	5. What is the command to list all of my databases in psql?
		\list


	6. What is the command to connect to a specific database?
		\connect (database name)


	7. What is the command to show all of my tables in a particular database?
		\dt


	8. What does RESTful stand for?
		Representational State Transfer. 


	9. What are the 7 RESTful routes?
		LIST 	with 	GET 	/users	
		SHOW 	with 	GET		/users/1	
		EDIT 	with 	GET 	/users/1/edit	
		NEW  	with	GET 	/users/new	
		CREATE	with	POST	/users	
		UPDATE	with 	PUT		/users/1	
		DELETE	with	DELETE	/users/1



	10. What does adding salt do?
		Encrypts a password and adds an additional set of characters at the end of the 'fish' indicated in the function's parantheses to make deciphering a password that much harder versus hashing which justs encrypts the password at the same length of characters as the fish. 


	11. What would be the command to create a new model of Person with the attributes of 'name', 'age', 'height', 'origin'(assuming that these would all be strings or integers)?
		sequelize model:create --name Person --attributes name:string,age:integer,height:integer,origin:string


	12. What is an ORM?
		An object relational mapper, e.g. Sequelize, which maps objects in an app to values in its corresponding database. 


	13. Why do we include session data when we authenticate a user?  What would happen if we didn't?
		To make sure that the person is who they say they are and so that the person doesn't have to keep signing in throughout the session. 
		If we didn't they would get kicked out of the app each time the user changed pages. 


	14. How would you make a request for all movies with the word 'wedding' using the NPM module REQUEST?

		app.get('/movie', function(req,res) {
  		res.render('movie', {movie: {Title: "wedding", Plot: "wedding"}});
		});



	15. What is the difference between authentication and authorization?
		Authentication determines if you are who you say you are via your user & authorization is if you have the right credentials to pass into a given app via your password. 

		In a Knock knock joke format: 

		$"Knock knock"
		>"Who's there?"
		$"Authentication"
		>"Authentication who?"
		$"Authorization"

		=== everybody laughs. iMakeTerribleCodingJokesAsAHobby. 



***BONUS***
	16. If you have any specific topics that we have gone over for the past four weeks that you would like us to review, please list those here.
		- Associations/ foreign keys 
		- TDD
		- APIs
