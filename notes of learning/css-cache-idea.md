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
