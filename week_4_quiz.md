Chris Reeve

	1. What is NPM?

Node Package Manager: It's a quick way to install JavaScript libraries that can be run on top of the Node.js platform.

	2. What does CRUD stand for?

Create, Read, Update, and Delete

	3. When adding middleware to and Express Application, where would you need to include the middleware after it's been
    installed?  For example, how would you include the body-parser middleware?

You'd use app.use(), and you would generally do it after you've required all of your packages.  You'd also want to make
sure that you've included this particular middleware before other middleware which might use it -- which for body-parser
would probably mean placing it before all other middleware.

	4. What are the four HTTP verbs that we should be using?

GET, POST, PATCH, DELETE

	5. What is the command to list all of my databases in psql?

\list

	6. What is the command to connect to a specific database?

\c database

	7. What is the command to show all of my tables in a particular database?

\d

	8. What does RESTful stand for?

Representational State Transfer

	9. What are the 7 RESTful routes?

1. GET /things - get all things
2. POST /things - create a new thing
3. GET /thing/new - get a form with which a new thing can be created
4. GET /thing/:id - get a particular thing
5. GET /thing/:id/edit - get a form with which to edit a thing
6. PATCH /thing/:id - edit a thing
7. DELETE /thing/:id - delete a thing

	10. What does adding salt do?

It encrypts data, so that sensitive information can be stored in a db or transferred

	11. What would be the command to create a new model of Person with the attributes of 'name', 'age', 'height', 'origin'
    (assuming that these would all be strings or integers)?

sequelize mode:create --name="Person" --attributes="name:string,age:integer,height:integer,origin:string"

	12. What is an ORM?

Object Relational Mapping, which is a way to translate between objects in OOP and tables in SQL databases

	13. Why do we include session data when we authenticate a user?  What would happen if we didn't?

This permits us to associate a site user with a particular computer that they are using.  If we did not do this, the site
would have to have some other way of checking that the person using the machine is the person we think it is.

	14. How would you make a request for all movies with the word 'wedding' using the NPM module REQUEST?

request('http://www.omdbapi.com?s=wedding', function(err, response, body) {
    if (!err && response.statusCode == 200) {
		// Do something with it
    }
});

	15. What is the difference between authentication and authorization?

Authentication validates who the user is, whereas authorization is the user's access rights for the site.

***BONUS***
	16. If you have any specific topics that we have gone over for the past four weeks that you would like us to review, 
     please list those here.

I remain weakest on (1) GIT and (2) measuring the complexity of algorithms, but I don't know that review is the solution.  I think
the solution would simply be to read more about them (using materials that we've already been pointed to).  I've just not yet
had the time to read those materials.

Also, I don't think we covered functional programming in very much depth.  It would be nice to get more practice with
map(), filter() and reduce() in real-world situations -- like in jQuery or object-oriented programming scenarios.

I am a huge fan of the CS theory questions too, but my understanding is that the interviews require us to solve them with
whiteboards.  It might make sense at some point to transition more towards surprise questions at whiteboards, and having
people explain their solutions similar to what actually happens in an interview.

One more thing: People seem to not be very focused on fixing up their Github accounts.  Those people will end up cramming
that process into that last week, which will diminish the time they have for their final project.  It might make sense to
give people a little time to add Bootstrap to our former github repo's now while the material is still fresh (???).