<template>
	<div class='consultation'>
		<h4 class='consultation-title'>Получить консультацию</h4>

		<div class='consultation-form'>
			<Form text='Имя' />
			<Form text='Телефон' />
			<Button :color='0' text='Отправить' />
		</div>
	</div>
</template>

<script setup>
import Form from '@/components/Form.vue';
import Button from '@/components/Button.vue';
</script>

<style setup lang='scss'>
.consultation {
	display: flex;
	flex-direction: column;
	gap: 80px;
	padding: 0 18.28125vw;
	&-title {
		font-weight: 500;
	}
	&-form {
		display: flex;
		align-items: flex-end;
		gap: 1.5625vw;
		.button {
			width: 20.10417vw;
		}
	}
}
@media screen and (max-width: 1600px) {
	.consultation {
		gap: 66.66667px;
	}
}
@media screen and (max-width: 1440px) {
	.consultation {
		gap: 60px;
	}
}
@media screen and (max-width: 1280px) {
	.consultation {
		gap: 53.33333px;
	}
}
@media screen and (max-width: 1024px) {
	.consultation {
		gap: 42.66667px;
	}
}
@media screen and (min-width: 768px) and (max-width: 992px) {
	.consultation {
		gap: 41.33333px;
	}
}
@media screen and (max-width: 767px) {
	.consultation {
		gap: 41px;
		padding: 0 5vw;
		&-form {
			flex-direction: column;
			gap: 12px;
			.form,
			.button {
				width: 100%;
			}
			.button {
				height: 40px;
				margin-top: 28px;
			}
		}
	}
}
</style>