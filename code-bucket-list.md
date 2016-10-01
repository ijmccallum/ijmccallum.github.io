#Code Bucket list

---

##Languages to work with:

 - [x] *JavaScript* 
 - [ ] *C#*

* checked boxes don't actually mean I've "finished" learning a language. That would be insane.

---

##Mini project ideas to make:

 - C#: ???
 - JS: Chrome extension: color the background of tabs based on url keywords (eg, "localhost" : dark grey, "staging": red, etc)
 - [Console Madness](https://github.com/ijmccallum/consoleMadness): makes it look like you are doing something phenominal but you're just typing randomly
 - JS: Javascript your Genome: http://genomejs.readme.io/docs/what-do-i-do - 1st get my genome sequenced, then do things with the data!

---

##Big project ideas

 - [ ] [WikiLogic](https://github.com/WikiLogic/WikiLogic): in progress!
 - [ ] Use [React](https://facebook.github.io/react/)? to build a learning demo that explains graphically how Molecules, atoms, sub atomic particles, fermions / bosons / spin etc works.
 - [ ] Open Source P2P social network, this must exist already: something that does not connect to a central server & can communicate over wifi / bluetooth / any other available means... built on [Electron](http://electron.atom.io/) 

---

##Tiny project ideas

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
