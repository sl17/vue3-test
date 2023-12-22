<script setup lang="ts">
import { reactive } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
// import ModulesProps from "./communication/props/index.vue"

const obj = reactive({
    name:'哈哈1',
    age: 20,
    adderss:'sdsasdsdas'
})
</script>

<template>
  <div>
      <router-view></router-view>
  </div>
  <!-- <HelloWorld msg="Vite + Vue"  :obj="obj" /> -->

  <!-- <ModulesProps></ModulesProps> -->
</template>

<style scoped>

</style>
