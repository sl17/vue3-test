<template>
   <div>
        <h5>孙级组件</h5>
        <p>孙: {{ car }}</p>
        <button @click="handler">修改祖级组件的数据</button>
   </div>
</template>

<script setup lang="ts">
import {ref, reactive, inject } from "vue"

let car:string = inject('TOKEN')
const handler = ()=>{
    car.value = '滑板车'
}
</script>

<style scoped>
button{
    border: 1px solid blueviolet;
}
</style>
