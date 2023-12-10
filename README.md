# Library-Management-system
Designed RESTful API for managing a library system.

1.Install the file.
2.Run the command npm init to install all the dependencies required for this project.
3.Run the command nodemon index.js to run the server.

End Points:
1. To Retrieve all books :
   Endpoint -> http://localhost:3000/api/books  (GET Request)
   Response format : JSON   
2.  To Add a new book :
    Endpoint -> http://localhost:3000/api/books   (POST Request)
    Expected request : Request body should contain the details of the book in JSON format.
                      Book should have these details:
                               1.Title (Required)
                               2.Author(Required)
                               3.Description(Optional)
     
3.  To Update Book details:
     Endpoint -> http://localhost:3000/api/books/id (PUT Reuest)
     Expected Request -> The request should contain book id in the url.(When you add a book, the mongodb 
                         automatically generates an id for that book.You have to use that id to update/delete 
                         the book.
                         And request body should contain the updated details in JSON format.
     
4.  To delete a book :
     Endpoint -> http://localhost:3000/api/books/id  (DELETE Request)
     Expected Request -> The req should contain id of the book in the url.
    

