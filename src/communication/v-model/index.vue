<template>
   <div>
        <h5>v-model</h5>
         <p> 父组件 ： {{ pageNo }} {{ pageSize }}</p>
        <Child v-model:pageNo="pageNo" v-model:pageSize="pageSize"></Child>
   </div>
</template>

<script setup lang="ts">
import {ref, reactive } from "vue"
import Child from "./child.vue"
let pageNo = ref(0)
let pageSize = ref(2)
</script>

<style scoped>

</style>
