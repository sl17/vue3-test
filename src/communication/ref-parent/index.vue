<template>
   <div>
        <h5>ref-parent</h5>
        <p>￥：{{ money }}</p>
        <button @click="handler">找子组件捡钱</button>
        <Child ref="son"></Child>
        <Child2></Child2>
   </div>
</template>

<script setup lang="ts">
import {ref, reactive } from "vue"
import Child from './child.vue'
import Child2 from './child2.vue'

let money = ref(100000);

let son = ref()
const handler = ()=>{
    money.value += 10;
    console.log(son.value.money);
    son.value.money -=10
    son.value.fly()
    
}
defineExpose({
    money,
})

</script>

<style scoped>
button{
    border: 1px solid #111;
}
</style>
