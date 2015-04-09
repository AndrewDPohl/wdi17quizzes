	1. What is NPM?
	A: Node Packagae Manager. It allows you to install packages that you can get from npmjs.com which you can then use while you're developing in nodeJS. The packages are like libraries, and you can use what's in them.

	2. What does CRUD stand for?
	A: Create, Read, Update, Destroy.

	3. When adding middleware to an Express Application, where would you need to include the middleware after it's been
    installed?  For example, how would you include the body-parser middleware?
	A: You would put it in the app.js file you've created, which is the controller for your app.

	4. What are the four HTTP verbs that we should be using?
	A: GET, POST, UPDATE, DELETE

	5. What is the command to list all of my databases in psql?
	A: \l

	6. What is the command to connect to a specific database?
	A: \connect <database name>

	7. What is the command to show all of my tables in a particular database?
	A: \d

	8. What does RESTful stand for?
	A: Really Eventful Statistics Times - ful

	9. What are the 7 RESTful routes?
	A: list, show, edit, create, update, new, delete (lsecund)

	10. What does adding salt do?
	A: Once a user has chosen a password (Del's fish), salt adds on a garbaldy-guck to it. Then the fish and salt together get hashed/encrypted into a 'passwordDigest'
	
	11. What would be the command to create a new model of Person with the attributes of 'name', 'age', 'height', 'origin'
    (assuming that these would all be strings or integers)?
	A: something like: db.create:model --Person --attributes='name':string,'age':integer,'height':integer

	12. What is an ORM?
	A: Object Routing Mapper: it connects your js objects to your database, so that you don't have to write SQL code. Example is Sequelize.

	13. Why do we include session data when we authenticate a user?  What would happen if we didn't?
	A: By adding a session, we are able to remember the activity of the user (who has logged in), through using cookies. If we didn't implement this, the data from the user's session would be lost once they've logged off.

	14. How would you make a request for all movies with the word 'wedding' using the NPM module REQUEST?
	A: at node prompt: 

	request(https://www.omdb.com/?s="wedding", function(err, req, resp) {
			if (!err && req. === 200);
			return resp;
		});


	15. What is the difference between authentication and authorization?
	A: authentication proves that you are who you say you are, usually by checking a username and password combo. Authorization comes after you've been authenticated, and determines what you have access to.

***BONUS***
	16. If you have any specific topics that we have gone over for the past four weeks that you would like us to review, 
     please list those here.
    A: Going over HTTP APIs again would be helpful. Thanks.

