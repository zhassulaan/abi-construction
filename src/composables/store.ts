import { ref } from 'vue';

export const useIsDevice = () => ref(window.innerWidth > 767);

