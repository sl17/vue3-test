<template>
    <div>
        <h5>子组件1</h5>
        <button @click="headler">触发自定义</button>
        <button @click="hsh">触发自定义2</button>
    </div>
</template>
 
<script setup lang="ts">
let ss = defineEmits(['xxx', 'dsf'])
const headler = () => {
    ss('xxx', 'hahh')
}
const hsh = () => {
    ss('dsf', 'hahh',12)
}

</script>
 
<style scoped>
button{border: 1px solid rgb(55, 88, 2);}
</style>
 