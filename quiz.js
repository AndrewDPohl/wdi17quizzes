1. What is NPM? 

npm is a package manager for JavaScript, and is the default for Node.js. 


2. What does CRUD stand for?

CRUD, Create Read Update Delete 


3. When adding middleware to and Express Application, where would you need to include the middleware after it's been installed?  For example, how would you include the body-parser middleware?

In the terminal command line I would: 'run npm install --save body-parser' within the directory of the Express Application to include the middleware inside the package.json file.


4. What are the four HTTP verbs that we should be using?

Post Get Put Delete


5. What is the command to list all of my databases in psql? 

\list or \l: list all databases


6. What is the command to connect to a specific database?

-d DBNAME specify database name to connect to


7. What is the command to show all of my tables in a particular database?

\db


8. What does RESTful stand for?

Representational State Transfer (REST)


9. What are the 7 RESTful routes?

1) list /users GET 
2) show /users/1 GET
3) edit /users/1/edit GET
4) new /users/new GET
5) create /users POST 
6) update /users/1 PATCH 
7) delete /users/1 DELETE 


10. What does adding salt do?

It takes a normal password and creates another version mixed with numbers, symbols, and letters for security and to protect passwords from being visibal.


11. What would be the command to create a new model of Person with the attributes of 'name', 'age', 'height', 'origin' (assuming that these would all be strings or integers)?

sequelize model:create --name="User" --attributes="name:string, age:integer, height:string, origin:string"

12. What is an ORM?

Object-relational mapping


13. Why do we include session data when we authenticate a user?  What would happen if we didn't?

We include session data to we can identify a users profile to help authenticate them of who they are. If we didn't then we could not specify who the user is to authenticate them.


14. How would you make a request for all movies with the word 'wedding' using the NPM module REQUEST?

www.omdbapi.com?s=wedding


15. What is the difference between authentication and authorization?

authentication is establishing WHO YOU ARE and authorization is what you are ALLOWED TO DO.






