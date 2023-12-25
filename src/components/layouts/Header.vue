<template>
  <header class='header'>
    <router-link to='/'>
      <Logo class='header-logo' />
    </router-link>

    <ul class='header-menu' v-if='isDevice'>
      <li class='header-menu__text'>
        <router-link to='/services'>Наши услуги</router-link>
      </li>
      <li class='header-menu__text'>
        <router-link to='/team'>Команда</router-link>
      </li>
      <li class='header-menu__text'>
        <router-link to='/projects'>Проекты</router-link>
      </li>
      <li class='header-menu__text'>
        <router-link to='/about_us'>О компании</router-link>
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
import { useIsDevice } from '@/composables/store';
import Button from '@/components/Button.vue';
import Logo from '@/components/icons/Logo.vue';

const isDevice = useIsDevice();
const props = defineProps({
  active: Boolean
});
</script>
