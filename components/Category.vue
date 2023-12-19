<template>
	<div
		:class="{
			'category btn': true,
			'active': isActive
		}"
		@click="$emit('toggle')"
	>
		<h6 class='category-text'>{{ text }}</h6>
	</div>
</template>

<script setup>
const props = defineProps({
	text: String,
	isActive: Boolean
});
</script>

<style scoped lang='scss'>
.category {
	width: fit-content;
	padding: 4px .52083vw;
	border: 1px solid var(--clr-black);
	&:hover {
		background-color: var(--clr-black);
	}
	&-text {
		font-family: Sofia Sans;
		font-size: 18px;
		color: var(--clr-black);
	}
	&:hover .category-text {
		color: var(--clr-white);
	}
	&.active {
		background-color: var(--clr-black);
		.category-text {
			color: var(--clr-white);
		}
	}
}
@media screen and (max-width: 1600px) {
	.category {
		padding: 3.33333px .52083vw;
		&-text {
			font-size: 15px;
		}
	}
}
@media screen and (max-width: 1440px) {
	.category {
		padding: 3px .52083vw;
		&-text {
			font-size: 14px;
		}
	}
}
@media screen and (max-width: 1280px) {
	.category {
		padding: 2.66667px .52083vw;
		&-text {
			font-size: 12px;
		}
	}
}
@media screen and (max-width: 1024px) {
	.category {
		padding: 2.13333px .52083vw;
		&-text {
			font-size: 10px;
		}
	}
}
@media screen and (min-width: 768px) and (max-width: 992px) {
	.category {
		padding: 2.06667px .52083vw;
		&-text {
			font-size: 9px;
		}
	}
}
@media screen and (max-width: 767px) {
	.category {
		padding: 4px 3.125vw;
		&-text {
			font-size: 18px;
		}
	}
}
</style>
