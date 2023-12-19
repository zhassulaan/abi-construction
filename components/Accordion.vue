<template>
	<div class='accordion'>
		<div class='accordion-question' @click='active = !active'>
			<icon-plus class='accordion-question__icon btn' />
			<p class='accordion-question__text btn'>{{ question }}</p>
		</div>

		<div :class="{ 'accordion-answer': true, 'active': active }">
			<p
				v-if='answer'
				v-for='(item, index) in answer'
				:key='index'
				class='accordion-answer__text'
			>
				{{ item }}
			</p>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	question: String,
	answer: String
});
const active = ref(false);
</script>

<style scoped lang='scss'>
.accordion {
	&-question,
	&-answer {
		display: flex;
	}
	&-question {
		gap: 1.45833vw;
		&__text {
			width: 56%;
			font-size: 28px;
			font-weight: 400;
		}
	}
	&-answer {
		flex-direction: column;
		overflow: hidden;
		transition-duration: .5s;
		max-height: 0;
		padding-top: 0;
		margin-left: calc(33px + 1.45833vw);
		&.active {
			max-height: 1000px;
			padding-top: 30px;
		}
		&__text {
			width: 66%;
			font-size: 25px;
			font-weight: 300;
			color: var(--clr-grey-2);
		}
	}
}
@media screen and (max-width: 1600px) {
	.accordion {
		&-question {
			&__icon {
				width: 27.5px;
				height: 27.5px;
			}
			&__text {
				font-size: 24px;
			}
		}
		&-answer {
			margin-left: calc(27.5px + 1.45833vw);
			&.active {
				padding-top: 25px;
			}
			&__text {
				font-size: 21px;
			}
		}
	}
}
@media screen and (max-width: 1440px) {
	.accordion {
		&-question {
			&__icon {
				width: 24.75px;
				height: 24.75px;
			}
			&__text {
				font-size: 21px;
			}
		}
		&-answer {
			margin-left: calc(24.75px + 1.45833vw);
			&.active {
				padding-top: 22.5px;
			}
			&__text {
				font-size: 19px;
			}
		}
	}
}
@media screen and (max-width: 1280px) {
	.accordion {
		&-question {
			&__icon {
				width: 22px;
				height: 22px;
			}
			&__text {
				font-size: 19px;
			}
		}
		&-answer {
			margin-left: calc(22px + 1.45833vw);
			&.active {
				padding-top: 20px;
			}
			&__text {
				font-size: 17px;
			}
		}
	}
}
@media screen and (max-width: 1024px) {
	.accordion {
		&-question {
			&__icon {
				width: 17.6px;
				height: 17.6px;
			}
			&__text {
				font-size: 15px;
			}
		}
		&-answer {
			margin-left: calc(17.6px + 1.45833vw);
			&.active {
				padding-top: 16px;
			}
			&__text {
				font-size: 13px;
			}
		}
	}
}
@media screen and (min-width: 768px) and (max-width: 992px) {
	.accordion {
		&-question {
			&__icon {
				width: 17.05px;
				height: 17.05px;
			}
		}
		&-answer {
			margin-left: calc(17.05px + 1.45833vw);
			&.active {
				padding-top: 15.5px;
			}
		}
	}
}
@media screen and (max-width: 767px) {
	.accordion {
		&-question {
			gap: 8.75vw;
			&__icon {
				width: 24px;
				height: 24px;
			}
			&__text {
				width: 100%;
				font-size: 20px;
			}
		}
		&-answer {
			margin-left: calc(24px + 8.75vw);
			&.active {
				padding-top: 12px;
			}
			&__text {
				font-size: 18px;
			}
		}
	}
}
</style>
