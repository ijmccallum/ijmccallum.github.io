## resource lists

- [ ] https://github.com/Developer-Y/Scalable-Software-Architecture
- [ ] https://github.com/mojoaxel/awesome-regression-testing#online-services

- [ ] probabilistic reasoning in intelligent systems networks of plausible inference
- [ ] causality models reasoning and inference


## [The Architecture of Open Source Applications](http://aosabook.org/en/index.html)

In depth overviews / critiques of the system designs behind some great open source projects.

### Asterisk <small>[AOSA chapter](http://aosabook.org/en/asterisk.html), [asterisk.org](https://www.asterisk.org/), [Github repo](https://github.com/asterisk/asterisk).</small>

A Multi format, extensible phone server. Allows communication between many phone technologies (VoIP, Old school, and more I'm sure). Also allows 'dialplans' - applications whos UI is essentially your phone call. EG automated answering giving you options in a phone menu, I'm guessing robo calls too. An incoming phone call is recieved by Asterisk, the type of tech is checked and a module for translating the tech specicif connection into a generic connection is assigned. The newly translated generic connection is then hooked up to an `ast_channel` - an object that will run the dialplan within Asterisk. That dialplan could be a phone menu or it could request a connection to another phone (which would run another connection but from generic to tech specific). If the outbound call tech matches the in bound, a direct connection may be initiated to save on translation into and out of the generic channel type. Loads more details in the article - examless in C but the overview is good!


## Articles

- [x] https://engineering.instagram.com/search-architecture-eeb34a936d3a Quick overview of instagrams search process -mentiones a few technologies but they seem facebook specific.
- [x] https://foundation.nodejs.org/wp-content/uploads/sites/50/2017/09/Nodejs-at-Uber.pdf Quick overview of the scale that Uber is useing Node at. Node marketing!
