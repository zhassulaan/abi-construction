<template>
  <footer class='footer'>
    <nuxt-link to='/'>
      <icon-logo class='footer-logo' />
    </nuxt-link>

    <ul class='footer-menu'>
      <li class='footer-menu__text'>
        <nuxt-link href='/services'>Наши услуги</nuxt-link>
      </li>
      <li class='footer-menu__text'>
        <nuxt-link href='/team'>Команда</nuxt-link>
      </li>
      <li class='footer-menu__text'>
        <nuxt-link href='/projects'>Проекты</nuxt-link>
      </li>
      <li class='footer-menu__text'>
        <nuxt-link href='/about_us'>О компании</nuxt-link>
      </li>
    </ul>

    <div class='footer-content'>
      <div class='social'>
        <icon-facebook
          class='social-icon btn'
          @click="redirectToSocials('https://www.facebook.com/abigroupkz')"
        />
        <icon-instagram
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
function redirectToSocials(id) {
  window.location.href = id;
}
</script>
