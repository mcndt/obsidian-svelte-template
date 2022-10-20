⏪ [[Updating your UI when data changes]]

## 1. What is reactivity?

Reactivity means that the UI will automatically update when *the component state changes*.

In Svelte, the "component state" simply means any variables you have declared inside the `<script>` tag, and that you have used inside the HTML template.

## 2. Creating a counter 

Start by defining a `count` variable and `increment` function inside your component script:

```html
<script lang="ts">
	let count = 0;

	function increment() {
		count = count + 1;
	}
</script>
```

Next, let's add a button to the UI that uses the increment function as its onClick event handler, and `count` in the display text. 

We can include script variables in our template by wrapping them in curly braces, like so: `{count}`

Let's try it:

```html
<button on:click={increment}>Clicked {count} times</button>
```

Your button should now reactively show the count!

---
⏪ [[Updating your UI when data changes]]
