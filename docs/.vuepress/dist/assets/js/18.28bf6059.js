(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{207:function(e,t,i){"use strict";i.r(t);var o=i(0),a=Object(o.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h2",{attrs:{id:"_2-firefox-release-engineering"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-firefox-release-engineering","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. "),i("a",{attrs:{href:"http://aosabook.org/en/ffreleng.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Firefox Release Engineering"),i("OutboundLink")],1)]),e._v(" "),i("p",[e._v("Automating the release process for firefox.")]),e._v(" "),i("ul",[i("li",[e._v("Post mortem on the build process after "),i("em",[e._v("every")]),e._v(" build.")]),e._v(" "),i("li",[e._v("Fix one thing, no matter how small, after every build.")]),e._v(" "),i("li",[e._v("Treat every build as you would a quick fix build - so when quick fixes are needed, it's the norm.")]),e._v(" "),i("li",[e._v("one person is build captain, they have to know the background of all updates, referee bug severity, run communication between all groups, be on point! On build day, everyone has to trust the decisions this person makes.")]),e._v(" "),i("li",[e._v('The build captain coordinates some specific build stages by sending a specifically worded email to a stakeholder list. "go to build firefox 6.0.1" to start a build, "go live (firefox 6.0.1?)", "all stop (firefox 6.0.1?)". Each email is a new email, not a replay in case email thredding losses it.')]),e._v(" "),i("li",[e._v('Builds are either "Routine" (properly scheduled, no all nighters) or "Chemspill" (minutes matter). Detailed in the go to build email.')]),e._v(" "),i("li",[e._v("Builds have a commit cut off time down to the second including time zone. Detailed in the go to build email.")]),e._v(" "),i("li",[e._v("Firefox is made up from quite a few repos, part of the build process is automated tagging accross those repos. For LTS updates tagging has to run on currently supported previous versions which live on their own branched (each update is automatically set up with it's own branch - in every repo)")]),e._v(" "),i("li",[e._v("I18n is handled by unpacking the en code, replacing strings, and repacking it (desktop). Slightly different for android. This process is also automated but it doesn't sound like every language gets the update every time? I may be wrong - sounds quite the tricky task!")]),e._v(" "),i("li",[e._v("Signing the built code, so client machines can trust that they actually have the real firefox, happens on a seperate trusted machine. Used to be totally manual but much of it has been automated.")]),e._v(" "),i("li",[e._v("Community run code mirrors monitor the relese status of the fire fox ftp servers, once enough of them have updated with a build then the release becomes official and an update is made to the firefox website - these community mirrors are required to sustain the load of the millions of users updating their browsers over a few days.")]),e._v(" "),i("li",[e._v('Simple "wall clock" timestamps (through emails) allowed them to see roughly how long each stage of a release took. Helped with the education of people throughout mozilla. Many people have only ever experienced slow & fragile build processes.')]),e._v(" "),i("li",[e._v('Managing turnover: after each release people are given a day or two of "do not disturbe" time to fix problems that are fresh in their minds - gives them a feeling of controll back and the opportunity to actually improve things.')])])])},[],!1,null,null,null);t.default=a.exports}}]);