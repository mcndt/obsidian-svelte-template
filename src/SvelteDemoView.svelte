<script lang="ts">
	// This is where all our component logic will go
	import { onMount } from "svelte";

	onMount(() => {
		console.log("Hello from Svelte!");
	});
</script>

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
