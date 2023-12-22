<template>
   <div>
    <h5>父组件</h5>
    <Child1></Child1>
    <Child2></Child2>
   </div>
</template>

<script setup lang="ts">
import {ref, reactive } from "vue"
import Child1 from './child1.vue'
import Child2 from './child2.vue'
</script>

<style scoped>

</style>
