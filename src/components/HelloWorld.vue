<template>
    <!-- <p>{{ count }}</p> -->
    <!-- <p>{{ props.msg }}</p> -->
    <p>{{ props1.obj.name }}</p>
    <p>{{ props1.msg }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 设置默认值
interface ChildPropsType {
    msg: string,
    obj: {
        name: string,
        age: number,
        adderss: string
    }
}
// const props1 = InferDefaults<LooseRequired<ChildPropsType>>
const props1 = withDefaults(defineProps<ChildPropsType>(), {
    msg: 'sadsadd',
    obj: {
        name: '2',
        age: 1,
        adderss: 'string'
    }
})
// 默认类型
// const props = defineProps<{
//     msg: string,
//     obj: {
//         name:string,
//         age: number,
//         adderss:string
//     }   
// }>()

const count = ref(0)

</script>
<style scoped>
.read-the-docs {
    color: #888;
}
</style>
