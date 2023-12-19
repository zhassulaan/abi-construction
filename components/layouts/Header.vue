<template>
  <header class='header'>
    <nuxt-link to='/'>
      <icon-logo class='header-logo' />
    </nuxt-link>

    <ul class='header-menu' v-if='isDevice'>
      <li class='header-menu__text'>
        <nuxt-link to='/services'>Наши услуги</nuxt-link>
      </li>
      <li class='header-menu__text'>
        <nuxt-link to='/team'>Команда</nuxt-link>
      </li>
      <li class='header-menu__text'>
        <nuxt-link to='/projects'>Проекты</nuxt-link>
      </li>
      <li class='header-menu__text'>
        <nuxt-link to='/about_us'>О компании</nuxt-link>
      </li>
    </ul>

    <Button
      v-if='isDevice'
      :color='1'
      text='Получить консультацию'
      @click="$emit('open')"
    />
    
    <div
      v-if='!isDevice'
      :class="{ 'header-toggler btn': true, 'close': active }"
      @click="$emit('toggle')"
    >
      <span></span>
    </div>
  </header>
</template>

<script setup>
const isDevice = useIsDevice();
const props = defineProps({
  active: Boolean
});
</script>
