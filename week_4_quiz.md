	1. What is NPM?
		a package handler, allows you to import helpful middleware to your computer.
	2. What does CRUD stand for?
		Create, Read, Update, Delete (destroy)
	3. When adding middleware to and Express Application, where would you need to include the middleware after it's been
    installed?  For example, how would you include the body-parser middleware?
    	in the js file that runs your app, right at the top, include var [middleware] = require('[middleware]')
	4. What are the four HTTP verbs that we should be using?
		GET POST PUT DELETE
	5. What is the command to list all of my databases in psql?
		\list
	6. What is the command to connect to a specific database?
		\connect [database name]
	7. What is the command to show all of my tables in a particular database?
		\d
	8. What does RESTful stand for?
		I dunno
	9. What are the 7 RESTful routes?
		I dunno
	10. What does adding salt do?
		encrypts a string
	11. What would be the command to create a new model of Person with the attributes of 'name', 'age', 'height', 'origin'
    (assuming that these would all be strings or integers)?
    	sequelize create:model --name Person --attributes name:STRING,age:INTEGER,height:INTEGER,origin:STRING
	12. What is an ORM?
		Object Relational something
	13. Why do we include session data when we authenticate a user?  What would happen if we didn't?
		So we can track their usage of the site.  Also it helps the user navigate the site quicker because they can store cookies to access previously-accessed data quickly
	14. How would you make a request for all movies with the word 'wedding' using the NPM module REQUEST?
		request('url', function(err,resp,body) {
			if (!err && resp === 200) {
				console.log(body);
				};
			});
	15. What is the difference between authentication and authorization?
		authentication is verifying that you are you, authorization controls what you have access to

***BONUS***
	16. If you have any specific topics that we have gone over for the past four weeks that you would like us to review, 
     please list those here.

     mafukin APIs, son!
