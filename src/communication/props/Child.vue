<template>
    <div>
         <h5>子组件,{{ info }}</h5>
         <p>{{ money }}</p>
         <button @click="updateProps">修改数据</button>
    </div>
 </template>
 
 <script setup lang="ts">
 let props = defineProps(['info','money'])
 const updateProps = () =>{
    console.log(props.info);
 }
 </script>
 
 <style scoped>
 button{
    border: 1px solid #336;
}
 </style>
 