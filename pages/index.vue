<template>
  <div class='home'>
    <div class='main'>
      <Slider
        :images='slider'
        description='home image slider'
        :background='true'
      />
      <div class='main-content'>
        <h2 class='main-content__text'>{{ data.text_main }}</h2>
        <Button
          :color='1'
          :text='data.button_main'
          @click="router.push('/projects')"
        />
      </div>
    </div>

    <div class='about'>
      <h2 class='about-title'>{{ data.title_aboutus }}</h2>
      <div class='about-content'>
        <p class='about-content__text'>{{ data.text_aboutus1 }}</p>
        <p class='about-content__text'>{{ data.text_aboutus2 }}</p>
      </div>
      <Button
        :color='0'
        :text='data.button_aboutus'
        @click="router.push('/about_us')"
      />
    </div>
    
    <div class='services'>
      <div
        v-for='service in direction'
        :key='service.id'
        class='services-block'
      >
        <div class='services-block__card btn'>
          <img
            :src='service.excerpt'
            :alt='`service ${service.title}`'
            class='image'
          />
          <div class='background'></div>
          <h3 class='text'>{{ service.title }}</h3>
        </div>
      </div>
    </div>

    <Specialists :button='true' />

    <div class='contacts'>
      <div class='contacts-content'>
        <div
          v-for='contactsInfo in contacts'
          :key='contactsInfo.id'
          class='contacts-content__card'
        >
          <h4 class='contacts-content__card-title'>{{ contactsInfo.title }}</h4>
          <h6 class='contacts-content__card-text'>{{ contactsInfo.excerpt }}</h6>
        </div>
      </div>
      <img
        src='@/assets/images/map.png'
        alt='map'
        class='contacts-map'
      />
      <!-- <div id='map' class='map'></div> -->
    </div>

    <div class='faq'>
      <h2 class='faq-title'>{{ data.title_faq }}</h2>
      <div class='faq-questions'>
        <Accordion
          v-for='faqInfo in faq'
          :key='faqInfo.id'
          :question='faqInfo.title'
          :answer='faqInfo.excerpt'
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const data = await fetchDataBySlug('main');

const sliderData = await fetchPostsByCategory('slider');
const slider = filterByExcerpt(sortByDate(sliderData), 'Home');
const directionData = await fetchPostsByCategory('direction');
const direction = sortByDate(directionData);
direction.forEach((item) => {
  const parts = item.excerpt.split(' &#8211; ');
  item.excerpt = parts.length > 1 ? parts[1].trim() : 'default-image.jpeg';
});
const contactsData = await fetchPostsByCategory('contacts');
const contacts = sortByDate(contactsData);
const faqData = await fetchPostsByCategory('faq');
const faq = sortByDate(faqData);
faq.forEach((item) => {
  if (typeof item.excerpt === 'string') {
    item.excerpt = item.excerpt.split(' &#8211; ');
  }
});
</script>

<!-- <script>
export default {
  name: "MapGoogle",

  data() {
    return {
      map: null
    }
  },

  mounted() {
    // This is the actual trigger that loads GM dynamically.
    // Here we run our global GM func: GM_load.
    // Side note; annoyance: As you see, using Vue mixin's, you have functions available from out-of-nowhere. Research alternative to mixin's, especially in Vue3/Nuxt3.
    this.GM_load()
    .then( () => {
      this.initMap()
    })
  },

  methods: {
    initMap() {
      this.map = new this.GM_instance.maps.Map(document.getElementById("map"), {
        center: { lat: 43.682284, lng: -79.401603 },
        zoom: 8,
      })
      this.GM_loadPlaceService(this.map)
      this.map.addListener("click", (e) => {
        this.processClick(e)
      })
    }
  },

  async processClick(e) {
    // If clicked target has a placeId, user has clicked a GM place
    if (e.placeId) {
      let placeRequest = {
        placeId: e.placeId,
        //fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
      }
      // Get place details
      let googlePlace = await this.GM_getPlaceDetails(placeRequest)
      console.log("googlePlace %O", googlePlace)
    }
  }
}
</script> -->

