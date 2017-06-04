# Dockerizing Wikilogic

To get Wikilogic running locally we have to boot up three seperate services, every single time:

1. Start up Neo4j.
2. Open a terminal window, cd into the API repo & boot up node.
3. Open the project (I've been using VS Code & it's super handy built in command line), cd into the react app, boot up webpack. 
4. Open the browser!

It may not look bad but in the evening after a day in the office, you're not at your most motivated, that process can make the difference between being awesome and watching Netflix. And now we've arrived at deployment. Even with only the slightest understanding of Docker the motivation to Dockerize is clear, and I haven't even mentioned setting up new development environments.

I'm learning as I go. The following is the process I went through:

---

## Planning & Building the images

For now we have a database (Neo4j), an API (Express), and our static files are being served by webpack's dev server. That's 3 docker containers right there, each will need their own image. So in each repo I added a `Dockerfile`

### First up, the static file server

It looked like the easiest, so that's the first. Webpack is phenominal for developing, but for production we're going to have to outsource to Nginx. As far as I'm aware, it's pretty much the default choice for this kind of thing. You can start your Dockerfile with `FROM nginx` but I quite like controlling things so `FROM ubuntu` followed by a basic nginx set up & voila; a static file server. 

_Gotcha for those on windows: I'm on my home pc, Windows 10 "home edition" so I had to run Docker Toolkit which sets itself up within Oracle's Virtualbox. That means that when your image is running & exposes it's port (in my case 8080) it's exposed to the VM run by Virtualbox, not your system. You'll have to map the VM's port to your machine._

### Next, the API server

Because I'm more comfortable with Node that that big scary graph db (I'm kidding Neo4j, it's really quite friendly I'm just not that experianced with it (Later edit - I take that back, it's a big scary RAM hogger! But it is doing amazing things, so I've begrudginly bumped up the RAM on the server)).

This time I did actually start with a default set up, `FROM node`, copied in the package.json, `npm install`ed, copied the app in, and ran it. A little port mapping magic from the VM and we have a second image up!

### Finally, the DB server

`FROM neo4j:3.0` and that might just be it, except Douglas has been working on some procedures which I had to sey up to copy in. But that's it! 3 images buildable, now to link them all up together.

---

## `docker-compos`ing them all together

On my local I have a "wikilogic" directory in which all the repos live, which turns out to be the perfect place to pop in a `docker-compose.yml` file to build them all together! Going through in the same order:

### The Static server in a container. 

I pointed `build` at the react-app repo (it'll pick up the relevant `Dockerfile` within that directory), mapped ports from the container (`80:80`) to the world, and fired it up `docker-compose up` (from within the docker terminal - not sure what that brings to the table but I'm just going with it). Easy!

### The API server in a container.

Feels like we're nearly there! How hard can it be? Point `build`, map `ports`, `docker-compose up`, bada bing!

### The DB server in a container.

Last one, here we go! Ah wait, this is going to get complex - the DB shouldn't be exposed to the world & the API needs to talk to it. Few things to do here:

In the API's part of the configuration
 - add the service name for the db to the api's `links`, in my case `db`
 - I also set up the app to read an environment variable to use as a db connection string `NEO4J_URL=http://<db username>:<db password>@db:<the db's port number>`

In the db's part of the configuration
 - This is a default environment variable the neo docker image is expecting `NEO4J_AUTH=<db usernme>/<db password>`

Phew! That's it - they're all set up! Almost...

---

## Final compose step: a proxy server & a little protection.

To start I wen't with creating a 4th container to run an nginx proxy server. But there's already an nginx server up & running - the static server. So I added some more configuration to the nginx.conf file (which you can have a look at in the react-app repo) which forwards any requests for `/api` to the api docker container which is set as an upstream server `server api:<port number>`. That works because in the docker-compose file, within the static container's configuration areae I added `api` to the `links` part. When you do that, Docker add's an entry to the static container's host file mapping `api` to whatever ip number the api container gets. Very simple, very cool.

Now before pushing this all live, a little password protection will probably go a long way to fend off the bots. Fortunatly because all the requests are now being fielded by the one nginx server in the static service container (it should probably be called the proxy now) - I can set up a password at the server level of that nginx.conf file and it'll cover everything! Done! Tada.

---

## Deployment

I've skipped the description of using `docker-machine` to deploy (too much to cover and it's getting late as I write), but it makes life fantastically easy. Up until now, it's been pointing all my `docker-compose` commands into the Virtualbox VM, but to deploy to produciton, I switch the `docker machine` to the online server and run `docker-compose up --build -d` (`--build` rebuilds the images and `-d` sets it off as a daemon so it won't die when I close the terminal). Wait a few mins and it's up!! (with the caveat that we were set up on a tiny virtual server to keep inital costs down but it wouldn't start because Neo4j sucked up all the RAM). 

---

## Next up

There's a DevOps project in the wikilogic github organisation where you can have a peek at what's still hanging out in our todo list. For now - setting up overriding docker configuration for a Dockerized development environment - because running `docker-compose up` sure beats the startup procedure I mentioned at the start.