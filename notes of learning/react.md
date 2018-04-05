

https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html

This is how react works (at a high level) under the hood - as in how each component is represented (this is the virtual DOM)

---

https://facebook.github.io/react/docs/reconciliation.html

Describes how the diffing actually works

---

https://facebook.github.io/react/contributing/design-principles.html

Not really needed, it's a message from the react maintainers in facebook to us - the people using it

---

https://github.com/acdlite/react-fiber-architecture

A quick overview of the above (also the source for the linkd above) then a dive into what "React Fiber" is.

---

Render props vs Higher Order Components.

https://levelup.gitconnected.com/understanding-react-render-props-by-example-71f2162fd0f2

https://levelup.gitconnected.com/understanding-react-higher-order-components-by-example-95e8c47c8006

HOC adds new attributes to the props of a given component - so the given component then access those new props attributes. The given component now knows about the extra abilities provided by the HOC - knowledge of the HOC is leaking in.
Render props pass in those extra attributes as arguments to a render attribute of the render prop component. Within that render attribute you use the extra abilities then pass the results into a child component (equivolent to the "given component" above). But this time the child component is not aware of the extra abilities. Knowledge of the render prop has not leaked in.
