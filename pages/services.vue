<template>
  <div class='services'>
    <div class='main'>
      <Image :source='data.image_main' description='main image' />
      <div class='main-content'>
        <h2>{{ data.title_main }}</h2>
        <p class='main-content__text'>{{ data.text_main }}</p>
      </div>
    </div>

    <div class='including'>
      <div class='including-content'>
        <h2 class='including-content__title'>{{ data.title_including }}</h2>
        <div class='including-content__list'>
          <div
            v-for='(service, index) in services'
            :key='index'
            class='including-content__list-box'
          >
            <component :is='servicesIcon[index]' class='icon' />
            <h6 class='title'>{{ service.title }}</h6>
            <p class='text'>{{ service.excerpt }}</p>
          </div>
        </div>
        <div class='including-content__description'>
          <p class='text'>{{ data.text_including1 }}</p>
          <p class='text'>{{ data.text_including2 }}</p>
          <p class='text'>{{ data.text_including3 }}</p>
        </div>
      </div>
      <Image :source='data.image_including' description='including image' />
    </div>

    <div class='advantages'>
      <div class='advantages-content'>
        <h2 class='advantages-content__title'>{{ data.title_advantages }}</h2>
        <div class='advantages-content__list'>
          <div
            v-for='(advantage, index) in advantages'
            :key='index'
            class='advantages-content__list-box'
          >
            <component :is='advantagesIcon[index]' class='icon' />
            <p class='text'>{{ advantage.title }}</p>
          </div>
        </div>
      </div>
      <Image :source='data.image_advantages' description='advantages image' />
    </div>

    <div class='packages'>
      <h4 class='packages-title'>{{ data.title_packages }}</h4>
      <div>
        <Package
          v-for='pack in packages'
          :key='pack.id'
          :info='pack'
        />
      </div>
    </div>

    <Consultation />
  </div>
</template>

<script setup>
import { servicesIcon, advantagesIcon } from '@/assets/data';

const data = await fetchDataBySlug('services');
const servicesData = await fetchPostsByCategory('services');
const services = sortByDate(servicesData);
const advantagesData = await fetchPostsByCategory('advantages');
const advantages = sortByDate(advantagesData);
const packagesData = await fetchPostsByCategory('packages');
const packages = sortByDate(packagesData);
packages.forEach((item) => {
  const parts = item.excerpt.split(' &#8211; ');
  item.price = parts.length > 0 ? parts[0].trim() : 'Default price';
  item.deadline = parts.length > 1 ? parts[1].trim() : 'Default deadline';
  item.detail = parts.length > 2 ? parts[2].trim() : 'Default deadline';
  item.detail = item.detail.split(' &#8212; ');
});
</script>
