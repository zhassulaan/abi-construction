<template>
	<div class='slider'>
		<transition
			v-if='images.length > 1'
			name='fade'
			mode='in-out'>
			<img
				:key='currentImage'
				:src='currentImage'
				:alt='description'
				class='slider-image'
				:style="{ opacity: loaded ? 1 : 0 }"
				@load='onImageLoad'
				@error='onImageError'
			/>
		</transition>

		<img
			v-else
			:key='currentImage'
			:src='currentImage'
			:alt='description'
			class='slider-image'
		/>

		<div v-if='background' class='slider-background'></div>

		<div class='slider-pagination'>
			<div
				v-for='index in images.length'
				:key='index'
				:class="{
					'slider-pagination__dot btn': true,
					'active': (index - 1) === currentIndex
				}"
			></div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps(['images', 'description', 'background']);
const currentImage = ref(props.images[0].title);
const currentIndex = ref(0);
const loaded = ref(true);
let intervalId;

function changeImage() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
  currentImage.value = props.images[currentIndex.value].title;
}
function onImageLoad() {
  loaded.value = true;
}
function onImageError() {
	loaded.value = false;
}

onMounted(() => {
	intervalId = setInterval(() => {
    changeImage();
    loaded.value = false;
  }, 3000);
});
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style setup lang='scss'>
.slider {
	.fade {
		&-enter-active,
		&-leave-active {
			transition: opacity 1s;
		}
		&-enter,
		&-leave-to {
			opacity: 0;
		}
	}
	&-image,
	&-background {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	&-background {
		z-index: 2;
		top: 0;
		opacity: .43;
		background-color: var(--clr-black);
	}
	&-pagination {
		position: absolute;
		z-index: 2;
		display: flex;
		gap: 4px;
		&__dot {
			content: '';
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background-color: var(--clr-disabled);
			&.active {
				background-color: var(--clr-active);
			}
		}
	}
}
</style>
