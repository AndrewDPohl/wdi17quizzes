
1. What is NPM?
  Node Package Manager

2. What does CRUD stand for?
  Create, Read, Update, Destroy

3. When adding middleware to and Express Application, where would you need to include the middleware after it's been
    installed?  For example, how would you include the body-parser middleware?
    You can make the middleware into a variable such as doing:
    var bodyParser = require('body-parser');
    and then add an app.use according to the applications specifications.

4. What are the four HTTP verbs that we should be using?
  use, get, post, put/patch, delete/destroy

5. What is the command to list all of my databases in psql?
  \l

6. What is the command to connect to a specific database?
  \c <database>
7. What is the command to show all of my tables in a particular database?
  \d 
8. What does RESTful stand for?
  Rabbits, Eat, Sandwiches, Tuesdays.  redirect explain something true

9. What are the 7 RESTful routes?
  /signup, /login, /profile, /user, /, /contact, /about 

10. What does adding salt do?
  adds a randomly created string of characters to add complexity to a password.

11. What would be the command to create a new model of Person with the attributes of 'name', 'age', 'height', 'origin'
    (assuming that these would all be strings or integers)?
    sequelize model:create --name="Person" --attributes="name:string, age:integer, height:integer, origin:text"

12. What is an ORM?
  Object Reactionary Model?
13. Why do we include session data when we authenticate a user?  What would happen if we didn't?
  To create cookies so the user doesn't have to login all in every page. 
14. How would you make a request for all movies with the word 'wedding' using the NPM module REQUEST?
  request(http://www.omdbapi.com?s=wedding  
15. What is the difference between authentication and authorization?
  Authentication is Who ARE YOU? Authorization is what you have access to once you've logged in
***BONUS***

16. If you have any specific topics that we have gone over for the past four weeks that you would like us to review, 
     please list those here.
     Authorization hasn't been covered yet, also creating a relationship for Users and applying authorization to their information. 
