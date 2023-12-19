<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDevice: useIsDevice(),
    }
  },

  mounted() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
  },

  methods: {
    updateWidth() {
      if (window.innerWidth > 767) {
        this.isDevice = true
      } else {
        this.isDevice = false
      }
    }
  }
}
</script>
