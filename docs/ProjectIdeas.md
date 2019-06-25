# CSS Cache

* atomic classes (to begin, this may expand)
* page of html with atomic styles inline in the head

^^^ that's how unsupported browsers will work, for the rest:

* After load, pass style node to a worker to extract a list of all the css classes.
* that list is cached by Service Worker!
* Any more requests for another page get caught by SW
* SW appends data about the cache it has (by page ids? / component ids? / class ids?)
* Server receives page request. No data, return full page. With data, return only body node with only the required styles

---

Working through an example

Request for page 1 with no data - html - style.a.b - div.a.b

Request for page 2 with no data - html - style.b.c - div.b.c

Request for page 2 _with data_: style.a.b - style.c - div.b.c

Request for page 2 _with data_: style.a.b.c - div.b.c


# Culture ideas!

Because getting a good culture in the working environment can be a tricksy thing, 
these are some ideas of things to implement that hopefully feel a little less corporate.

## Open Invites

 - company / group calendar that anyone can add to
 - random events outside work that you're going to, specify time / place. If anyone else wants to show up, see you there!
 - not organised by leadership, more organic
 
## Sponsored Open Invites

 - For bigger trips that would require travel / lodging / equipment
 - if a bunch of work people decide to tag along
 - the company will contribute towards the overall cost (eg hire a minibus / lodging for the group)

## Alumni club

 - newsletter anyone can submit to, from within the company or from alumnis (because people are usually interested in people)
 - alumni access to see / submit Open Invites
 - quarterly / biannual / annual meetup

## Code for _____ meetup

 - See the Code for America meetup organisation. They got it right. If your city / country doesn't have that, get the copmany to donate space / employee time for organising & prepping presentions
