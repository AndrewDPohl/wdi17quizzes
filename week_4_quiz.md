	1. What is NPM?
	Node package manager

	2. What does CRUD stand for?
	Create Read Update Destroy (or maybe Delete)

	3. When adding middleware to and Express Application, where would you need to include the middleware after it's been
    installed?  For example, how would you include the body-parser middleware?
	app.use statements for each middleware program that we want to include.  I can't recall the exact syntax / parameters for body-parser.  It would be something like: app.use('body-parser', {STUFF HERE});

	4. What are the four HTTP verbs that we should be using?
	GET
	POST
	PUT / PATCH
	DESTROY

	5. What is the command to list all of my databases in psql?
	\l

	6. What is the command to connect to a specific database?
	\c "database_name_here" (quotes are sometimes optional, sometimes required)

	7. What is the command to show all of my tables in a particular database?
	\d+ "table_name_here"
	
	8. What does RESTful stand for?
	Representational state something something...

	9. What are the 7 RESTful routes?
	Show (one item)
	Index (show all items)
	Create (new item)
	Delete
	Edit (update)
	6 = ???
	7 = ???

	Even though I don't remember them all right now, Dennis covered them well and I have good notes  and would rather not review them in class.  It feels like there are more critical topics!

	10. What does adding salt do?
	It makes password digests longer and more confusing to prying eyes.  Technically, somehow it makes the "is this password correct?" function operate much more quickly.

	11. What would be the command to create a new model of Person with the attributes of 'name', 'age', 'height', 'origin'
    (assuming that these would all be strings or integers)?
    Sequelize model:create --name Person --attributes name:string,age:integer,height:string,origin:string;

    I would love to review Sequelize more and especially ASSOCIATIONS in Sequelize.  Finding and including other data in the results table is not clear to me.

	12. What is an ORM?
	Object Relational Manager -- the link that translates between SQL database (or any database) and the JS code

	13. Why do we include session data when we authenticate a user?  What would happen if we didn't?
	Session data tracks a user's access to a site from page to page, request to request.  Without session data (aka cookies), every new page that a user requests would first require them to re-enter their credentials.  
	
	14. How would you make a request for all movies with the word 'wedding' using the NPM module REQUEST?
	I have not done tonight's homework yet.  I am doing this quiz first.  I saw it in class but don't recall it yet.


	15. What is the difference between authentication and authorization?
	Authentication: Who are you?  Prove it!
	Authorization: What are you allowed to do on the site?

***BONUS***
	16. If you have any specific topics that we have gone over for the past four weeks that you would like us to review, 
     please list those here.

     a)  I would love to review Sequelize more and especially ASSOCIATIONS in Sequelize.  Finding and including other data in the results table is not clear to me.

     b) AUTHORIZATION.  How do you implement this in a website?  What is the right way to check whether a user has the right to do different things?  I don't recall discussing this, and the Daily Planet example seems unusual to me.
