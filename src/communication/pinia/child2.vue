<template>
   <div>
<h5>子组件2 : {{ infoStore.count }}</h5>
<p> pinia 的计算属性返回： {{ total }}</p>
   </div>
</template>

<script setup lang="ts">
import {ref, reactive } from "vue"
import useInfoStore from "@/pinia/modules/info"

let infoStore = useInfoStore()
let total = ref(0)
console.log(infoStore);

total = infoStore.total;
</script>

<style scoped>

</style>
