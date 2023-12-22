<template>
   <div >
        <h5>Custom-Event</h5>
        <p>二级路由 - 父组件 {{ name }} {{ obj.age }}</p>
        <hr>
        <div class="row">
            <!-- vue2框架当中:这种写法自定义事件,可以通过.native修饰符变为原生DOM事件
                vue3框架下面写法其实即为原生DOM事件 
            
                vue3:原生的DOM事件不管是放在标签身上、组件标签身上都是原生DOM事件
            -->

            <Child ></Child>
            <!-- 绑定自定义事件xxx:实现子组件给父组件传递数据 -->
            <Child1 @xxx="headler" @dsf="change"></Child1>
        </div>
   </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import Child from "./Child.vue"
import Child1 from "./Child1.vue"
let name = ref('')
let obj = reactive({name:'',age:''})
const headler = (param1,param2)=>{
    console.log(param1,param2);
    //hahh undefined
    name.value = param1
}
const change = (param1,param2)=>{
    console.log(param1,param2);
    obj.nam = param1;
    obj.age = param2;
}
</script>

<style scoped>
.row{
    display: flex;
}
.row div{
    margin-right:20px;
    border: 1px solid #c7c7c7;
    padding: 20px;
}
</style>
 