<template>
	<div
		class='button btn'
		:class="color ? 'white' : 'black'"
		@mouseover='hover(true)'
		@mouseleave='hover(false)'
	>
		<p class='button-text'>{{ text }}</p>
		<icon-arrow :color='arrowColor' class='button-icon' />
	</div>
</template>

<script setup>
const props = defineProps({
  color: Number,
  text: String
});
const arrowColor = ref(props.color);

function hover(isHovered) {
  arrowColor.value = isHovered ? Math.abs(props.color - 1) : props.color;
};
</script>

<style scoped lang='scss'>
.button {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: .52083vw;
	width: fit-content;
	height: 50px;
	padding: 12px 1.25vw;
	&-text {
		white-space: nowrap;
	}
	&.white {
		border: 1px solid var(--clr-white);
		&:hover {
			background-color: var(--clr-white);
			.button-text {
				color: var(--clr-black);
			}
		}
	}
	&.white &-text {
		color: var(--clr-white);
	}
	&.black {
		border: 1px solid var(--clr-black);
		&:hover {
			background-color: var(--clr-black);
			.button-text {
				color: var(--clr-white);
			}
		}
	}
	&.black &-text {
		color: var(--clr-black);
	}
}
@media screen and (max-width: 1600px) {
	.button {
		height: 46px;
		padding: 10px 1.25vw;
		&-icon {
			width: 18.33333px;
		}
	}
}
@media screen and (max-width: 1440px) {
	.button {
		height: 44px;
		padding: 9px 1.25vw;
		&-icon {
			width: 16.5px;
		}
	}
}
@media screen and (max-width: 1280px) {
	.button {
		height: 42px;
		padding: 8px 1.25vw;
		&-icon {
			width: 14.66667px;
		}
	}
}
@media screen and (max-width: 1024px) {
	.button {
		height: 38.8px;
		padding: 6.4px 1.25vw;
		&-icon {
			width: 11.73333px;
		}
	}
}
@media screen and (min-width: 768px) and (max-width: 992px) {
	.button {
		height: 38.4px;
		padding: 6.2px 1.25vw;
		&-icon {
			width: 18.36667px;
		}
	}
}
@media screen and (max-width: 767px) {
	.button {
		gap: 3.125vw;
		height: 40px;
		padding: 12px 5vw;
		&-icon {
			width: 28px;
		}
	}
}
</style>
