<template>
	<svg
		width="22"
    height="15"
		viewBox="0 0 22 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M20.3337 7.49976L1.66699 7.49976"
			:stroke="strokeColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M14.5005 13.3334C14.5005 13.3334 20.3338 9.03723 20.3338 7.50004C20.3338 5.96284 14.5005 1.66675 14.5005 1.66675"
			:stroke="strokeColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>

<script setup>
const props = defineProps({
	color: {
		type: Number,
		default: 0
	}
});
const strokeColor = computed(() => props.color ? 'white' : 'black');
</script>
