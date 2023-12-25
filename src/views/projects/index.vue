<template>
  <div class='projects'>
    <Image :source='data.image' description='projects' />

    <div class='main'>
      <Projects class='bigtext' />
      <div class='main-header'>
        <h2>{{ data.title }}</h2>
        <Button
          :color='0'
          :text='data.button_consultation'
          @click="$emit('open')"
        />
      </div>
      
      <div v-if='isDevice' class='main-filter'>
        <Category
          v-for='item in filter'
          :key='item.id'
          :text='item.title'
          :isActive='activeCategories === item.excerpt'
          @toggle='toggleCategory(item.excerpt)'
          />
      </div>
      
      <div class='main-projects'>
        <Project
          v-for='project in displayedProjects'
          :key='id'
          :info='project'
        />
      </div>
      
      <Button
        v-if='showButton'
        :color='0'
        :text='data.button_show'
        class='main-button'
        @click='loadMoreProjects'
      />
    </div>

    <Consultation />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useIsDevice } from '@/composables/store';
import { fetchDataBySlug, fetchPostsByCategory, sortByDate } from '@/composables/api';
import { parseProjectsInfo } from '@/composables/utils';
import Image from '@/components/Image.vue';
import Projects from '@/components/text/Projects.vue';
import Button from '@/components/Button.vue';
import Category from '@/components/Category.vue';
import Project from '@/components/Project.vue';
import Consultation from '@/components/Consultation.vue';

const isDevice = useIsDevice();
const data = await fetchDataBySlug('projects');
const directionData = await fetchPostsByCategory('direction');
const direction = sortByDate(directionData);
direction.forEach((item) => {
  const parts = item.excerpt.split(' &#8211; ');
  item.excerpt = parts.length > 0 ? parts[0].trim() : 'default ID';
});
const filter = [
  { id: 0, title: 'Все проекты', excerpt: 'all' },
  ...direction
];
const activeCategories = ref(filter[0].excerpt);

const projectsData = await fetchPostsByCategory('projects');
let projects = sortByDate(projectsData);
projects.forEach((project) => {
  const parsedProject = parseProjectsInfo(project);
  Object.assign(project, parsedProject);
});
projects = projects.sort((a, b) => a.id - b.id);
let visibleProjectsCount = ref(4);
const displayedProjects = ref(projects.slice(0, visibleProjectsCount.value));
const showButton = ref(visibleProjectsCount.value === projects.length);

function changeDisplayedProjects() {
  displayedProjects.value = (activeCategories.value === 'all') ?
    projects
      :
    projects.filter(item => item.type === activeCategories.value);
  displayedProjects.value = displayedProjects.value.slice(0, visibleProjectsCount.value);
}
function toggleCategory(category) {
  activeCategories.value = category;
  changeDisplayedProjects()
}
function loadMoreProjects() {
  const remainingProjects = projects.length - visibleProjectsCount.value;
  const projectsToLoad = Math.min(4, remainingProjects);

  visibleProjectsCount.value += projectsToLoad;
  changeDisplayedProjects()
  if (visibleProjectsCount.value === projects.length) {
    showButton.value = false;
  }
};
</script>
