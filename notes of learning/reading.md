## resource lists

- [ ] https://github.com/Developer-Y/Scalable-Software-Architecture
- [ ] https://github.com/mojoaxel/awesome-regression-testing#online-services

- [ ] probabilistic reasoning in intelligent systems networks of plausible inference
- [ ] causality models reasoning and inference


## [The Architecture of Open Source Applications](http://aosabook.org/en/index.html)

In depth overviews / critiques of the system designs behind some great open source projects.

### [Asterisk](https://www.asterisk.org/)

[Github](https://github.com/asterisk/asterisk).

A Multi format, extensible phone server. Allows communication between many phone technologies (VoIP, Old school, and more I'm sure). Also allows 'dialplans' - applications whos UI is essentially your phone call. EG automated answering giving you options in a phone menu, I'm guessing robo calls too. An incoming phone call is recieved by Asterisk, the type of tech is checked and a module for translating the tech specicif connection into a generic connection is assigned. The newly translated generic connection is then hooked up to an `ast_channel` - an object that will run the dialplan within Asterisk. That dialplan could be a phone menu or it could request a connection to another phone (which would run another connection but from generic to tech specific). If the outbound call tech matches the in bound, a direct connection may be initiated to save on translation into and out of the generic channel type. Loads more details in the article - examless in C but the overview is good!

### [Audacity](https://www.audacityteam.org/)

[Github](https://github.com/audacity/audacity)

Sound recording and editing software. The architecture is described as "like a city", there are some impressive buildings, and some less impressive buildings. It is hindered by licencing issues but gets around these by supporing standard APIs - so said licenced code may be plugged in by a user. Thinking in layers, the base is 3rd party cross platform libs that expose general audio (PortAudio) and GUI (wxWidgets) APIs. These are in seperate DLL files (rather than being compiled into the core file). Size and speed suffer for this, but it allows other DLLs to use them directly at run time - greater extensability. 

An abstraction mistake. There's a small story about the original implementation being for mono and not stereo. So the code defaults to one channel, but has been modified to check for 2 channels later on in many places. Better if originally designed for `n` channels. This issue was also locked in by exposing a `GetLink` method to get the pair of a channel if it had one, this method has been used throughout and somewhat locked them in. The GUI architecture also has problems - mixes between plugin code, application code, and special cases with absolute positioning etc. They are hoping for a rewrite with greater abstractions - UI components with no required awareness of the greater context.

A drawback of the cross-platform libs: it runs 3 threads, each in their own way. A GUI thread created by wxWidgets and updated every 50ms. An audio thread created by PortAudio for recording and playback. And a buffer thread handled by the application code to keep thins snappy. This creates complexity but it is forced by the expectations of the plugins, had they rolled their own and abstraction could have been made but without all the cross-platform benefits.

Some audio is too big to be handled with speed, or even to fit in RAM. Audacity splits audio into ~1MB "block files" which are coordinated in an xml based .aup file. Edits only affect the relevant blocks. Block files also hold summary info which is used when zoomed out in place of processing the entire audio track. One issue on windows was lag with more than ~100 files were placed a single directory. So a hierarchy was created with never more than 100 files to a folder.

Audacity has grown organically, no plan was laied down, hence the city like code.

### [BASH](https://www.gnu.org/software/bash/) the Bourne Again SHell

I'd bet you're familiar with it. 
Primitives:
 - Reserve words `if` `while` `for`
 - words "anything"
 - operators `|` `>`

variables: `name=value` or `another=` (considered 'unset'). Stored in hash tables. Linked lists of hash tables to implement scoping.
 - strings
 - integers
 - arrays, indexed or associative, (of strings or integers - not other arrays)

The pipe - a gift from Unix to the world! Output from one command becomes the input of the next.
Standard input
Standard output
Standard error

Shell functions (executed in the same context in which they are called) and shell scripts (executed in a new shell, only have access to things passed between processes) - ways to name a group of commands

All implemented using only a few data structures:

arrays, trees, singly-linked and doubly-linked lists, and hash tables

`WORD_DESC` a word and the flags associated with the word
`WORD_LIST` a linked list of words - most of your interaction with the shell is through these.

uses [readline](https://tiswww.case.edu/php/chet/readline/rltop.html) to run the command line editing.  

## Articles

- [x] https://engineering.instagram.com/search-architecture-eeb34a936d3a Quick overview of instagrams search process -mentiones a few technologies but they seem facebook specific.
- [x] https://foundation.nodejs.org/wp-content/uploads/sites/50/2017/09/Nodejs-at-Uber.pdf Quick overview of the scale that Uber is useing Node at. Node marketing!
