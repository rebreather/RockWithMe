<template>
    <div class="flex justify-center">
        <span class="absolute bottom-3 text-white text-xs italic">{{ quote }}</span>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const quote = ref('');

const QUOTES = [
    {
        quote: "행복에 정의는 없어요."
    },
    {
        quote: "저희는 절대 이렇게 주시는 사랑 잊지 않겠습니다."
    },
    {
        quote: "가수가 되고 싶어서 한국에 왔는데, 제가 만약에 이 선택을 안 했으면 진짜 너무 후회했을 것 같아요."
    },
    {
        quote: "우리 캐럿들을 캐럿이라고 부를 수 있어서 너무 속이 시원해요."
    },
    {
        quote: "보답할 수 있게 더 열심히 해서 여러분들 꼭 멋있게, 저희도 멋있게 해서 같이 멋있어집시다!"
    },
    {
        quote: "You’re no longer 17. Nope. I’m ALWAYS 17."
    },
    {
        quote: "우린 이미 시작했고, 끝을 향해 달려가고 있어요. 우리가 여러분을 최고로 만들어 드릴게요."
    },
    {
        quote: "진짜 캐럿들 있으면 용기가 생겨요."
    },
    {
        quote: "여러분들과 저희의 관계는 아무도 흉내 못 냅니다!"
    },
    {
        quote: "저희 13명은 영원히 여러분을 위해서 음악 하겠습니다."
    },
    {
        quote: "하기 싫은 걸 해야 하고 싶은 것도 한다."
    },
    {
        quote: "여러분이 없었다면 지금의 저희도 없었을 거예요."
    },
    {
        quote: "어디든 다 길이네요."
    },
    {
        quote: "이 밤이 지나도 우리는 변하지 않았으면 좋겠습니다."
    },
];

onMounted(() => {
    setQuote();
});

function setQuote() {
    quote.value = QUOTES[Math.floor(Math.random() * QUOTES.length)].quote;
}

</script>