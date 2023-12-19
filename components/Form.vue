<template>
	<input class='form'
		type='text'
		:placeholder='text'
	/>
</template>

<script setup>
const props = defineProps({
	text: String
});
</script>

<style scoped lang='scss'>
.form {
	width: 20.10467vw;
	height: 62px;
	padding: 16px 0;
	border-bottom: 1px solid var(--clr-grey-2);
	color: var(--clr-black);
	font-family: Inter;
	font-size: 24px;
	font-weight: 400;
	&::placeholder {
		color: var(--clr-grey-1);
		transition: color .3s ease-in-out;
	}
	&:focus::placeholder {
		color: var(--clr-black);
	}
}
@media screen and (max-width: 1600px) {
	.form {
		height: 51.66667px;
		padding: 13.33333px 0;
		font-size: 21px;
	}
}
@media screen and (max-width: 1440px) {
	.form {
		height: 46.5px;
		padding: 12px 0;
		font-size: 18px;
	}
}
@media screen and (max-width: 1280px) {
	.form {
		height: 41.33333px;
		padding: 10.66667px 0;
		font-size: 16px;
	}
}
@media screen and (max-width: 1024px) {
	.form {
		height: 33.06667px;
		padding: 8.53333px 0;
		font-size: 13px;
	}
}
@media screen and (min-width: 768px) and (max-width: 992px) {
	.form {
		height: 32.03333px;
		padding: 8.26667px 0;
		font-size: 12px;
	}
}
@media screen and (max-width: 767px) {
	.form {
		height: 52px;
		padding: 16px 0 17px;
		font-size: 16px;
	}
}
</style>
