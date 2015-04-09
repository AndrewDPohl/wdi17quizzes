	1. What is NPM?

	Node package manager. It manages dependencies for node express apps. 

	2. What does CRUD stand for?

	Create, Read, Update, Delete

	3. When adding middleware to and Express Application, where would you need to include the middleware after it's been
    installed?  For example, how would you include the body-parser middleware?

    It would have to be 'required' in the app.js file

	4. What are the four HTTP verbs that we should be using?

	GET, POST, PATCH/PUT (patch is more intuitive, sorry Mike), and DELETE

	5. What is the command to list all of my databases in psql?

	\l

	6. What is the command to connect to a specific database?

	\d database

	7. What is the command to show all of my tables in a particular database?

	\dt

	8. What does RESTful stand for?

	Representational State Transfer

	9. What are the 7 RESTful routes?

	Index, New, Create, Show, Edit, Update, Delete

	10. What does adding salt do?

	hashes a password

	11. What would be the command to create a new model of Person with the attributes of 'name', 'age', 'height', 'origin'
    (assuming that these would all be strings or integers)?

	Person.create({
		name: name,
		age: age, 
		height: tall, 
		origin: city
		});

	12. What is an ORM?

	Object Relational Mapper

	13. Why do we include session data when we authenticate a user?  What would happen if we didn't?

	So the authenicated state of the user persists. If we didn't, the user wouldn't be able to move through our application.

	14. How would you make a request for all movies with the word 'wedding' using the NPM module REQUEST?

	app.get('/movies', function(req,res) {
		render('movies', {movie: movie}); 
	}); 

	15. What is the difference between authentication and authorization?

	Authentication is like presenting credentials to get access to a building, authorization is what rooms you can access when you're inside. 

***BONUS***
	16. If you have any specific topics that we have gone over for the past four weeks that you would like us to review, 
     please list those here.

     - APIs
