<template>
   <div>
        <h5>祖级组件 {{car  }}</h5>
        <Child></Child>
   </div>
</template>

<script setup lang="ts">
import {ref, reactive, provide } from "vue"
import Child from "./child.vue"


let car = ref('飞机')

//祖先组件给后代组件提供数据I
//两个参数:第一个参数就是提供的数据key
//第二个参数:祖先组件提供数据
provide('TOKEN', car);
</script>

<style scoped>

</style>
