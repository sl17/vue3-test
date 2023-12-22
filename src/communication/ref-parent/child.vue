<template>
   <div>
        <p>子组件: $:{{ money }}</p>
   </div>
</template>

<script setup lang="ts">
import {ref, reactive } from "vue"

let money = ref(50000);
const fly = ()=>{
    console.log('飞');
    
}
defineExpose({
    money,
    fly
})

</script>

<style scoped>

</style>
