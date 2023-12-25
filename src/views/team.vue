<template>
  <div class='team'>
    <div class='main'>
      <Ourteam class='bigtext' />
      <h2>{{ data.title_main }}</h2>
      <h5 class='main-text'>{{ data.text_main }}</h5>
    </div>
    
    <div class='achievements'>
      <div class='achievements-content'>
        <h2 class='achievements-content__title'>{{ data.title_achievements }}</h2>
        <h5 class='achievements-content__text'>{{ data.text_achievements }}</h5>
      </div>
      <img
        :src='data.image_achievements'
        alt='achievements'
        class='achievements-image'
      />
    </div>

    <div class='strategy'>
      <h2>{{ data.title_strategy }}</h2>
      <h5 class='strategy-text'>{{ data.text_strategy }}</h5>
    </div>

    <Specialists :description='true' :bigtext='true'/>
    <Consultation />
  </div>
</template>

<script setup>
import { fetchDataBySlug } from '@/composables/api';
import Ourteam from '@/components/text/Ourteam.vue';
import Specialists from '@/components/Specialists.vue';
import Consultation from '@/components/Consultation.vue';

const data = await fetchDataBySlug('team');
</script>
