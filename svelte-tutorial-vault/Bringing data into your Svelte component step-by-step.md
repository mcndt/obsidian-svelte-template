⏪ [[Bringing data into your Svelte component]]

## 1. Exposing *component props* 

We can expose any variable of our component script as a *prop* (short for property) by adding `export` before its definition. Exported variables can be set from outside the component.

Let's add a prop for the title of the view:

```html
<script lang='ts'>
	export let title: string;

	...
</script>
```

We can then use this as a reactive variable just like we did before with the button counter:

```html
<h3>{title}</h3>
```

After adding this code, the title will now say `undefined`. That's because we still need to pass a value for this component property when mounting it.

## 2. Setting component properties on mount

We can easily set the component props when mounting the component. Go back to `SvelteDemoView.ts` to add a value for the title:

```diff
async onOpen(): Promise<void> {
	this.component = new SvelteDemoViewComponent({
		target: this.contentEl,
+		props: {
+			title: "Anything you want!",
+		},
	});
}
```

Your component should say whatever you want now!

This is very useful e.g. when you use a Svelte component in a modal, and you want the user to select from a dynamic list of items.

---
⏪ [[Bringing data into your Svelte component]]

