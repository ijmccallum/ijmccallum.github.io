(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{214:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_4-berkeley-db"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-berkeley-db","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. "),a("a",{attrs:{href:"http://aosabook.org/en/bdb.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Berkeley DB"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v('The 20 year old "grandfather of the NoSQL movement", and "the most widely used database toolkit in the world" (at the time of writing).\nBuilt to replace AT&T\'s proprietary hash package, and to work in memory and on disk. This article breaks down the architecture and gives a series of general system design lessons learned througout the many years of development. It also gives a glimps of the kind of complexities that grow as software moves from conecpt, through implementation, then 20 years of maintenance.')]),e._v(" "),a("p",[e._v('Berkeley DB is split into a collection of modules. Subsystems which each have their own clearly defined APIs. "It is good discipline for programmers to think about the parts of the system as seperate software products in their own right". Calls to these APIs will result in a small suite of tests checking any passed in arguments and the general state of the system. If anything is amiss it will throw errors - better to fail loud and clear than to create subtle inconsistancies.')]),e._v(" "),a("p",[e._v("Some other lessons shared:")]),e._v(" "),a("p",[e._v('If you have a design problem, and you\'re inclined to make a quick fix now instead of taking the time to do it properly "remember that being nibbled to death by ducks will kill you just as surely as being trampled by elephants".')]),e._v(" "),a("p",[e._v("Bugs usually imply a misunderstanding, look for that misunderstanding rather than just the bug - it's likely to inform your understanding of a system and any underlying fundamental flaws in it's design.")]),e._v(" "),a("p",[e._v('"When asked what it meant for something to be object-oriented, '),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Butler_Lampson",target:"_blank",rel:"noopener noreferrer"}},[e._v("Butler Lampson"),a("OutboundLink")],1),e._v(' said it meant being able to have multiple implementations behind an API".')])])}),[],!1,null,null,null);t.default=s.exports}}]);