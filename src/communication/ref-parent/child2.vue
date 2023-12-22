<template>
   <div>
    <p>子组件2 ￥：{{ money }}</p>
    <button @click="getMoney($parent)">给我钱</button>
   </div>
</template>

<script setup lang="ts">
import {ref, reactive } from "vue"

let money = ref(100)
const getMoney = ($parent)=>{
    money.value += 500;
    console.log($parent.money);
    $parent.money-=500
    
}
</script>

<style scoped>
button{
    border: 1px solid red;
}
</style>
