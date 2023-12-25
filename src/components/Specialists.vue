<template>
	<div class='specialists'>
		<Team v-if='bigtext' class='bigtext' />
		<Ourteam v-if='!bigtext' class='bigtext' />
		<div class='specialists-content'>
			<h3 v-if='subtitle' class='subtitle'>{{ data2.subtitle_team }}</h3>
			<h2 class='title'>{{ data.title_team }}</h2>
			<h5 v-if='description' class='description'>{{ data.text_team }}</h5>
		</div>

		<Members />
		<Button
			v-if='button'
			:color='0'
			:text='data2.button_team'
			@click="router.push('/team')"
		/>
	</div>
</template>

<script setup>
import { fetchDataBySlug } from '@/composables/api';
import { useRouter } from 'vue-router';
import Team from '@/components/text/Team.vue';
import Ourteam from '@/components/text/Ourteam.vue';
import Members from '@/components/Members.vue';
import Button from '@/components/Button.vue';

const router = useRouter();
const props = defineProps({
	subtitle: {
		type: Boolean,
		default: false
	},
  description: {
		type: Boolean,
		default: false
	},
  button: {
		type: Boolean,
		default: false
	},
  bigtext: {
		type: Boolean,
		default: false
	}
});
const data = await fetchDataBySlug('team');
const data2 = await fetchDataBySlug('about_us');
</script>

<style scoped lang='scss'>
.specialists {
	position: relative;
	.bigtext {
		width: 47.5452vw;
	}
	&-content {
		display: flex;
		flex-direction: column;
		padding: 0 18.28125vw;
		.subtitle,
		.title,
		.description {
			text-align: center;
		}
		.description {
			font-weight: 400;
			margin: 0 auto;
		}
	}
	.button {
		margin: auto;
	}
}
@media screen and (max-width: 767px) {
	.specialists-content {
		padding: 0 5vw;
		.subtitle,
		.title,
		.description {
			text-align: left;
		}
		.title {
			letter-spacing: -1.6px;
		}
	}
}
</style>
