1.) What is NPM? 
node package manager

2.) What does CRUD stand for? 
create, read, update, destroy

3.) When adding middleware to and Express Application, where would you need to include the middleware after it's been installed? For example, how would you include the body-parser middleware? 

add it in the main index/app.js file for the application by requiring it: 
var bodyParser = require('body-parser');

4.) What are the four HTTP verbs that we should be using? 
GET, POST, PUT(or PATCH), DELETE

5.) What is the command to list all of my databases in psql?
\list

6.) What is the command to connect to a specific database? 
\connect [database]

7.) What is the command to show all of my tables in a particular database? 
once connected to said database: 
\dt

8.) What does RESTful stand for? 
i don't remember the actual words.

9.) What are the 7 RESTful routes?  
users
users/:id
users/:id/edit
users/:id/delete
users/create
...uhm...

10.) What does adding salt do? 
makes the fish taste yummy, but really: it encrypts the input (normally a password). 


11.) What would be the command to create a new model of Person with the attributes of 'name', 'age', 'height', 'origin' (assuming that these would all be strings or integers)? 
sequelize model:create --name Person --attributes name:string,age:string,height:integer,origin:string

12.) What is an ORM? 
Object relation mapper (or something like that); it takes away all the hard work of creating and linking databases with our apps

13.) Why do we include session data when we authenticate a user? What would happen if we didn't? 
We include the session data so that we can keep track of the fact that a user is logged in. If we didn't, it would be rather hard to display that user's personal information. 

14.) How would you make a request for all movies with the word 'wedding' using the NPM module REQUEST? 

var imdbID = 'wedding';
var url = "http://www.omdbapi.com?q="+imdbID;
request(url, function(err,resp,body){
  if (!err && resp.statusCode === 200) {
  var jsonData = JSON.parse(body);
  res.render('search', {movies:});  //assuming this ejs view is set up
  }
  })

15.) What is the difference between authentication and authorization?
Authentication asks the questions: who are you? are you who you say you are? do i (the database) know who you are?

Authorization is in charge of displaying the correct information that the authenticated user has access to. 

BONUS 16.) If you have any specific topics that we have gone over for the past four weeks that you would like us to review, please list those here.

