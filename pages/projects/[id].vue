<template>
  <div class='detail'>
    <Image :source='data.image' description='detail' />

    <div class='main'>
      <h2 class='main-title'>{{ project.title }}</h2>

      <div class='main-content'>
        <p class='main-content__text'>{{ project.text }}</p>

        <div class='main-content__description'>
          <div class='main-content__description-box'>
            <h5 class='title'>Локация</h5>
            <p class='text'>{{ project.location }}</p>
          </div>
          <div class='main-content__description-box'>
            <h5 class='title'>Площадь</h5>
            <p class='text'>{{ project.area }}</p>
          </div>
          <div class='main-content__description-box'>
            <h5 class='title'>Сроки</h5>
            <p class='text'>{{ project.deadline }}</p>
          </div>
        </div>
      </div>
      
      <div class='main-galery'>
        <div class='main-galery__images'>
          <div
            v-for='(image, index) in clonedImages'
            :key='index'
            class='main-galery__images-box btn'
            :style="{ transform: `translateX(-${currentIndex * boxWidth}px)` }"
          >
            <img
              :src='image'
              :alt='image.title'
              class='image'
            />
          </div>
        </div>

        <div class='main-galery__buttons'>
          <icon-arrow class='icon btn' @click='prevImage' />
          <icon-arrow class='icon btn' @click='nextImage' />
        </div>
      </div>
      
      <p class='main-text'>{{ project.text }}</p>
    </div>

    <Consultation />
  </div>
</template>

<script setup>
const route = useRoute();
const data = await fetchDataBySlug('projects');
const projectsData = await fetchPostsByCategory('projects');
const projects = sortByDate(projectsData);
projects.forEach((project) => {
  const parsedProject = parseProjectsInfo(project);
  Object.assign(project, parsedProject);
});
const project = projects.find(item => (item.id === route.params.id));
const currentIndex = ref(0);
const totalImages = project.images.length;
const clonedImages = [
  ...project.images,
  ...project.images,
];
const boxWidth = 542;

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + totalImages) % totalImages;
}
function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % totalImages;
}
</script>
