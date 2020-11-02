# Screenshots
add gifs

# Project Pinocchio
add purpose

# Setup Guide 
<strong>Project and Frontend</strong>

1. Install node: https://nodejs.org/en/download/
2. Update npm: <code>$ sudo npm install -g npm@latest</code>
3. Install Docker: https://docs.docker.com/get-docker/
4. Clone the repository: <code>$ git clone</code>
5. Install all dependencies: <code>$ cd frontend/ $ npm i</code> 
6. Start the frontend React app: <code>$ cd frontend/ $ npm start</code>
7. Test if the React app is running correctly by accessing "http://localhost:3000/"

<strong>Backend and Docker</strong>

8. Build the docker image: <code>$ docker build -t registry_name .</code>
9. Setup PyCharm with a remote interpreter for the docker container:
* PyCharm settings > Build, Execution, Deployment > Docker > virtual path "/backend" and local path "C:\Users\MyUser\PycharmProjects\motion-deploy\backend"
* PyCharm settings > Project > Add Interpreter > Docker Compose > Service: "backend" + Python interpreter path "/opt/conda/envs/backend/bin/python"
* Make PyCharm Run/Debug configurations > 
    * Script path: "C:\Users\MyUser\PycharmProjects\motion-deploy\backend\manage.py"
    * Command: <code>runserver 0.0.0.0:8000</code>
    * Path mapping: "C:/Users/alex_/PycharmProjects/motion-deploy/backend=/backend"
* Make PyCharm Run/Debug configurations > Same as above with command <code>makemigrations</code>
* Make PyCharm Run/Debug configurations > Same as above with command <code>migrate</code>
10. Test if the server is running correctly by accessing "http://localhost:8000/admin/"

# Architecture
add

# Endpoints
example
<strong>Registration</strong>

<code>api/auth/registration/</code> POST: Register a new user by asking for an email (send email validation code)

<code>api/auth/registration/validation/</code> POST: Validate a new registered user with a validation code sent by email

