1.) What is NPM? 
	node package manager

2.) What does CRUD stand for? 
	Create, Read, Update, Delete
3.) When adding middleware to and Express Application, where would you need to include the middleware after it's been installed? For example, how would you include the body-parser middleware? 

add it to the app.js file at the beginning

var bodyParser = require("body-parser");

4.) What are the four HTTP verbs that we should be using? 
	GET POST PUT DELETE
5.) What is the command to list all of my databases in psql? 
	\list
6.) What is the command to connect to a specific database? 
	\c databasename
7.) What is the command to show all of my tables in a particular database? 
	\dt
8.) What does RESTful stand for? 
	Don't remember.
9.) What are the 7 RESTful routes? 
GET		/users
POST	/users
GET		/users/:id
GET		/user
PATCH	/users/:id
GET		/users/:id/edit
DELETE	/users/:id
10.) What does adding salt do? 

	adds a hash to your password(salt to fish = tastier fish)

11.) What would be the command to create a new model of Person with the attributes of 'name', 'age', 'height', 'origin' (assuming that these would all be strings or integers)? 

sequelize model:create --name Person --attribute "name:STRING, age:INTEGER, height:INTEGER, origin: STRING"
12.) What is an ORM? 
object relation mapping

13.) Why do we include session data when we authenticate a user? 
What would happen if we didn't? 
	So the authenticated user can only have access to the data that he/she is authorized for.

14.) How would you make a request for all movies with the word 'wedding' using the NPM module REQUEST? 


15.) What is the difference between authentication and authorization?

	Authentication is to determine who a user is.
	Authorization is what the user is able to do once he is authenticated.

BONUS 16.) If you have any specific topics that we have gone over for the past four weeks that you would like us to review, please list those here.