<script lang="ts">
	// This is where all our component logic will go
	import { onMount } from "svelte";

	let count = 0;

	onMount(() => {
		console.log("Hello from Svelte!");
	});

	function increment() {
		count = count + 1;
	}
</script>

<h3>Svelte Demo View</h3>
<p>This is a demo view that uses Svelte.</p>
<hr />

<button on:click={increment}>Clicked {count} times</button>

<style>
</style>
