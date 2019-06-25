(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{192:function(e,a,t){"use strict";t.r(a);var r=t(0),s=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"_7-graphite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-graphite","aria-hidden":"true"}},[e._v("#")]),e._v(" 7. "),t("a",{attrs:{href:"http://aosabook.org/en/graphite.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Graphite"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("A network based (as in accessed over a simple network protocal) database for storing numbers that change over time and graphing them.")]),e._v(" "),t("ul",[t("li",[e._v('whisper: database library, stores data in a file: meta info in a header, then "archive sections" with many '),t("code",[e._v("time,value,time,value")]),e._v(" pairs.")]),e._v(" "),t("li",[e._v("carbon-cache: back-end daemon built on "),t("a",{attrs:{href:"https://twistedmatrix.com/trac/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twisted"),t("OutboundLink")],1),e._v(" so it can talk to many clients at once.")]),e._v(" "),t("li",[e._v("Front end UI")])]),e._v(" "),t("p",[e._v("Data is sent to carbon over a tcp connection (it doesn't reply! It just listens). The data looks like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("servers.www01.cpuUsage 42 1286269200\nproducts.snake-oil.salesPerMinute 123 1286269200\n[one minute passes]\nservers.www01.cpuUsageUser 44 1286269260\nproducts.snake-oil.salesPerMinute 119 1286269260\n\nname.of.thing [space] value [space] unix epoch timestamp\n")])])]),t("p",[e._v('The WebApp (UI) generates graph rasters (pixel based images) on demand, based on parameters passed in via a querystring that look like the kind of formulas you might put into excel. It has a "Composer UI" which looks to be a large number of options to guide people through demanding graphs. This rendering became a performance issue, but caching the graph images and the data used to render them helped.')])])},[],!1,null,null,null);a.default=s.exports}}]);