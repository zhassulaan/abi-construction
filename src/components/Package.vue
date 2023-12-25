<template>
	<div class='package btn'>
		<div class='package-main'>
			<div class='box'>
				<h6 class='box-description'>Пакет</h6>
				<h3 class='box-text'>{{ info.title }}</h3>
			</div>

			<div class='package-main__sub'>
				<div class='box'>
					<h6 class='box-description'>Цена:</h6>
					<p class='box-text'>{{ info.price }}</p>
				</div>
				<div class='box'>
					<h6 class='box-description'>Срок:</h6>
					<p class='box-text'>{{ info.deadline }}</p>
				</div>
			</div>
		</div>

		<Chevron
			:class="{ 'btn': true, 'active': active }"
			v-if='!isDevice'
			@click='isClosed = !isClosed'
		/>

		<div :class="{ 'package-detail': true, 'active': active }">
			<div class='box'>
				<h6 class='box-description'>Что входит:</h6>
				<p
					v-for='(text, index) in info.detail'
					:key='index'
					class='box-text'
				>
					{{ text }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useIsDevice } from '@/composables/store';
import Chevron from '@/components/icons/Chevron.vue';

const isDevice = useIsDevice();
const props = defineProps({
	info: Object
});
const active = ref(false);
</script>

<style setup lang='scss'>
.package {
	display: flex;
	gap: 2.23958vw;
	padding: 35px 1.82292vw;
	border: 1px solid var(--clr-black);
	background-color: var(--clr-black);
	&:hover {
		border: 1px solid var(--clr-grey-2);
		background-color: var(--clr-white);
	}
	&-main,
	&-detail {
		.box {
			display: flex;
			flex-direction: column;
			&-description {
				color: var(--clr-grey-1);
				font-family: Sofia Sans;
				font-size: 16px;
			}
			&-text {
				color: var(--clr-white);
			}
		}
	}
	&:hover .box-text {
		color: var(--clr-black);
	}
	&-main {
		width: 27.08333vw;
		.box {
			gap: 8px;
		}
		&__sub {
			display: flex;
			justify-content: space-between;
			padding-top: 42.5px;
			border-top: 1px solid var(--clr-line);
			margin-top: 42.5px;
			.box {
				&:first-child {
					max-width: 10.41667vw;
				}
				&:last-child {
					width: 12.70833vw;
				}
				&-description {
					font-family: Inter;
					font-size: 18px;
				}
				&-text {
					font-size: 20px;
				}
			}
		}
	}
	&:hover .package-main__sub {
		border-top: 1px solid var(--clr-grey-2);
	}
	&-detail {
		width: 22.23958vw;
		.box {
			&-description {
				margin-bottom: 8px;
				font-family: Inter;
				font-size: 18px;
			}
			&-text {
				padding: 10px 0;
				font-size: 20px;
			}
		}
	}
}
@media screen and (max-width: 1600px) {
	.package {
		padding: 29.16667px 1.82292vw;
		&-main,
		&-detail {
			.box-description {
				font-size: 13px;
			}
		}
		&-main__sub,
		&-detail {
			.box {
				&-description {
					font-size: 15px;
				}
				&-text {
					font-size: 17px;
				}
			}
		}
		&-main {
			.box {
				gap: 6.66667px;
			}
			&__sub {
				padding-top: 35.41667px;
				margin-top: 35.41667px;
			}
		}
		&-detail .box {
			&-description {
				margin-bottom: 6.66667px;
			}
			&-text {
				padding: 8.33333px 0;
			}
		}
	}
}
@media screen and (max-width: 1440px) {
	.package {
		padding: 26.25px 1.82292vw;
		&-main,
		&-detail {
			.box-description {
				font-size: 12px;
			}
		}
		&-main__sub,
		&-detail {
			.box {
				&-description {
					font-size: 14px;
				}
				&-text {
					font-size: 15px;
				}
			}
		}
		&-main {
			.box {
				gap: 6px;
			}
			&__sub {
				padding-top: 31.875px;
				margin-top: 31.875px;
			}
		}
		&-detail .box {
			&-description {
				margin-bottom: 6px;
			}
			&-text {
				padding: 7.5px 0;
			}
		}
	}
}
@media screen and (max-width: 1280px) {
	.package {
		padding: 23.33333px 1.82292vw;
		&-main,
		&-detail {
			.box-description {
				font-size: 11px;
			}
		}
		&-main__sub,
		&-detail {
			.box {
				&-description {
					font-size: 12px;
				}
				&-text {
					font-size: 13px;
				}
			}
		}
		&-main {
			.box {
				gap: 5.33333px;
			}
			&__sub {
				padding-top: 28.33333px;
				margin-top: 28.33333px;
			}
		}
		&-detail .box {
			&-description {
				margin-bottom: 5.33333px;
			}
			&-text {
				padding: 6.66667px 0;
			}
		}
	}
}
@media screen and (max-width: 1024px) {
	.package {
		padding: 18.66667px 1.82292vw;
		&-main,
		&-detail {
			.box-description {
				font-size: 9px;
			}
		}
		&-main__sub,
		&-detail {
			.box {
				&-description {
					font-size: 10px;
				}
				&-text {
					font-size: 11px;
				}
			}
		}
		&-main {
			.box {
				gap: 4.26667px;
			}
			&__sub {
				padding-top: 22.66667px;
				margin-top: 22.66667px;
			}
		}
		&-detail .box {
			&-description {
				margin-bottom: 4.26667px;
			}
			&-text {
				padding: 5.33333px 0;
			}
		}
	}
}
@media screen and (min-width: 768px) and (max-width: 992px) {
	.package {
		padding: 18.08333px 1.82292vw;
		&-main,
		&-detail {
			.box-description {
				font-size: 8px;
			}
		}
		&-main__sub,
		&-detail {
			.box {
				&-description {
					font-size: 9px;
				}
				&-text {
					font-size: 10px;
				}
			}
		}
		&-main {
			.box {
				gap: 4.13333px;
			}
			&__sub {
				padding-top: 21.95833px;
				margin-top: 21.95833px;
			}
		}
		&-detail .box {
			&-description {
				margin-bottom: 4.13333px;
			}
			&-text {
				padding: 5.16667px 0;
			}
		}
	}
}
@media screen and (max-width: 767px) {
	.package {
		flex-direction: column;
		gap: 24px;
		padding: 36px 11.25vw;
		&-main,
		&-detail {
			width: 100%;
			.box {
				&-description {
					font-size: 16px;
				}
				&-text {
					font-size: 30px;
				}
			}
		}
		&-main__sub,
		&-detail {
			.box {
				&-description {
					font-size: 18px;
				}
				&-text {
					font-size: 20px;
				}
			}
		}
		&-main {
			.box {
				gap: 8px;
			}
			&__sub {
				flex-direction: column;
				gap: 16px;
				padding-top: 42.5px;
				margin-top: 42.5px;
				.box {
					&:first-child,
					&:last-child {
						width: 100%;
						max-width: 100%;
					}
				}
			}
		}
		.btn.active {
			transform: rotate(-180deg);
		}
		&-detail {
			overflow: hidden;
			max-height: 0;
			&.active {
				max-height: 1000px;
			}
		}
	}
}
</style>
