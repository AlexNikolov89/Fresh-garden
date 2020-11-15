 # Production URL
https://pinocchio.propulsion-learn.ch/shop 15.11.2021

# Tips and Tricks
* Go into the running container for various reasons <code>$ docker exec -ti container_id bash</code> (<code>$ docker ps</code> for container_id)
* <code>makemigrations, migrate and runserver</code> with <code>$ python manage.py your_command</code>
* Use the Debbuger for REST API development
    * Set a breakpoint
    * Evaluate datastructures and expressions with the PyCharm Evaluate Function
    * Step over for run down of your code
* Check the "Network" Tab of your browser inspect for request / fetch activities

# Guide for local development
1. Commit you working branch to not loose changes <code>$ git add . $ git commit -m "message"</code>
2. Delete local development branch <code>$ git branch -d development</code>
3. Checkout new local development branch <code>$ git checkout -b development</code>
4. Pull latest development branch from gitlab <code>$ git pull origin development</code>
5. Merge your working branch into your fresh pulled local development branch 
    * Be on development branch <code>$ git merge your-branch-to-integrate</code>
    * Resolve conflicts locally via the "Commit" > Resolve Tab on the left
    * Commit after merge (tip: to save and quit the command line commit editor "vim" <code>$ :wq</code>)
6. Create your a new working branch <code>$ git checkout -b your-branch-name</code> (e.g., branch name: create-login, connect-serializer, ...)
7. Start remote interpreter (Docker containers) with the configured PyCharm command <code>RUNSERVER</code>
8. Start frontend react app <code>$ cd frontend/ $ npm start</code>
9. Happy Hacking!
10. Commit after every new and working feature <code>$ git add . $ git commit -m "login page styling 85% done"</code>
11. After several features push to GitLab development branch<code>$ git push origin your-branch-name</code>
    * Consider pulling and merging <strong>development</strong> first locally if it got updated (repeat 1. to 5) 
    * Also only push code which works locally    
12. Create a merge request on GitLab to <strong>development</strong> branch and assign the DevOps person 

# Drop a Postgres Database 
Warning: this will delete all production data if not backed up and reintegrated properly

