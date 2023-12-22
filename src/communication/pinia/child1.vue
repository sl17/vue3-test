<template>
   <div>
    <h5>子组件1: {{ infoStore.count }}</h5>
    <button @click="handler">点击修改仓库数据</button>
   </div>
</template>

<script setup lang="ts">
import {ref, reactive } from "vue"
import useInfoStore from "@/pinia/modules/info"

let infoStore = useInfoStore()
const handler = ()=>{
    infoStore.updateNum(5,10)
}


</script>

<style scoped>
button{
    border: 1px solid rgb(22, 22, 22)
}
</style>
