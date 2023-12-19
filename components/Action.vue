<template>
	<div
		class='action btn'
		@mouseover='hover(true)'
		@mouseleave='hover(false)'
	>
		<component
			:is='icon'
			:color='iconColor'
			class='action-icon'
		/>
		<p class='action-text'>{{ text }}</p>
	</div>
</template>

<script setup>
const props = defineProps(['icon', 'text']);
const iconColor = ref(props.color);

function hover(isHovered) {
  iconColor.value = isHovered ? Math.abs(props.color - 1) : props.color;
};
</script>

<style scoped lang='scss'>
.action {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 12px;
	width: 117px;
	height: 117px;
	padding: 14px 20px 13px 21px;
	border: 1px solid var(--clr-black);
	border-radius: 8px;
	background-color: var(--clr-black);
	&-text {
		color: var(--clr-white);
		font-size: 14px;
		text-align: center;
	}
	&:hover {
		background-color: var(--clr-white);
		.action-text {
			color: var(--clr-black);
		}
	}
}
@media screen and (max-width: 1600px) {
	.action {
		gap: 10px;
		width: 97.5px;
		height: 97.5px;
		padding: 11.5px 16.5px 8.16667px 17.33333px;
		&-icon {
			width: 39.16667px;
			height: 39.16667px;
		}
		&-text {
			font-size: 12px;
		}
	}
}
@media screen and (max-width: 1440px) {
	.action {
		gap: 9px;
		width: 87.75px;
		height: 87.75px;
		padding: 10.25px 14.75px 9.5px 15.5px;
		&-icon {
			width: 35.25px;
			height: 35.25px;
		}
		&-text {
			font-size: 11px;
		}
	}
}
@media screen and (max-width: 1280px) {
	.action {
		gap: 8px;
		width: 78px;
		height: 78px;
		padding: 9px 13px 9.66667px 13.66667px;
		&-icon {
			width: 31.33333px;
			height: 31.33333px;
		}
		&-text {
			font-size: 10px;
		}
	}
}
@media screen and (max-width: 1024px) {
	.action {
		gap: 6.4px;
		width: 62.4px;
		height: 62.4px;
		padding: 7px 10.2px 6.46667px 10.73333px;
		&-icon {
			width: 25.06667px;
			height: 25.06667px;
		}
		&-text {
			font-size: 7px;
		}
	}
}
@media screen and (min-width: 768px) and (max-width: 992px) {
	.action {
		gap: 6.2px;
		width: 60.45px;
		height: 60.45px;
		padding: 6.75px 9.85px 6.23333px 10.36667px;
		&-icon {
			width: 24.28333px;
			height: 24.28333px;
		}
	}
}
@media screen and (max-width: 767px) {
	.action {
		gap: 7px;
		width: 68px;
		height: 68px;
		padding: 5px 2px 10px;
		&-icon {
			width: 24px;
			height: 24px;
		}
		&-text {
			font-size: 10px;
		}
	}
}
</style>
