#Registration
   - /api/registration/POST: Register new user by asking for email (a validation code will be send to given email).
    
   - /api/registration/validate/ POST: Validate the creation of new user with the code sent by email.

#Auth
   - /api/auth/token/ POST: Get a new JWT by passing username and password.
    
   - /api/auth/token/refresh/ POST: Get a new JWT by passing an old still valid JWT.
    
   - /api/auth/token/verify/ POST: Verify a token by passing the token in the body.
    
   - /api/auth/password-reset/ POST: Reset users password by sending a validation code in a email.
   
   - /api/auth/password-reset/validate/ POST: Validate password reset token and set new password for the user.
    

#Search
   - /api/search/ GET: Search for ‘products’, or ‘users’. {type: ‘products’, ‘search_string’: ‘Pub’}

#Home
   - /api/home/ GET: Get a list of the best(or newest) rated users for the home screen.

#Products
   - /api/products/ GET: Get the list of all the products.

   - /api/products/new/ POST: Create/Advertise a new product.

   - /api/products/category/<int:category_id>/ GET: Get the all the products by category.

   - /api/products/user/<int:user_id>/ GET: Get the all the products created by a specific user in chronological order.

   - /api/products/<int:id>/ GET: Get the details of a product by providing the id of the user.

   - /api/products/<int:id>/ PATCH: Update a product by id (only by owner or product admin).
   
   - /api/products/<int:id>/ DELETE: Delete a product by id (only by owner or product admin). 
    
#Ratings
   - /api/ratings/new/<int:user_id>/ POST: create a new review.
    
   - /api/ratings/user/<int:user_id>/ GET: Get the list of the reviews/ratings for a single user.
    
   - /api/ratings/user/<int:user_id>/ GET: Get the list of the reviews/ratings by a single user.

   - /api/ratings/<int:rating_id>/ GET: Get a specific review by ID and display all the information.

   - /api/ratings/<int:rating_id>/ PATCH: Update a specific review (only by owner).

   - /api/ratings/<int:rating_id>/ DELETE: Delete a specific review (only by owner).
    
#Users
   - /api/me/ GET: Get the user profile.

   - /api/me/ PATCH: Update the user profile.

   - /api/users/list/ GET: Get all users.

   - /api/users/?search=<str:search_string>/ GET: Search for a user.

   - /api/users/<int:user_id>/ GET: get a specific user profile.
   
#Cart
   - /api/cart/<inst:user_id>/ GET: get all products added to a cart by user id.