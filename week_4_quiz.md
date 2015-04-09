1.) What is NPM? 
	
	A package manager.

2.) What does CRUD stand for?

	create, read, update, delete

3.) When adding middleware to and Express Application, where would you need to include the middleware after it's been
    installed?  For example, how would you include the body-parser middleware?

    I would add it to the main js file, just before adding the routes.

4.) What are the four HTTP verbs that we should be using?

	get, post, update(patch), delete.

5.) What is the command to list all of my databases in psql?
		
		\dt

6.) What is the command to connect to a specific database?

	\c databaseName (could also use \connect)

7.) What is the command to show all of my tables in a particular database?

	SELECT * FROM databaseName

8.) What does RESTful stand for?

	Representational state transfer

9.) What are the 7 RESTful routes?

	list, show, edit, new, create, update, delete
10.) What does adding salt do?

	adds random characters to passwords

11.) What would be the command to create a new model of Person with the attributes of 'name', 'age', 'height', 'origin'
    (assuming that these would all be strings or integers)?

    sequelize model:create --name Person --attributes name:string,age:integer,height:integer,origin:string

12.) What is an ORM?

	Object relational mapping, it transforms data into objects for use in a variety of databases/frameworks(?).

13.) Why do we include session data when we authenticate a user?  What would happen if we didn't?

	We do this so we can track what a user does after loggin in/creating an account. If we didn't do this, we'd have no way of attaching user activity to a specific user.

14.) How would you make a request for all movies with the word 'wedding' using the NPM module REQUEST?

	I would require the request module in my js. file. Beyond that, I'm not sure. 

15.) What is the difference between authentication and authorization?

	Authentication is way to identify and confirm a given user. Authorization refers to user permissions, what the user is allowed to do.

***BONUS***
16.) If you have any specific topics that we have gone over for the past four weeks that you would like us to review, 
     please list those here.

	I didn't absorb the api lesson today. Off to do the homework now, and could also use a review and/or time exploring this topic in more depth.

