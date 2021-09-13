# CRUD

1. In your own words, describe what each group of status code represents:

   - 100’s = These are informational status codes; they usually tell the client that the header part of the request has been received and the server will try to comply with a transmission demand of the client
   - 200’s = These are the success codes. They tell the client that its request was accepted. In case of asynchronous processing of a request (202),
   - 300’s = These are redirection codes. They tell the client that the resource they are requesting isn’t available at the expected location anymore
   - 400’s = These are the client error codes. They are all about invalid requests a client sent to a server. There are several causes to this
   - 500’s = These are the server error codes. Often they indicate problems with overwhelmed servers or unreachable servers behind proxies

2. What is a status code 202?

   Accepted

3. What is a status code 308?

   Permanent Redirect

4. What code would you use if an update didn’t return data to a client?

204 No Content

5. What code would you use if a resource used to exist but no longer does?

410 Gone

6. What is the ‘Forbidden’ status code?
   Additional Resources?

   The client has authorized or doesn’t need to authorize itself, but still has no permissions to access the resource.

<br>

1. Why do we need to pull our MongoDB database string out of our server and put it into our .env?

   because i will provide username and password on that link

2. What is middleware? 3. What does app.use(express.json()) do?

- basically a function that will the receive the Request and Response objects,
- decrypt the response data from the backend to a json shape

3. What does the /:id mean in a route?

the specified object that we need to target

4. What is the difference between PUT and PATCH?

- the **PUT** method uses the request URI to supply a modified version of the requested resource which replaces the original version of the resource

- the **PATCH** method supplies a set of instructions to modify the resource

5. How do you make a default value in a schema?

   by define it on the specified file

6. What does a 500 error status code mean?

   Internal Server Error server error response

7. What is the difference between a status 200 and a status 201?

- **200** It means, simply, that the request was received and understood and is being processed.
- **201** status code indicates that a request was successful and as a result, a resource has been created
