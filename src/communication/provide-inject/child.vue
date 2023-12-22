<template>
   <div>
        <h5>父级组件</h5>
        <Son></Son>
   </div>
</template>

<script setup lang="ts">
import {ref, reactive } from "vue"
import Son from './son.vue'
</script>

<style scoped>

</style>
