<template>
<div class='image'>
	<img
		:src='source'
		:alt='description'
		class='image-content'
	/>
	<div class='image-overlay'></div>
</div>
</template>

<script setup>
const props = defineProps({
	source: Object,
	description: String
});
</script>

<style scoped lang='scss'>
.image {
	position: relative;
	&-content,
	&-overlay {
		width: 100%;
		height: 100%;
	}
	&-content {
		object-position: 100% 71.1%;
	}
	&-overlay {
		position: absolute;
		top: 0;
		background-color: var(--clr-black);
		opacity: .43;
	}
}
</style>
