# Code Bucket list

---

## Languages to work with in a production app:

 - [x] *JavaScript* 
 - [ ] *C/C++*
 - [ ] *R*

---

## Article ideas / learning
 - Reading list
 	- https://github.com/Developer-Y/Scalable-Software-Architecture
	- https://foundation.nodejs.org/wp-content/uploads/sites/50/2017/09/Nodejs-at-Uber.pdf
	- http://aosabook.org/en/index.html
	- https://github.com/mojoaxel/awesome-regression-testing#online-services

 - WL challenges
	- SSL
	- Docker
	- CI with e2e testing / deployment
	- Monitoring performance & errors
 - Future Web Developments (Orders of magnitude changes)
	- Design tools to markup & styles for all but the most complex of designs. Eg Sketch (it feels close). Essentialy autopilot for front end dev. Note that the same doesn't seem to have happened to server side systems, which is curious.
 - Future Industries to segway into...
	- ML
	- Crisper? Bio tech
 - JS
	- Generators
	- 

---

## Mini project ideas to make:

 - C#: ???
 - JS: Chrome extension: color the background of tabs based on url keywords (eg, "localhost" : dark grey, "staging": red, etc)
 - [Console Madness](https://github.com/ijmccallum/consoleMadness): makes it look like you are doing something phenominal but you're just typing randomly
 - JS: Javascript your Genome: http://genomejs.readme.io/docs/what-do-i-do - 1st get my genome sequenced, then do things with the data!
 - JS: text on the site is whitel, site bg is white. Except for a black dot in the middle with "HI" in it. Click the dot expands another dot of color inside, the black becomes the border.  The readius of the new dot depends on the length of click, but nothing happens until you let go. The color depends on the orientation of the mouse (leave this to be discovered). As the layers of color expand the white text / links of the site are revealed.
 - R: do a [Kaggle](https://www.kaggle.com/competitions) competition.
 - random: map out google location history https://codeburst.io/how-i-created-a-heatmap-of-my-location-history-with-javascript-google-maps-972a2d1be240

---

## Big project ideas

 - [ ] [WikiLogic](https://github.com/WikiLogic/WikiLogic): in progress!
 - [ ] Build some kind of map / plan thing with [WRLD](https://www.wrld3d.com/) here's a [tutorial](https://www.sitepoint.com/building-dynamic-3d-maps/). To link in with Westport & Co possibly.
 - [ ] Use [React](https://facebook.github.io/react/)? to build a learning demo that explains graphically how Molecules, atoms, sub atomic particles, fermions / bosons / spin etc works.
 - [ ] Open Source P2P social network, this must exist already: something that does not connect to a central server & can communicate over wifi / bluetooth / any other available means... built on [Electron](http://electron.atom.io/) 

---

## Tiny project ideas

How long does it take you to run fibonacci to infinity in your browser?
```javascript
var fibCount = 0;
var printFib = function(next, prev){
	fibCount++;
	if (next < Infinity) {
		console.log(fibCount, next);
		printFib(next + prev, next);
	} else {
		console.log(fibCount, next);
		return;
	}
}
console.time('fib to infinity');
printFib(1, 1);
console.timeEnd('fib to infinity');
```
Would be cool to implement this and send the results home somewhere to measure!

Book to read for WL:

probabilistic reasoning in intelligent systems networks of plausible inference

causality models reasoning and inference

Distributes systems stuff:
Kubernetes
 - [x] module 1:https://kubernetes.io/docs/tutorials/kubernetes-basics/cluster-interactive/
 - [ ] module 2: https://kubernetes.io/docs/tutorials/kubernetes-basics/deploy-intro/
helm (distributed systems package manager)

https://codeburst.io/how-i-created-a-heatmap-of-my-location-history-with-javascript-google-maps-972a2d1be240
