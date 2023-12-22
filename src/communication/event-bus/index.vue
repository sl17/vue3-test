<template>
   <div>
        <h5>Event-Bus</h5>
        <div class="row">
            <Child1></Child1>
            <Child2></Child2>
        </div>
   </div>
</template>
<!-- 
    按爪 mitt     npm install --save mitt
    在 src 目录下新建 bus 文件夹，再新建 index.ts;

 -->

<script setup lang="ts">
import {ref, reactive } from "vue"
import Child1 from "./child1.vue"
import Child2 from "./child2.vue"

</script>

<style scoped>
.row{
    display: flex;
}
.row div{
    padding: 10px;
    border: 1px solid #ccc;
    margin-right: 20px;
}
</style>
