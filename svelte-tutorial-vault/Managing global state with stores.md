Sometimes, you will need access to some high-level data in a component that may be several layers removed:

![[stores-use-case.png]]

We could add a `App` prop to every component so that we can pass the reference all the way to the component that needs it. However, this makes me feel more like a plumber than a software engineer. Let's try something better:

Step-by-step guide: [[Managing global state with stores step-by-step]]

Your component can now reactively render the list of files in the vault, no plumbing required!

Next: [[Wrapping up 👋]]

> [!success] Solution
> Solution branch: `workshop-svelte-stores`

---
Previous: [[Nesting components]]