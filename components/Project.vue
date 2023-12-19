<template>
	<div class='project'>
		<img
			:src='info.images[0]'
			alt='project image'
			class='project-image btn'
			@click='redirectToProject(info.id)'
		/>

		<div class='project-info'>
			<h3 class='project-info__title btn' @click='redirectToProject(info.id)'>{{ info.title }}</h3>
			<p class='project-info__text'>{{ info.text }}</p>
			<p class='project-info__description'>{{ type }}</p>
		</div>
	</div>
</template>

<script setup>
const router = useRouter();
const props = defineProps({
	info: Object
});
const type = computed(() => {
	if (props.info.type === 'design') {
    return 'Дизайн';
	} else if (props.info.type === 'engineering') {
    return 'Проектирование';
  } else {
    return 'Строительство';
  }
});

function redirectToProject(id) {
	router.push(`/projects/${id}`);
}
</script>

<style scoped lang='scss'>
.project {
	width: 30.9375vw;
	&-image {
		width: 100%;
		height: 352px;
		border-radius: 20px;
	}
	&-info {
		display: grid;
		grid-gap: 32px;
		margin-top: 56px;
		&__title {
			font-size: 44px;
		}
		&__text {
			display: -webkit-box;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}
		&__description {
			font-family: Sofia Sans;
		}
	}
}
@media screen and (max-width: 1600px) {
	.project {
		&-image {
			height: 293px;
		}
		&-info {
			grid-gap: 26.66667px;
			margin-top: 46.66667px;
			&__title {
				font-size: 37px;
			}
		}
	}
}
@media screen and (max-width: 1440px) {
	.project {
		&-image {
			height: 264px;
		}
		&-info {
			grid-gap: 24px;
			margin-top: 42px;
			&__title {
				font-size: 33px;
			}
		}
	}
}
@media screen and (max-width: 1280px) {
	.project {
		&-image {
			height: 235px;
		}
		&-info {
			grid-gap: 21.33333px;
			margin-top: 37.33333px;
			&__title {
				font-size: 29px;
			}
		}
	}
}
@media screen and (max-width: 1024px) {
	.project {
		&-image {
			height: 188px;
		}
		&-info {
			grid-gap: 17.06667px;
			margin-top: 29.86667px;
			&__title {
				font-size: 24px;
			}
		}
	}
}
@media screen and (min-width: 768px) and (max-width: 992px) {
	.project {
		&-image {
			height: 182px;
		}
		&-info {
			grid-gap: 16.53333px;
			margin-top: 28.93333px;
			&__title {
				font-size: 23px;
			}
		}
	}
}
@media screen and (max-width: 767px) {
	.project {
		width: 100%;
		&-image {
			height: 170px;
		}
		&-info {
			grid-gap: 16px;
			margin-top: 26.33px;
			&__title {
				font-size: 24px;
			}
			&__text {
				font-size: 14px;
			}
			&__description {
				font-size: 12px;
			}
		}
	}
}
</style>
