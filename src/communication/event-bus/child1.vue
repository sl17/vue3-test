<template>
    <div>
        <h5>子组件1</h5>
        <p>{{ obj.name }}</p>
        <p>{{ obj.age }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import $bus from '@/bus';
console.log($bus);

import { onMounted } from "vue";
let obj = reactive({
    name:"",
    age:''
})
//组件挂载完毕的时候,当前组件绑定一个事件,接受将来兄弟组件传递的数据
onMounted(  () => {
    //第一个参数:即为事件类型第二个参数:即为事件回调
     $bus.on('car', (data) => {
        console.log(data);
        obj.name = data.name
        obj.age = data.age
    })
})
</script>

<style scoped></style>
