<script setup lang="ts">
	import { useCounterStore } from '@/stores/counter';

	defineProps<{
		msg: string;
	}>();

	const store = useCounterStore();
</script>

<template>
	<div class="greetings">
		<h1 class="green">{{ msg }}</h1>
		<h3>
			You’ve successfully created a project with
			<a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
			<a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
		</h3>
		<p>Items clicked: {{ store.count }}</p>
	</div>
</template>

<style scoped>
	h1 {
		font-weight: 500;
		font-size: 2.6rem;
		position: relative;
		top: -10px;
	}

	h3 {
		font-size: 1.2rem;
	}

	p {
		margin-top: 20px;
	}

	.greetings h1,
	.greetings h3 {
		text-align: center;
	}

	@media (min-width: 1024px) {
		.greetings h1,
		.greetings h3 {
			text-align: left;
		}
	}
</style>
