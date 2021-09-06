# API

![api image](https://sdk.finance/wp-content/uploads/2018/11/api-in-business.png)

1. What does REST stand for?

   Representational State Transfer

2. REST APIs are designed around a **resources**

3. What is an identifier of a resource? Give an example.
   a URL that uniquely identifies that resource. For example, the URL for a particular customer order might be:
   `https://adventure-works.com/orders/1`

4. What are the most common HTTP verbs?

   **GET, POST, PUT, PATCH, and DELETE**

   - **GET** retrieves a representation of the resource at the specified URI. The body of the response message contains the details of the requested resource.
   - **POST** creates a new resource at the specified URI. The body of the request message provides the details of the new resource. Note that POST can also be used to trigger operations that don't actually create resources.
   - **PUT** either creates or replaces the resource at the specified URI. The body of the request message specifies the resource to be created or updated.
   - **PATCH** performs a partial update of a resource. The request body specifies the set of changes to apply to the resource.
   - **DELETE** removes the resource at the specified URI.

5. What should the URIs be based on?

   should be based on nouns not verbs

6. Give an example of a good URI.

   `https://adventure-works.com/orders`

7. What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing?

   it's happened when you have a large number os small resources and **NO** it's better not to don it

8. What status code does a successful GET request return?

   HTTP status code 200 (OK).

9. What status code does an unsuccessful GET request return?

   the method should return **404 (Not Found)**

10. What status code does a successful POST request return?

    it returns **HTTP status code 201** (Created).

11. What status code does a successful DELETE request return?

    the web server should respond with **HTTP status code 204** (No Content), indicating that the process has been successfully handled
