<template>
  <div class="w-1/5 h-[2.2rem] mt-32 flex items-center bg-white/20 backdrop-blur-sm rounded-md">
    <form @submit="handleSubmit" method=get action="http://www.google.co.kr/search" target="_blank">
      <input v-model="query" class="p-2 outline-none bg-transparent italic text-sm text-white placeholder: placeholder-white placeholder-opacity-70" placeholder="Search..." type=text name=q size=25 maxlength=255 autocomplete = "off" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const query = ref('');

const handleSubmit = (event: Event) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  form.submit();
  query.value = '';
};
</script>