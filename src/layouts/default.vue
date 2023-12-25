<template>
  <div>
    <Header
      :active='sidebar'
      @toggle='toggleSidebar'
      @open='toggleModal'
    />

    <main>
      <Suspense>
        <router-view @open='toggleModal' />
      </Suspense>
    </main>

    <Sidebar
      :active='sidebar'
      @close='toggleSidebar'
      @open='toggleModal'
    />

    <div class='actions'>
      <Action
        :icon='Pen'
        text='Оставить заявку'
        @click='toggleModal'
        />
      <Action
        :icon='Whatsapp'
        text='WhatsApp'
        @click='redirectToWhatsapp'
      />
    </div>

    <Form
      v-if='modal'
      @close='toggleModal'
    />

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, watchEffect } from 'vue';
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue';
import Sidebar from '@/components/layouts/Sidebar.vue';
import Form from '@/components/modal/Consultation.vue';
import Action from '@/components/Action.vue';
import Pen from '@/components/icons/Pen.vue';
import Whatsapp from '@/components/icons/Whatsapp.vue';

const sidebar = ref(false);
const modal = ref(false);
const bodyRef = ref(null);

function redirectToWhatsapp() {
  window.location.href = 'https://wa.me/77078183480';
}
function toggleSidebar() {
  sidebar.value = !sidebar.value;
}
function toggleModal() {
  modal.value = !modal.value;
}

onMounted(() => {
  bodyRef.value = document.body;
});

watch(bodyRef, (newValue) => {
  if (newValue) {
    watchEffect(() => {
      if (sidebar.value || modal.value) {
        bodyRef.value.classList.add('freeze');
      } else {
        bodyRef.value.classList.remove('freeze');
      }
    });
  }
});
</script>

<style scoped>
.actions {
  position: fixed;
  z-index: 3;
  top: 476px;
  right: 62px;
  display: grid;
  grid-gap: 8px;
}
@media screen and (max-width: 1600px) {
  .actions {
    top: 396.66667px;
    right: 51.66667px;
  }
}
@media screen and (max-width: 1440px) {
  .actions {
    top: 357px;
    right: 46.5px;
  }
}
@media screen and (max-width: 1280px) {
  .actions {
    top: 317.33333px;
    right: 41.33333px;
  }
}
@media screen and (max-width: 1024px) {
  .actions {
    top: 253.86667px;
    right: 33.06667px;
  }
}
@media screen and (min-width: 768px) and (max-width: 992px) {
  .actions {
    top: 245.93333px;
    right: 32.03333px;
  }
}
@media screen and (max-width: 767px) {
  .actions {
    top: 300px;
    right: 10px;
    grid-gap: 6px;
  }
}
</style>
