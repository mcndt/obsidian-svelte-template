⏪ [[Rendering lists]]

## 1. Setup

Let's start by defining a variable that will contain a list of objects. We'll initialize it with some data:

```html
<script lang='ts'>
	let data: { text: string }[] = [
		{ text: "hello!" }, 
		{ text: "world!" }
	];
</script>
```

## 2. Rendering a list of data

We can loop over this list using the `#each` syntax in Svelte like so:

```html
<ul class="list">
	{#each data as item}
		<li class="item">{item.text}</li>
	{/each}
</ul>
```

Svelte should now render the content of the `#each` block for every element in the `data` list variable.

## 3. Making it reactive

Let's start by adding a couple buttons to add and remove items from the list. for convenience, we'll also render the length of the list in a `<span>` tag.

```html
<script lang='ts'>

	...

	function onAdd() {
		data.push({ text: "new item" });
	}
	
	function onRemove() {
		data.pop();
	}
	
</script>

...

<div class="button-div">
	<button on:click={onAdd}>Add item</button>
	<button on:click={onRemove}>Remove item</button>
	<span class="count">{data.length} items</span>
</div>

<style>
	.button-div {
		display: flex;
		flex-wrap: wrap;
		column-gap: 8px;
		row-gap: 8px;
		align-items: center;
	}

	.count {
		font-style: italic;
	}
</style>
```

...unfortunately, this doesn't work. Let's try to understand why.

## 3. Understanding reactivity

What exactly is going wrong here? 

The problem is that Svelte can only tell when an entire variable changes. By pushing and popping from a list, we are only changing the contents of the list; it is still the same list.

If we want the UI to update reactively, we need to assign an entirely new list to the `data` variable. 
(By the way, the same goes for objects! Svelte does not know when an object property has changed).

Luckily, JavaScript has some convenient syntax we can use to create a new list: the spread operator. We can initialize a new list like so:

```diff
function onAdd() {
-	data.push({ text: "new item" });
+	data = [...data, { text: "new item" }];
}
```

We can do a similar trick when removing items:

```diff
function onRemove() {
	data.pop();
+	data = [...data];
}
```

Everything should work now as expected!

---
⏪ [[Rendering lists]]
