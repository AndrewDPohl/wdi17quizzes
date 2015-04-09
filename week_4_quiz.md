	1. What is NPM?

NPM is node package manager, which is a command repository for node.js projects.

	2. What does CRUD stand for?

CRUD stands for create, read, update and delete. 

	3. When adding middleware to and Express Application, where would you need to include the middleware after it's been
    installed?  For example, how would you include the body-parser middleware?

I would make sure it was installed correctly in my package.json and then include it at the top of my app.js as a variable. 

	4. What are the four HTTP verbs that we should be using?

GET, POST, PATCH, and DELETE

	5. What is the command to list all of my databases in psql?

\list will show us all the databases

	6. What is the command to connect to a specific database?

I believe it is dbname when in psql. 

	7. What is the command to show all of my tables in a particular database?

\dt will show all the tables

	8. What does RESTful stand for?

RESTful stands for representational state transfer

	9. What are the 7 RESTful routes?

Can't remember the 7 routes off the top of my head. 

	10. What does adding salt do?

Adding salt basically encrypts data that you want encrypted like passwords. E.g. salting the fish. 

	11. What would be the command to create a new model of Person with the attributes of 'name', 'age', 'height', 'origin'

sequel create:model --name Person --attributes="name: string, age: integer, height:string"

    (assuming that these would all be strings or integers)?
	12. What is an ORM?

Object relational mapping

	13. Why do we include session data when we authenticate a user?  What would happen if we didn't?

We include session data so that a user can be able to save data when they use the content of the Site. Otherwise every time they log in it will simply reset anything they did. Which would be frustrating if every time I logged into facebook I had to find all my friends and recreate my profile again. 

	14. How would you make a request for all movies with the word 'wedding' using the NPM module REQUEST?

var request = require('wedding');
request(function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})

	15. What is the difference between authentication and authorization?

Authentication is the means in which we identify a user for who they are, such as having them input their email and password to identify themselves when they access content. Authorization is what data they are allowed access to once in the content. So for example, on facebook I have to authenticate myself by typing in an email and password, and I can set authorization limits on who can see my profile and who can access my profile. 

***BONUS***
	16. If you have any specific topics that we have gone over for the past four weeks that you would like us to review, 
     please list those here.