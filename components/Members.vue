<template>
	<div class='members'>
		<Card
			v-for='member in teamMembers'
			:key='member.date'
			:person='member'
		/>
	</div>
</template>

<script setup>
import { fetchPostsByCategory } from '../composables/api';

const teamMembers = await fetchPostsByCategory('team');
</script>

<style scoped lang='scss'>
.members {
	display: flex;
	overflow-x: scroll;
	overflow-y: hidden;
	width: 100%;
	height: 687px;
	scrollbar-width: none;
  -ms-overflow-style: none;
	&::-webkit-scrollbar {
		display: none;
	}
}
@media screen and (max-width: 1600px) {
	.members {
		height: 573px;
	}
}
@media screen and (max-width: 1440px) {
	.members {
		height: 515px;
	}
}
@media screen and (max-width: 1280px) {
	.members {
		height: 458px;
	}
}
@media screen and (max-width: 1024px) {
	.members {
		height: 366px;
	}
}
@media screen and (min-width: 768px) and (max-width: 992px) {
	.members {
		height: 355px;
	}
}
@media screen and (max-width: 767px) {
	.members {
		height: 447px;
	}
}
</style>
