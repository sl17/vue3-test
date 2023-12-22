<template>
    <div>
        <h5>solt</h5>
        <Child :todos="todos">
            <template v-slot="{ $row, $index }">
                <span :style="{color: $row.done?'green':'red'}">{{ $row.title }}--{{ $index }}</span>
            </template>
        </Child>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import Child from './child.vue'

let todos = ref([
    { id: 1, title: '吃饭', done: false },
    { id: 2, title: '喝水', done: true },
    { id: 3, title: '睡觉', done: false },
])
</script>

<style scoped></style>
