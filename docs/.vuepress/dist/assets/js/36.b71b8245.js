(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{199:function(e,t,o){"use strict";o.r(t);var n=o(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html")]),e._v(" "),o("p",[e._v("This is how react works (at a high level) under the hood - as in how each component is represented (this is the virtual DOM)")]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("https://facebook.github.io/react/docs/reconciliation.html")]),e._v(" "),o("p",[e._v("Describes how the diffing actually works")]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("https://facebook.github.io/react/contributing/design-principles.html")]),e._v(" "),o("p",[e._v("Not really needed, it's a message from the react maintainers in facebook to us - the people using it")]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("https://github.com/acdlite/react-fiber-architecture")]),e._v(" "),o("p",[e._v('A quick overview of the above (also the source for the linkd above) then a dive into what "React Fiber" is.')]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("Render props vs Higher Order Components.")]),e._v(" "),o("p",[e._v("https://levelup.gitconnected.com/understanding-react-render-props-by-example-71f2162fd0f2")]),e._v(" "),o("p",[e._v("https://levelup.gitconnected.com/understanding-react-higher-order-components-by-example-95e8c47c8006")]),e._v(" "),o("p",[e._v('HOC adds new attributes to the props of a given component - so the given component then access those new props attributes. The given component now knows about the extra abilities provided by the HOC - knowledge of the HOC is leaking in.\nRender props pass in those extra attributes as arguments to a render attribute of the render prop component. Within that render attribute you use the extra abilities then pass the results into a child component (equivolent to the "given component" above). But this time the child component is not aware of the extra abilities. Knowledge of the render prop has not leaked in.')]),e._v(" "),o("h3",{attrs:{id:"new-lifecycle-methods"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-lifecycle-methods","aria-hidden":"true"}},[e._v("#")]),e._v(" New lifecycle methods")]),e._v(" "),o("h3",{attrs:{id:"context-api"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context-api","aria-hidden":"true"}},[e._v("#")]),e._v(" Context API")]),e._v(" "),o("h3",{attrs:{id:"pointer-events"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pointer-events","aria-hidden":"true"}},[e._v("#")]),e._v(" pointer events")]),e._v(" "),o("h3",{attrs:{id:"lazy-function"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lazy-function","aria-hidden":"true"}},[e._v("#")]),e._v(" lazy function")]),e._v(" "),o("h3",{attrs:{id:"react-memo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#react-memo","aria-hidden":"true"}},[e._v("#")]),e._v(" React.memo")]),e._v(" "),o("h3",{attrs:{id:"react-hooks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#react-hooks","aria-hidden":"true"}},[e._v("#")]),e._v(" React hooks")]),e._v(" "),o("p",[e._v('A more direct reference to existing concepts: props, state, lifecycle, refs, context.\nProvides a better primitive for sharing statefull logic: to combat "wrapper hell"\nThe current lifecycle methods make you group together unrelated code, muddies the waters.\nClasses cause confusion for people, are hard to minify, and are flaky for hot module reloading.')]),e._v(" "),o("p",[o("code",[e._v("useState")]),e._v(" takes a state object/primitive and returns an array: 0 is a reference to the given state object/primitive. 1 is a function that can be used to act upon that state object/primitive. With array destructuring, "),o("code",[e._v("const [count, setCount] = useState(0);")]),e._v(", we can reference the state ("),o("code",[e._v("count")]),e._v(") directly (without the "),o("code",[e._v("this.state.")]),e._v(" bit). Same goes for the function to update state, instead of "),o("code",[e._v("this.")]),e._v(" we can just do "),o("code",[e._v("setCount(count + 1)")])]),e._v(" "),o("p",[o("code",[e._v("useEffect")]),e._v(" takes a function (which because of JS has access to the component's scope) that it will run after "),o("em",[e._v("every")]),e._v(" render. If you return a function from your effect function this will be run before any subsequent renders and also when the component unmounts. "),o("code",[e._v("useEffect")]),e._v(" also takes a second argument, an array which will compare the value at [0] to the previous time it was run (rendered), it'll only run the effect function if that value changes.\nNamed after side effects: fetch, subscribe, clear subscribe, tweak the dom, etc.")]),e._v(" "),o("p",[o("code",[e._v("useContext")]),e._v(" - I guess for sharing state down and accross many components")]),e._v(" "),o("p",[o("code",[e._v("useReducer")]),e._v(" - hmmm")]),e._v(" "),o("p",[e._v("Keep them at the top of the component scope! Every time the component function is run every hook is run, in order. The state they relate to is essentially an index defined by the order in which they run. So no calling effects in loops / conditionals / other functions / anything dynamic. Do that stuff inside the hook.")]),e._v(" "),o("p",[e._v("Challenge for when I'm done - make a d3 component with hooks\nhttps://www.npmjs.com/package/eslint-plugin-react-hooks")]),e._v(" "),o("h3",{attrs:{id:"suspense-api"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#suspense-api","aria-hidden":"true"}},[e._v("#")]),e._v(" Suspense API")]),e._v(" "),o("p",[e._v("Defer rendering until a condition is met. Old school way: show a spinner.\nNew school way: ... not ready yet?")])])},[],!1,null,null,null);t.default=a.exports}}]);