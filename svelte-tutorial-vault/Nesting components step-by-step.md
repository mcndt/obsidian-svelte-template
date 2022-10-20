⏪ [[Nesting components]]

## 1.  Creating a second component

Let's create a new template: `Title.svelte`, that takes a prop `title`:

```html
<script lang="ts">
	export let title: string;
</script>


<h3>{title}</h3>
```

## 2. Using the component

After we import it in `SvelteDemoView.svelte`, we can use it as if it is a regular HTML element. We can pass values for its props as if they were regular HTML attributes.

```html
<script lang='ts'>
	import Title from "./Title.svelte";

	export let title: string;

	...
	
</script>


<Title title={title} />

...

```

## Nesting templates with slots

While this makes components reusable, passing the content of the `Title` using a prop is a bit cumbersome. A cleaner way is to enable component nesting using *slots*.

Let's go back to `Title.svelte`. We can use a special Svelte template tag called `<slot>`:

```html
<script lang="ts">
</script>


<h3><slot /></h3>
```

Now, when we add content to the `<Title>` component, it will replace the `<slot>` template. Like this:

```html
<Title>{title}</Title>
```

That's a lot cleaner and looks more like pure HTML!

By now, it should be clear that this allows you to build very complex user interfaces by reusing smaller, more managable building blocks. 

The best part: there are many open source libraries that implement many base components that you can use without having to code them yourself!

---
⏪ [[Nesting components]]
