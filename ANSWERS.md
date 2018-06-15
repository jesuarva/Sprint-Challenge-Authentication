<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

- All functions in express are middelwares. There are teh main fucntions that handle the CRUD operations, and there are other that performs any kind os logic needed after or before the CRUD handlers.
- In mongoose any helper function placed 'before (PRE)' or 'after (POST)' any Database, Collection or Document method is a middleware.

2.  What does bcrypt do in order to prevent attacks?

- It slow the time to process a Hash.
- It add some sugar to the data to be hashed.

3.  What are the three parts of the JSON Web Token?

- Header: holds the configuration -> Type: jwt and hashing algorithm to be used
- Payload: The information -> Credentials
- Signature (hash): A blend of the other two parts and a 'secret'.
