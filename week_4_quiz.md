	Jessica Lombera 

	1. What is NPM? 
	Answer: NPM stands for Node Package Manager and it runs in the command line, also used for javascript
	
	2. What does CRUD stand for?
	Answer: CRUD stands for Create, Read, Update and Delete/Destroy.

	3. When adding middleware to and Express Application, where would you need to include the middleware after it's been
    installed?  For example, how would you include the body-parser middleware?
	Answer: you will need to include it on the top of the app.js file you are working on
	for example you will need to do, var express = require('express') and var session = require('express-session')

	4. What are the four HTTP verbs that we should be using?
	Answer: Get, Post, Put, Delete

	5. What is the command to list all of my databases in psql?
	Answer: \list

	6. What is the command to connect to a specific database?
	Answer: \connect database

	7. What is the command to show all of my tables in a particular database?
	Answer: \dt

	8. What does RESTful stand for?
	Answer: Representational State Transfer, means routes and HTTP verbs should compliment each other in a meaningful way to map onto CRUD

	9. What are the 7 RESTful routes?
	Answer: list, show, edit, new, create, update, and delete
	
	10. What does adding salt do?
	Answer: adds salt to the fish, encryption, makes it harder to break

	11. What would be the command to create a new model of Person with the attributes of 'name', 'age', 'height', 'origin'(assuming that these would all be strings or integers)?
	Answer: sequelize model:create --name="Person" --attributes="name:string, age:integer, height:integer, origin:string"

    
	12. What is an ORM?
	Answer: object relational mapping

	13. Why do we include session data when we authenticate a user?  What would happen if we didn't?
	Answer: because it will run with every request, we need to make sure if the user is new or already stored in our database, if we didnt, we would never be able to tell if a user is real or not. 

	14. How would you make a request for all movies with the word 'wedding' using the NPM module REQUEST?
	Answer: var request = require('request');
	pp.get('/search', function(req,res) {
  var queryParams = req.query.q;
  var url = "http://www.omdapi.com?s="+queryParams;
  request(url, function(err,resp,body) {
  	if ( !err && res.statusCode === 200){
  		var jsonData = JSON.parse(body);
  		res.render('search', {movies: jsonData.Search });

	15. What is the difference between authentication and authorization?
	Answer: They both sound the same but authentication is making sure someone is real and authorization is what the someone is authorized to do in your app. For example, in facebook, you can edit your friends list to authorize what posts or pictures they can see on your profile and authenticate is when your logging into facebook if you have a profile set up or sign up to one if you dont have a profile.

***BONUS***
	16. If you have any specific topics that we have gone over for the past four weeks that you would like us to review, 
     please list those here.
	The DOM and Bootstrap,
	Testing
	API again


