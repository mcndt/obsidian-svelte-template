⏪ [[Managing global state with stores]]

## 1. Defining a store

First, we need to define the store. Start by creating a new file called `stores.ts`.

Inside this file, we'll define a new read-write store. As the type, we'll use a list of Obsidian's file objects. It takes an initial value as the value.

Finally, we will export it so we can access the store in our other source filles:

```ts
import type { TFile } from "obsidian";
import { writable } from "svelte/store";


export const fileStore = writable<TFile[]>([]);
```

## 2. Writing to the store

We'll write the list of files in the vault to the store from the plugin's `main.ts`.

First, on the `Plugin` class, write a method that accesses the app's vault and writes the list of files to the store:

```ts
export default class MyPlugin extends Plugin {
	...

	writeVaultFilesToStore() {
		const files = this.app.vault.getFiles();
		fileStore.set(files);
	}
	
	...
}
```

We'll want to update the store everytime a file is added, deleted, or renamed, as well as when the plugin first loads. We can register some events for this in the `onload` method:

```ts
...

async onload() {
	...

	// register events
	this.registerEvent(
		this.app.vault.on("create", () => this.writeVaultFilesToStore())
	);
	this.registerEvent(
		this.app.vault.on("delete", () => this.writeVaultFilesToStore())
	);
	this.registerEvent(
		this.app.vault.on("rename", () => this.writeVaultFilesToStore())
	);

	// write the vault files to the store on initialization
	this.writeVaultFilesToStore();
}

...
```

## 3. Reading the store

Let's render a list of filenames in our view. Return to `SvelteDemoView.svelte` and import the store in the component script:

```html
<script lang='ts'>
	import { fileStore } from "src/stores";
</script>
```

We can reactively read the store contents by prepending the store with a `$` sign:

```html
<ul class="list">
	{#each $fileStore as file}
		<li class="item">{file.name}</li>
	{/each}
</ul>
```

Our view will now update reactively whenever you add, remove, or rename a file!

---
⏪ [[Managing global state with stores]]