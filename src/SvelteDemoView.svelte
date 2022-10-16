<script lang="ts">
	// This is where all our component logic will go
	import { onMount } from "svelte";
	import Title from "./Title.svelte";

	export let title: string;

	let count = 0;
	let data: { text: string }[] = [{ text: "hello!" }];

	onMount(() => {
		console.log("Hello from Svelte!");
	});

	function increment() {
		count += 1;
	}

	function onAdd() {
		data = [...data, { text: "new item" }];
	}

	function onRemove() {
		data.pop();
		data = [...data];
	}
</script>

<Title>{title}</Title>
<p>This is a demo view that uses Svelte.</p>
<hr />

<button on:click={increment}>Clicked {count} times</button>

<hr />

<div class="button-div">
	<button on:click={onAdd}>Add item</button>
	<button on:click={onRemove}>Remove item</button>
	<span class="count">{data.length} items</span>
</div>

<ul class="list">
	{#each data as item}
		<li class="item">{item.text}</li>
	{/each}
</ul>

<style>
	.button-div {
		display: flex;
		flex-wrap: wrap;
		column-gap: 8px;
		row-gap: 8px;
		/* flex center all items on horizontal axis */
		align-items: center;
	}

	.count {
		font-style: italic;
	}

	.list {
		margin-top: 16px;
	}
</style>
