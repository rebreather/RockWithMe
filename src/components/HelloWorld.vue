<template>
  hi
  {{ props.msg }}
</template>

<script setup lang="ts">

const props = defineProps({
  msg: String
})

</script>