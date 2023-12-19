<template>
  <div :class="{ 'sidebar' : true, 'sidebar-open': active }">
    <ul class='sidebar-menu'>
      <li class='sidebar-menu__text' @click="$emit('close')">
        <nuxt-link href='/services'>Наши услуги</nuxt-link>
      </li>
      <li class='sidebar-menu__text' @click="$emit('close')">
        <nuxt-link href='/team'>Команда</nuxt-link>
      </li>
      <li class='sidebar-menu__text' @click="$emit('close')">
        <nuxt-link href='/projects'>Проекты</nuxt-link>
      </li>
      <li class='sidebar-menu__text' @click="$emit('close')">
        <nuxt-link href='/about_us'>О компании</nuxt-link>
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
const props = defineProps({
  active: Boolean
});
</script>
