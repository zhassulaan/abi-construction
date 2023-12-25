<template>
  <footer class='footer'>
    <router-link to='/'>
      <Logo class='footer-logo' />
    </router-link>

    <ul class='footer-menu'>
      <li class='footer-menu__text'>
        <router-link to='/services'>Наши услуги</router-link>
      </li>
      <li class='footer-menu__text'>
        <router-link to='/team'>Команда</router-link>
      </li>
      <li class='footer-menu__text'>
        <router-link to='/projects'>Проекты</router-link>
      </li>
      <li class='footer-menu__text'>
        <router-link to='/about_us'>О компании</router-link>
      </li>
    </ul>

    <div class='footer-content'>
      <div class='social'>
        <Facebook
          class='social-icon btn'
          @click="redirectToSocials('https://www.facebook.com/abigroupkz')"
        />
        <Instagram
          class='social-icon btn'
          @click="redirectToSocials('https://www.instagram.com/abigroup_kz')"
        />
      </div>

      <div class='website'>
        <p class='website-text'>Разработка сайта — Zerone Technology</p>
        <img
          src='@/assets/images/logo.png'
          alt='logo'
          class='website-logo'
        />
      </div>
    </div>
  </footer>
</template>

<script setup>
import Facebook from '@/components/icons/Facebook.vue';
import Instagram from '@/components/icons/Instagram.vue';
import Logo from '@/components/icons/Logo.vue';

function redirectToSocials(id) {
  window.location.href = id;
}
</script>
