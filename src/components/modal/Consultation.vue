<template>
	<div class='consultation'>
		<div class='consultation-background btn' @click="$emit('close')"></div>
		
		<div class='consultation-content'>
			<Close
				class='consultation-content__close btn'
				@click="$emit('close')"
			/>

			<h6 class='consultation-content__title'>Получить консультацию</h6>
			<div class='consultation-content__form'>
				<Form text='Имя' />
				<Form text='Телефон' />
				<Button
					:color='0'
					text='Отправить'
					@click="$emit('close')"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import Button from '@/components/Button.vue';
import Form from '@/components/Form.vue';
import Close from '@/components/icons/Close.vue';
</script>

<style scoped lang='scss'>
.consultation {
	&-background,
	&-content {
		position: fixed;
	}
	&-background {
		z-index: 6;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .3);
	}
	&-content {
		z-index: 7;
		top: 50%;
		left: 50%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transform: translate(-50%, -50%);
		width: 43.90625vw;
		height: 566px;
		padding: 87px 2.34375vw 116px;
		background-color: var(--clr-white);
		&__close {
			position: absolute;
			top: 6.18374%;
			right: 5.21947%;
			width: 23px;
			height: 23px;
		}
		&__title {
			font-size: 35px;
			font-weight: 500;
			text-align: center;
		}
		&__form {
			display: grid;
			grid-gap: 21px;
			margin: 0 auto;
			.button {
				width: 20.10467vw;
				margin-top: 51px;
			}
		}
	}
}
@media screen and (max-width: 1600px) {
	.consultation {
		&-content {
			height: 471.66667px;
			padding: 72.5px 2.34375vw 96.66667px;
			&__close {
				width: 19.16667px;
				height: 19.16667px;
			}
			&__title {
				font-size: 29px;
			}
			&__form {
				grid-gap: 17.5px;
				.button {
					margin-top: 42.5px;
				}
			}
		}
	}
}
@media screen and (max-width: 1440px) {
	.consultation {
		&-content {
			height: 424.5px;
			padding: 65.25px 2.34375vw 87px;
			&__close {
				width: 17.25px;
				height: 17.25px;
			}
			&__title {
				font-size: 26px;
			}
			&__form {
				grid-gap: 15.75px;
				.button {
					margin-top: 38.25px;
				}
			}
		}
	}
}
@media screen and (max-width: 1280px) {
	.consultation {
		&-content {
			height: 377.33333px;
			padding: 58px 2.34375vw 77.33333px;
			&__close {
				width: 15.33333px;
				height: 15.33333px;
			}
			&__title {
				font-size: 23px;
			}
			&__form {
				grid-gap: 14px;
				.button {
					margin-top: 34px;
				}
			}
		}
	}
}
@media screen and (max-width: 1024px) {
	.consultation {
		&-content {
			height: 301.86667px;
			padding: 46.4px 2.34375vw 61.86667px;
			&__close {
				width: 12.26667px;
				height: 12.26667px;
			}
			&__title {
				font-size: 19px;
			}
			&__form {
				grid-gap: 11.2px;
				.button {
					margin-top: 27.2px;
				}
			}
		}
	}
}
@media screen and (min-width: 768px) and (max-width: 992px) {
	.consultation {
		&-content {
			height: 292.43333px;
			padding: 44.95px 2.34375vw 59.93333px;
			&__close {
				width: 11.88333px;
				height: 11.88333px;
			}
			&__title {
				font-size: 18px;
			}
			&__form {
				grid-gap: 10.85px;
				.button {
					margin-top: 26.35px;
				}
			}
		}
	}
}
@media screen and (max-width: 767px) {
	.consultation {
		&-content {
			width: 100%;
			height: 416px;
			padding: 30px 5.3125vw 40px;
			&__close {
				top: 3.84616%;
				right: 5%;
				width: 16px;
				height: 16px;
			}
			&__title {
				font-size: 30px;
			}
			&__form {
				grid-gap: 21px;
				margin: 0;
				.form,
				.button {
					width: 100%;
				}
				.button {
					margin-top: 51px;
				}
			}
		}
	}
}
</style>
