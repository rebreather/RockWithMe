<template>
  <div class="px-[2.4rem] py-[2rem]" id="background" :style="backgroundStyle">
    <Header />
    <Todo />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import Header from './Header.vue';
import Todo from './Todo.vue';

const currentImageIndex = ref(0);
const isWidthFix = ref(false);

const IMAGES_COUNT = 69;

const currentImage = computed(() => {
  return new URL(`../assets/background/${currentImageIndex.value}.png`, import.meta.url).href;
});

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${currentImage.value})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

const imageFix = () => {
  isWidthFix.value = window.innerHeight * 16 < window.innerWidth * 9;
};

const getRandomNum = (): number => {
  return Math.floor(Math.random() * (IMAGES_COUNT - 1));
};

const init = () => {
  currentImageIndex.value = getRandomNum();
  imageFix();
  window.addEventListener("resize", imageFix);
};

onMounted(() => {
  init();
});

onUnmounted(() => {
  window.removeEventListener("resize", imageFix);
});
</script>

<style scoped>
@keyframes fadIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#background {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-size: cover;
}
.backgroundImage {
  animation: fadIn 800ms ease-out;
  height: 100vmax;
}

.widthfix {
  width: 100%;
  height: auto;
}

.hightfix {
  width: auto;
  height: 100%;
}
</style>