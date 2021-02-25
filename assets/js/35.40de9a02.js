(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{234:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css","aria-hidden":"true"}},[e._v("#")]),e._v(" CSS")]),e._v(" "),a("p",[e._v("My development gateway drug. Hacking CSS in WordPress themes was the first development work I was paid for and it remained the core of my day-to-day for quite a few years.")]),e._v(" "),a("h2",{attrs:{id:"organising-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#organising-it","aria-hidden":"true"}},[e._v("#")]),e._v(" Organising it")]),e._v(" "),a("p",[e._v("The phases of naming, I'm guessing many people went through a similar progression. These are the techniques I went through:")]),e._v(" "),a("h3",{attrs:{id:"name-it-what-it-is"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name-it-what-it-is","aria-hidden":"true"}},[e._v("#")]),e._v(" Name it what it is")]),e._v(" "),a("p",[e._v("eg "),a("code",[e._v(".blog-post-title")]),e._v(" or "),a("code",[e._v(".article-body")]),e._v(" etc. Every single activly maintined project I have ever seen using this has turned itself into a tiny microcosm of css nightmares. This may be partly due to the fact that these were some of the first projects I ever worked on. Meaning I had essentially 0 experience. And it may have been the person with 0 experience causing said nightmares. But lets just sweep that under the rug for now and say NEVER USE THIS NAMING CONVENTION!")]),e._v(" "),a("h3",{attrs:{id:"name-it-what-it-is-inproved"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name-it-what-it-is-inproved","aria-hidden":"true"}},[e._v("#")]),e._v(" Name it what it is (inproved!)")]),e._v(" "),a("p",[a("strong",[e._v("BEM")]),e._v(" "),a("code",[e._v(".block__element--modifyer")]),e._v(" eg "),a("code",[e._v(".blog-post__title--highlight")]),e._v(". Projects written in this style still went the way of darkness, but at least it took them longer. Also, to give more credit to this naming convention, the reason I saw projects turning sideways was more to do with a lack of rigour from the development teams. And to give those teams more credit, they were operating in an agency world which went something like:")]),e._v(" "),a("blockquote",[a("p",[e._v("\"OK developers, we're gonna need you to pump out components as fast as possible, don't do code reviews, don't test the code, we have a team of quality assurance professionals who'll check the UI for you MANUALLY, oh and by the way we demand pixel perfection on every browser, phone, tablet AND EMAIL CLIENT\" Sincerely, management.")])]),e._v(" "),a("p",[e._v("Phew! Rant over, clearly got some memories in that department to deal with. Thankfully those times are long gone.")]),e._v(" "),a("h3",{attrs:{id:"name-it-what-it-is-pro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name-it-what-it-is-pro","aria-hidden":"true"}},[e._v("#")]),e._v(" Name it what it is (pro)")]),e._v(" "),a("p",[a("strong",[e._v("BEMIT")]),e._v(" (BEM + ITCSS). For me this boiled down to prefixing classes with "),a("code",[e._v(".js-")]),e._v(" when (I hope you guessed it) Javascript is involved. That single addition saved a fantastic amount of pain for me. This was still back in the agency days and also back in the before-react time, so "),a("code",[e._v(".js-")]),e._v(" could have easily been replaced with "),a("code",[e._v(".jquery-was-here-")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"atomise-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atomise-it","aria-hidden":"true"}},[e._v("#")]),e._v(" Atomise it")]),e._v(" "),a("p",[a("em",[e._v("No not atomic components, I'm talking UTILITY CLASSES!")])]),e._v(" "),a("p",[e._v("https://tachyons.io/ (the one I've played with)"),a("br"),e._v("\nhttps://tailwindcss.com/ (the one I hear about on podcasts)")]),e._v(" "),a("p",[e._v("eg "),a("code",[e._v(".tc")]),e._v(" for "),a("code",[e._v("text-align: center;")]),e._v(", or "),a("code",[e._v(".db")]),e._v(" for "),a("code",[e._v("display: block;")]),e._v(" This style was a revelation for me. The first one that separated style from html content, the first one that didn't introduce inexplicable links between seemingly random components, the first one that did away with the need for any css gymnastics. Clearly I've yet to experience a full blown professional project with multiple devs using this one!")]),e._v(" "),a("h3",{attrs:{id:"css-in-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-in-js","aria-hidden":"true"}},[e._v("#")]),e._v(" CSS in JS")]),e._v(" "),a("p",[e._v("eg "),a("a",{attrs:{href:"https://www.npmjs.com/package/styled-components",target:"_blank",rel:"noopener noreferrer"}},[e._v("styled-components"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://svelte.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Svelte"),a("OutboundLink")],1),e._v(". Throw all this carefully crafted css naming convention malarky out the window and just JAVASCRIPT it. This is where my professional work has landed (as I'm part of a much larger team these days), but I'm not a huge fan. A lot of the styling inconsistency problems are still around but the budget to spend time fixing it isn't. Personal projects (that don't rely on prebaked templates like this site) I'll always reach back to utility classes.")]),e._v(" "),a("h3",{attrs:{id:"other-naming-styles-that-never-made-it-off-the-to-do-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-naming-styles-that-never-made-it-off-the-to-do-list","aria-hidden":"true"}},[e._v("#")]),e._v(" Other naming styles that never made it off the to-do list")]),e._v(" "),a("ul",[a("li",[e._v("OOCSS / Atomic")]),e._v(" "),a("li",[e._v("ECSS")]),e._v(" "),a("li",[e._v("SMACSS")])]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Tools:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/JedWatson/classnames",target:"_blank",rel:"noopener noreferrer"}},[e._v("Utility classes for react"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/johnotander/immutable-css",target:"_blank",rel:"noopener noreferrer"}},[e._v("Immutable CSS linter"),a("OutboundLink")],1),e._v(" and and "),a("a",{attrs:{href:"https://csswizardry.com/2015/03/immutable-css/",target:"_blank",rel:"noopener noreferrer"}},[e._v("article on immutable css"),a("OutboundLink")],1),e._v(" that explains the idea. Eg "),a("code",[e._v(".bg-red")]),e._v(" is defined. then later "),a("code",[e._v(".pinkify .bg-red")]),e._v(" redefines it - mutates it. The linter would pick that up and throw an error. "),a("code",[e._v(".bg-red")]),e._v(" should never be changed, and this looks like a tool that can enforce that.")])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"articles-notes-summarising-them"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#articles-notes-summarising-them","aria-hidden":"true"}},[e._v("#")]),e._v(" Articles & notes summarising them")]),e._v(" "),a("h3",{attrs:{id:"how-not-to-scale-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-not-to-scale-css","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://gist.github.com/mrmrs/5d6c3bf60a9ff410fcec",target:"_blank",rel:"noopener noreferrer"}},[e._v("How not to scale CSS"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("A funny read on the CSS perils of larger projects with multiple developers.")]),e._v(" "),a("li",[e._v("Read through any large project's css, line by line, from start to finish. You'll see the layers of it's history, some madness, and you'll learn new tricks.")]),e._v(" "),a("li",[e._v('Reading Modular / "semantic" classes don\'t tell you what the css will do. Nor can you tell if they are overridden anywhere.')]),e._v(" "),a("li",[e._v("Atomic / utility classes (eg "),a("code",[e._v(".bg-red { background-color: red; }")]),e._v(" / "),a("code",[e._v('<div class="bg-red>"')]),e._v(") will tell you what they do whither you read them in the markup or the stylesheets.")]),e._v(" "),a("li",[e._v("When adding a new component to an existing project a developers first instinct is to write new styles for it. If time is tight, you don't read through the whole project to find out if that style already exists.")]),e._v(" "),a("li",[e._v("multiple classes for each element dot not cause a significant increase in the size of your markup. Redefining the same style attributes and complex legacy css is much worse.")]),e._v(" "),a("li",[e._v("Even the best of us suffer from this, GitHub, Pinterest, Medium, Adobe - go read their styles, you'll see.")]),e._v(" "),a("li",[e._v("Naming modules by their content is a problem - content is different from presentation, modules should be named by presentaion function ("),a("code",[e._v(".modal")]),e._v(", "),a("code",[e._v(".ribbon")]),e._v(" relate to presentation. "),a("code",[e._v(".news-item")]),e._v(", "),a("code",[e._v(".location")]),e._v(" do not).")])]),e._v(" "),a("h3",{attrs:{id:"semantic-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#semantic-css","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://snook.ca/archives/html_and_css/semantic-css",target:"_blank",rel:"noopener noreferrer"}},[e._v("Semantic CSS"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("class names have minimal use: only really useful for the next developer.")]),e._v(" "),a("li",[e._v('Developers using modular "semantic" names are often inconsistent. They will use '),a("code",[e._v("navigation")]),e._v(", "),a("code",[e._v("dropdown")]),e._v(", and "),a("code",[e._v("modal")]),e._v(" that describe the design function alongside "),a("code",[e._v("products")]),e._v(", "),a("code",[e._v("events")]),e._v(", and "),a("code",[e._v("collections")]),e._v(" that describe the content.")]),e._v(" "),a("li",[e._v("Naming by design function is hard. (Unsolved I believe).")]),e._v(" "),a("li",[e._v("Think carefully about using modifier classes, eg "),a("code",[e._v("modal--special")]),e._v(". Often they would be better as their own component as differences can make the markup between the two incompatible. Remember it's only useful for the developer who comes after you.")])]),e._v(" "),a("h3",{attrs:{id:"about-html-semantics-and-front-end-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-html-semantics-and-front-end-architecture","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"http://nicolasgallagher.com/about-html-semantics-front-end-architecture/",target:"_blank",rel:"noopener noreferrer"}},[e._v("About HTML semantics and front end architecture"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("Most HTML semantics are related to the content: elements ("),a("code",[e._v("h1")]),e._v(" / "),a("code",[e._v("p")]),e._v("), "),a("code",[e._v("lang")]),e._v(" attribute, "),a("code",[e._v('type="..."')]),e._v(", Microdata. But CSS class names do not need to relate to content. In fact there is no inherent reason to relate css classes to content.")]),e._v(" "),a("li",[e._v("class names should communicate useful information to developers, especially when they are not all front end developers.")]),e._v(" "),a("li",[e._v("Tying class names to content limits your css from scaling.")]),e._v(" "),a("li",[a("blockquote",[a("p",[e._v('"The most reusable components are those with class names that are independent of the content."')])])]),e._v(" "),a("li",[e._v('"The aim of a component/template/object-oriented architecture is to be able to develop a limited number of reusable components that can contain a range of different content types."')]),e._v(" "),a("li",[e._v("components should avoid type selectors")]),e._v(" "),a("li",[e._v("Javascript only classes "),a("code",[e._v("js-*")]),e._v(" reduce the risk of theme / structure changes breaking the JS.")]),e._v(" "),a("li",[e._v("Single class modifiers (eg "),a("code",[e._v(".btn--primary")]),e._v(" @extends "),a("code",[e._v(".btn")]),e._v(" so you only need "),a("code",[e._v('<button class="btn--primary">')]),e._v(") are less scalable than multi class modifiers ("),a("code",[e._v('<button class="btn btn--primary">')]),e._v("). For example, if you have 5 types of buttons at 3 sizes you would end up with 24 single class modifiers or 9 mix and match multi class modifiers.")]),e._v(" "),a("li",[e._v("Multi class modifiers allow parent components simpler tweaks, eg "),a("code",[e._v(".thing .btn { tweak }")]),e._v(" vs"),a("code",[e._v(".thing .btn, .thing .btn-primary, .thing .btn-danger, .thing .btn-etc { tweak }")])]),e._v(" "),a("li",[e._v("CSS should be maintainable first. Pre-processors and compression nullify concerns about the size or aesthetics of the output CSS / HTML.")])]),e._v(" "),a("h3",{attrs:{id:"bemit-taking-bem-further-with-itcss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bemit-taking-bem-further-with-itcss","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/",target:"_blank",rel:"noopener noreferrer"}},[e._v("BEMIT Taking BEM further with ITCSS"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("When reading the markup BEM tells you what classes are related to each other (the namespace they're in).")]),e._v(" "),a("li",[e._v("Namespacing by the type of component ("),a("code",[e._v("u-")]),e._v(" for utility, "),a("code",[e._v("o-")]),e._v(" object (these will need clear definitions), etc)")]),e._v(" "),a("li",[e._v("Responsive suffixes "),a("code",[e._v("class@m")]),e._v(" for the medium breakpoint, "),a("code",[e._v("class@s")]),e._v(" for the small...")])]),e._v(" "),a("h3",{attrs:{id:"functional-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functional-css","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"http://eng.wealthfront.com/2013/08/20/functional-css-fcss/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Functional CSS"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("Using namespacing to simulate scope in CSS (essentially BEM)")]),e._v(" "),a("li",[e._v("Brings up immutability, for mre in depth see the article further up")]),e._v(" "),a("li",[e._v("Problem, in the "),a("code",[e._v(".sidebar .error")]),e._v(" example the idea of changing appearance based on location is used, immediately after that issue was identified as an anti pattern and solved an alternate way. Literally in the paragraph before.")]),e._v(" "),a("li",[e._v("Problem, class composition in the markup is described as confusing - I would counter by saying the names are confusing. They use @extend to solve, but again I would counter and say that just moves the confusion. Utitlity classes win here for me, "),a("code",[e._v(".clr-red .border-red")]),e._v(" and be done with it! Or, in keeping with namespacing, "),a("code",[e._v(".error .error--bordered")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"building-and-shipping-functional-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-and-shipping-functional-css","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://medium.com/@cole_peters/building-and-shipping-functional-css-4f29b947bcb9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Building and shipping functional CSS"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("One developers story about transitioning his company's site into functional css. Less about learning, more out of interest!")])])])}),[],!1,null,null,null);t.default=n.exports}}]);