<template>
  <div class='about'>
    <div class='main'>
      <Aboutus class='bigtext' />
      <h2>{{ data.title_main }}</h2>
      <h5 class='main-text'>{{ data.text_main }}</h5>
    </div>

    <Image :source='data.image_main' description='our team' />

    <div class='currently'>
      <h3>{{ data.subtitle_currently }}</h3>
      <div class='currently-content'>
        <h2 class='currently-content__title'>{{ data.title_currently }}</h2>
        <p class='currently-content__text'>{{ data.text_currently }}</p>
        <div v-if='isDevice'></div>
        <div class='currently-content__statictics'>
          <div
            v-for='statistic in statistics'
            :key='statistic.id'
            class='currently-content__statictics-block'
          >
            <h2 class='title'>{{ statistic.excerpt }}</h2>
            <h6 class='text'>{{ statistic.title }}</h6>
          </div>
        </div>
      </div>
    </div>

    <div class='philosophy'>
      <div class='philosophy-content'>
        <h3 class='philosophy-content__subtitle'>{{ data.subtitle_philosophy }}</h3>
        <h2 class='philosophy-content__title'>{{ data.title_philosophy }}</h2>
        <p class='philosophy-content__text'>{{ data.text_philosophy }}</p>
      </div>
      <Slider
        :images='slider'
        description='about us image slider'
        :background='false'
      />
    </div>

    <div class='goal'>
      <div class='goal-content'>
        <h2 class='goal-content__title'>{{ data.title_goal }}</h2>
        <p class='goal-content__text'>{{ data.text_goal }}</p>
      </div>
      <img
        :src='data.image_goal'
        alt='goal image'
        class='goal-image'
      />
    </div>

    <Specialists :subtitle='true' :button='true' />
    <Consultation />
  </div>
</template>

<script setup>
import { useIsDevice } from '@/composables/store';
import { fetchDataBySlug, fetchPostsByCategory, filterByExcerpt, sortByDate } from '@/composables/api';
import Aboutus from '@/components/text/Aboutus.vue';
import Image from '@/components/Image.vue';
import Slider from '@/components/Slider.vue';
import Specialists from '@/components/Specialists.vue';
import Consultation from '@/components/Consultation.vue';

const isDevice = useIsDevice();
const data = await fetchDataBySlug('about_us');
const statisticsData = await fetchPostsByCategory('statistics');
const statistics = sortByDate(statisticsData);
const sliderData = await fetchPostsByCategory('slider');
const slider = filterByExcerpt(sortByDate(sliderData), 'Aboutus');
</script>