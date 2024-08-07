<template>
    <div class="flex flex-col text-sm text-white bg-white/20 backdrop-blur-sm w-[15rem] h-[22rem] rounded-md mt-4">
        <div class="mb-2 p-2 border-b-double border-b-[1px] border-b-serenity">
            <form @submit="submit">
            <input class="w-full text-center transition duration-500 hover:scale-110 italic bg-transparent outline-none placeholder: placeholder-white placeholder-opacity-60" type="text" maxlength="30" placeholder="Write a ToDo, press Enter" :value="todoInput" @input="changeTodo"/>
        </form>
        </div>
        <div class="todo overflow-y-scroll scroll-smooth">
            <div class="flex justify-between w-full h-auto p-2 hover:bg-serenity" v-for="todo in todos">
                <span>{{todo.text}}</span>
                <button class="transition duration-500 hover:scale-150" @click="deleteTodo(todo.id)">X</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

type TODOS = {
    id: number;
    text: string;
};

const todos = ref<TODOS[]>([]);
const todoInput = ref<string>("");
const TODOS_KEY = "todos";

onMounted(() => {
    const savedTodos = localStorage.getItem(TODOS_KEY);
    if (savedTodos) {
        todos.value = JSON.parse(savedTodos);
    }
});

watch(todos, () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos.value));
}, { deep: true });

function deleteTodo(id: number) { 
    todos.value = todos.value.filter((todo)=> todo.id !== id);
}

function changeTodo(event: Event) {
    const target = event.target as HTMLInputElement;
    todoInput.value = target.value;
}

function submit(event: Event) {
    event.preventDefault();
    const newTodoObj = {
        text: todoInput.value,
        id: Date.now(),
    };
    todos.value.push(newTodoObj);
    todoInput.value = "";
}
</script>

<style scoped>
.todo::-webkit-scrollbar {
  display: none;
}
.todo{
   -ms-overflow-style: none;
}
</style>