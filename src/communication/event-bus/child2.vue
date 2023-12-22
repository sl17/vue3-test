<template>
   <div>
    <h5>子组件2</h5>
    <button @click="handler">给兄弟传参</button>
   </div>
</template>

<script setup lang="ts">
import {ref, reactive, onUnmounted } from "vue"
import $bus from "@/bus";
const handler = ()=>{
    $bus.emit('car',{name:'sdsd',age:20})
}
// 否则会多次调用
onUnmounted(()=>{
    $bus.off('car')
})
</script>

<style scoped>
 button{
    border: 1px solid #336;
}
</style>
