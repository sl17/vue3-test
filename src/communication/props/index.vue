<template>
   <div >
        <h5>Props</h5>
        <p>二级路由 - 父组件</p>
        <hr>
        <Child info="我是父组件传过来" :money="money"></Child>
   </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Child from "./Child.vue"
let money = ref(10000)
</script>

<style scoped>

</style>
 