<template>
   <div>
        <h5>作用域插槽</h5>
        <ul>
            <li v-for="(item,index) in todos" :key="item.id">
                <slot :$row="item" :$index="index"></slot>
            </li>
        </ul>
   </div>
</template>

<script setup lang="ts">
import {ref, reactive } from "vue"
defineProps(['todos'])
</script>

<style scoped>

</style>
