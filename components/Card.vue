<template>
	<div class='card btn'>
		<img
			:src='image'
			:alt='`team member - ${person.title}`'
			class='card-image'
		/>
		<div class='card-background'></div>

		<div class='card-info'>
			<h6 class='card-info__title'>{{ person.title }}</h6>
			<h5 class='card-info__text'>{{ position }}</h5>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
  person: Object
});
const parts = props.person.excerpt.split(' &#8211; ');
const position = parts.length > 0 ? parts[0].trim() : 'Default position';
const image = parts.length > 1 ? parts[1].trim() : 'default-image.jpeg';
</script>

<style scoped lang='scss'>
.card {
	position: relative;
	display: flex;
  align-items: center;
  justify-content: center;
	&-image {
		overflow: hidden;
	}
	&-image,
	&-background {
		height: 100%;
	}
	&-background {
		top: 0;
		width: 100%;
		background-color: var(--clr-black);
		opacity: .6;
	}
	&:hover .card-background {
		opacity: 0;
	}
	&-background,
	&-info {
		position: absolute;
	}
	&-info {
		bottom: 6.2591%;
		width: 100%;
		&__title,
		&__text {
			color: var(--clr-white);
			font-weight: 400;
			text-align: center;
		}
		&__title {
			font-size: 48px;
		}
	}
}
@media screen and (max-width: 1600px) {
	.card-info__title {
		font-size: 40px;
	}
}
@media screen and (max-width: 1440px) {
	.card-info__title {
		font-size: 36px;
	}
}
@media screen and (max-width: 1280px) {
	.card-info__title {
		font-size: 32px;
	}
}
@media screen and (max-width: 1024px) {
	.card-info__title {
		font-size: 26px;
	}
}
@media screen and (min-width: 768px) and (max-width: 992px) {
	.card-info__title {
		font-size: 24px;
	}
}
@media screen and (max-width: 767px) {
	.card {
		width: 160px;
		&-info {
			bottom: 82px;
			&__title {
				font-size: 20px;
			}
			&__text {
				font-size: 14px;
			}
		}
	}
}
</style>
