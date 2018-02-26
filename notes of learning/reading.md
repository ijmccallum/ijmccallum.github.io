## resource lists

- [ ] https://github.com/Developer-Y/Scalable-Software-Architecture
- [ ] https://github.com/mojoaxel/awesome-regression-testing#online-services

- [ ] probabilistic reasoning in intelligent systems networks of plausible inference
- [ ] causality models reasoning and inference


## [Functional-Light-JS](https://github.com/getify/Functional-Light-JS)

A deep run through of basic functional programming for JavaScript. It also helps solidify an understanding of JS, particularly scopes and closures. And it has an amazing line saying that immutable variables "reduce the surface area of surprise". Love that!

## [The Architecture of Open Source Applications](http://aosabook.org/en/index.html)

In depth overviews / critiques of the system designs behind some great open source projects.

### [Asterisk](https://www.asterisk.org/)

[Github](https://github.com/asterisk/asterisk).

A Multi format, extensible phone server. Allows communication between many phone technologies (VoIP, Old school, and more I'm sure). Also allows 'dialplans' - applications whos UI is essentially your phone call. EG automated answering giving you options in a phone menu, I'm guessing robo calls too. An incoming phone call is recieved by Asterisk, the type of tech is checked and a module for translating the tech specicif connection into a generic connection is assigned. The newly translated generic connection is then hooked up to an `ast_channel` - an object that will run the dialplan within Asterisk. That dialplan could be a phone menu or it could request a connection to another phone (which would run another connection but from generic to tech specific). If the outbound call tech matches the in bound, a direct connection may be initiated to save on translation into and out of the generic channel type. 

_The examples are a bit hard to decipher (written in C, which I'm not familiar with), but there are loads of details in the article which clarify things. Specifically the abstraction from connection tech to a general internal connection - that process will probably stick in my head for a good long while, so much simpler and clear than I would have guessed for a phone system like this!_

### [Audacity](https://www.audacityteam.org/)

[Github](https://github.com/audacity/audacity)

Sound recording and editing software. The architecture is described as "like a city", there are some impressive buildings, and some less impressive buildings. It is hindered by licencing issues but gets around these by supporing standard APIs - so said licenced code may be plugged in by a user. Thinking in layers, the base is 3rd party cross platform libs that expose general audio (PortAudio) and GUI (wxWidgets) APIs. These are in seperate DLL files (rather than being compiled into the core file). Size and speed suffer for this, but it allows other DLLs to use them directly at run time - greater extensability. 

An abstraction mistake. There's a small story about the original implementation being for mono and not stereo. So the code defaults to one channel, but has been modified to check for 2 channels later on in many places. Better if originally designed for `n` channels. This issue was also locked in by exposing a `GetLink` method to get the pair of a channel if it had one, this method has been used throughout and somewhat locked them in. The GUI architecture also has problems - mixes between plugin code, application code, and special cases with absolute positioning etc. They are hoping for a rewrite with greater abstractions - UI components with no required awareness of the greater context.

A drawback of the cross-platform libs: it runs 3 threads, each in their own way. A GUI thread created by wxWidgets and updated every 50ms. An audio thread created by PortAudio for recording and playback. And a buffer thread handled by the application code to keep thins snappy. This creates complexity but it is forced by the expectations of the plugins, had they rolled their own and abstraction could have been made but without all the cross-platform benefits.

Some audio is too big to be handled with speed, or even to fit in RAM. Audacity splits audio into ~1MB "block files" which are coordinated in an xml based .aup file. Edits only affect the relevant blocks. Block files also hold summary info which is used when zoomed out in place of processing the entire audio track. One issue on windows was lag with more than ~100 files were placed a single directory. So a hierarchy was created with never more than 100 files to a folder.

Audacity has grown organically, no plan was laied down, hence the city like code.

_The most applicable thing I've picked up from this is something like "non-array like arguments make code smell... a bit", or at least indicate that some thinking / explanation is required. Also, writing cross platform creates restrictions - glad I'm in the web space, going to stick here as much as I can!_

### [BASH](https://www.gnu.org/software/bash/) the Bourne Again SHell

I'd bet you're familiar with it. It's a language unto itself! With reserved words (`if`, `while`, `for`), operators (`|`, `>`), variables (strings, integers, arrays (indexed or associative, of strings or integers - not other arrays)), and more. Input comes from the keyboard or scripts then is run through a pipeline: "Input Processing" - built on top of [readline](https://tiswww.case.edu/php/chet/readline/rltop.html) which handles the command line editing. "Parsing" - splits a stream of characters into words and applying meaning. Lots of intricacies there. "Word Expansion" - Applys variables, expands a lot of utility like mini functions (my words!). eg `pre{one,two,three}post` to `preonepost pretwopost prethreepost`. And a lot more. There's some overlap in responsability between this and Parsing. "Command Execution" - usually a command name passed to the OS with a list of arguments. But also the meat of the Bash programming language.

_This one was a streatch for me to understand. But the final section on "lessons learned" was clear enough: keep detailed change logs, have extensive regression testing built in, standards are good if you can have them, keep good detailed documentation, find and use good software to help._

### [Berkeley DB](http://aosabook.org/en/bdb.html)    

The 20 year old "grandfather of the NoSQL movement", and "the most widely used database toolkit in the world" (at the time of writing).
Built to replace AT&T's proprietary hash package, and to work in memory and on disk. This article breaks down the architecture and gives a series of general system design lessons learned througout the many years of development. It also gives a glimps of the kind of complexities that grow as software moves from conecpt, through implementation, then 20 years of maintenance.

Berkeley DB is split into a collection of modules. Subsystems which each have their own clearly defined APIs. "It is good discipline for programmers to think about the parts of the system as seperate software products in their own right". Calls to these APIs will result in a small suite of tests checking any passed in arguments and the general state of the system. If anything is amiss it will throw errors - better to fail loud and clear than to create subtle inconsistancies. 

Some other lessons shared:

If you have a design problem, and you're inclined to make a quick fix now instead of taking the time to do it properly "remember that being nibbled to death by ducks will kill you just as surely as being trampled by elephants".

Bugs usually imply a misunderstanding, look for that misunderstanding rather than just the bug - it's likely to inform your understanding of a system and any underlying fundamental flaws in it's design.

"When asked what it meant for something to be object-oriented, [Butler Lampson](https://en.wikipedia.org/wiki/Butler_Lampson) said it meant being able to have multiple implementations behind an API".


## Articles

- [x] https://engineering.instagram.com/search-architecture-eeb34a936d3a Quick overview of instagrams search process -mentiones a few technologies but they seem facebook specific.
- [x] https://foundation.nodejs.org/wp-content/uploads/sites/50/2017/09/Nodejs-at-Uber.pdf Quick overview of the scale that Uber is useing Node at. Node marketing!
