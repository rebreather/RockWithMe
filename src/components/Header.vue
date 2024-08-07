<template>
    <div class="flex justify-between items-center">
        <div class="flex relative items-center">
            <span class="font-bold text-white text-3xl transition duration-500 hover:scale-130 hover:text-rosequarts">
                {{ time }}
            </span>
            <div class="flex items-center">
                <span class="text-white italic ml-[2rem]">{{ greetingText }}</span>
                <form @submit="submit">
                    <input v-if="!hasNickname" class="outline-none bg-transparent ml-[2rem text-white transition duration-500 hover:scale-110 placeholder:text-rosequarts" type="text" placeholder="Write your nickname :)" :value="nickname" @input="changeNickname" />
                </form>
                <button v-if="!hasNickname" class="rounded-lg p-1 ml-[1rem] text-white transition duration-500 hover:bg-white hover:scale-125 hover:text-rosequarts" @click="submit">submit</button>
            </div>
        </div>
        <div class="rounded-lg p-1 hover:bg-white transition duration-500 hover:scale-125">
            <button class="text-white hover:text-rosequarts" @click="reset">Reset</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const time = ref('');
const nickname = ref('');
const greetingText = ref('');
const hasNickname = ref(false);

onMounted(() => {
    getClock();
    setInterval(getClock, 1000);

    const savedNickname = localStorage.getItem("nickname");
    if (savedNickname !== null) {
        hasNickname.value = true;
        if(savedNickname === '') greetingText.value = `Hi, Stranger! :)`;
        else greetingText.value = `Hi, ${localStorage.getItem("nickname")}! :)`;
    }
});

function changeNickname(event: Event) {
    const target = event.target as HTMLInputElement;
    nickname.value = target.value;
}

function submit() {
    hasNickname.value = true;
    localStorage.setItem("nickname", nickname.value);
    showGreeting();
}

function showGreeting() {
  if(nickname.value === '') greetingText.value = `Hi, Stranger! :)`;
  else greetingText.value = `Hi, ${nickname.value}! :)`;
}

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    time.value = `${hours}:${minutes}`;
}

function reset() {
    localStorage.clear();
    location.reload();
}
</script>