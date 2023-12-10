# Library-Management-system

Designed RESTful API for managing a library system.

## Installation
 
Install the file and run the command npm init --y inside the terminal to install all the dependencies required.
```
npm init --y
```

## Adding initial data (Mock data)

To add the mock data , run the command seed.js in the terminal.

```
node seed.js
```

## Running the server
 Run the command nodemon index.js to run the server.

 ```
 nodemon index.js
 ```
 
## Endpoints

1.1. To Retrieve all books :

   Endpoint:
   ```
   http://localhost:3000/api/books  (GET Request)
   ```
   Response format : JSON 

2.  To Add a new book :

    Endpoint:
    ```
    http://localhost:3000/api/books   (POST Request)
    ```
    Expected request : 
    
    Request body should contain the details     of the book in JSON format.
                      Book should have these details in JSON format:
                               1.Title (Required)
                               2.Author(Required)
                            3.Description(Optional)
    ```
        Example of format for adding a new book:
    
         "title": "The Home and the World",
         "description": "A novel that explores the conflict between tradition and modernity in early 20th-century Bengal.",
         "author": "Rabindranath Tagore"
    ```


     
3.  To Update Book details:

     Endpoint:
     ```
      http://localhost:3000/api/books/id (PUT Request)
      ```
     Expected Request:

      ->The request should contain book id in the url.(When you add a book, the mongodb 
                         automatically generates an id for that book.You have to use that id to update/delete 
                         the book.                     
                        -> And request body should contain the updated details of book in JSON format.
     
4.  To delete a book :
     Endpoint:
     ```
      http://localhost:3000/api/books/id  (DELETE Request)
      ```

     Expected Request -> The req should contain id of the book in the url.



