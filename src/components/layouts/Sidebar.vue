<template>
  <div :class="{ 'sidebar' : true, 'sidebar-open': active }">
    <ul class='sidebar-menu'>
      <li class='sidebar-menu__text' @click="$emit('close')">
        <router-link to='/services'>Наши услуги</router-link>
      </li>
      <li class='sidebar-menu__text' @click="$emit('close')">
        <router-link to='/team'>Команда</router-link>
      </li>
      <li class='sidebar-menu__text' @click="$emit('close')">
        <router-link to='/projects'>Проекты</router-link>
      </li>
      <li class='sidebar-menu__text' @click="$emit('close')">
        <router-link to='/about_us'>О компании</router-link>
      </li>
    </ul>
    
    <Button
      :color='1'
      text='Получить консультацию'
      @click="$emit('close'), $emit('open')"
    />
  </div>
</template>

<script setup>
import Button from '@/components/Button.vue';

const props = defineProps({
  active: Boolean
});
</script>
