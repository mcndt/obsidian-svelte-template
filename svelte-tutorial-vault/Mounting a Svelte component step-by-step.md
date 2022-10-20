⏪ [[Mounting a Svelte component]]

## 1. Creating a Svelte template

Create a file in the `src/` directory called `SvelteDemoView.svelte`.

Now rewrite the imperative DOM manipulation from `SvelteDemoView.ts` into regular HTML syntax. You can add the style inside `<style></style>` tags.

```html
<h3>Svelte Demo View</h3>
<p>This is a demo view that uses Svelte.</p>
<hr />

<div class="button-div">
	<button>Add item</button>
	<button>Remove item</button>
</div>

<style>
	.button-div {
		display: flex;
		column-gap: 8px;
	}
</style>
```

## 2. Adding scripts to your component

You can add a `<script></script>` tag to add logic to your component. For now, we'll just print a little console log when the component is mounted:

```html
<script lang="ts">
	// This is where all our component logic will go
	import { onMount } from "svelte";

	onMount(() => {
		console.log("Hello from Svelte!");
	});
</script>
```

### 3. Mounting the component

Inside `SvelteDemoView.ts`, first import the component:

```ts
import SvelteDemoViewComponent from "./SvelteDemoView.svelte";
```

Then, rewrite the `onOpen` and `onClose` methods:

```ts
async onOpen(): Promise<void> {
	this.component = new SvelteDemoViewComponent({
		target: this.contentEl,
	});
}

async onClose() {
	this.component.$destroy();
}
```

Your sidepane view should render like before, but under the hood it's now a Svelte component!

---
⏪ [[Mounting a Svelte component]]