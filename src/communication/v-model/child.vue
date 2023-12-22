<template>
    <div>
        <h5>子组件</h5>
        <button @click="headlerNo"> pageNo {{ pageNo }}</button>
        <button @click="headlerSize"> pageSize {{ pageSize }}</button>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
const props = defineProps(['pageNo', 'pageSize'])
const evClick = defineEmits(['update:pageNo', 'update:pageSize'])

const headlerNo = () => {
    evClick('update:pageNo', props.pageNo + 1)
}
const headlerSize = () => {
    evClick('update:pageSize', props.pageSize + 10)
}
</script>

<style scoped>
 button{
    border: 1px solid #336;
}</style>
