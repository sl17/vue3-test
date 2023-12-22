<template>
    <div>
        login <router-link to="/home">home</router-link>
        <button @click="goHome">go home
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { useRouter } from "vue-router";
import { API } from "@/api"

onMounted(() => {
    API('/sggt', {},'get').then(res => {
        let { code, data, errorInfo } = res;

        if (code == 0) {

        }
    }).catch(error => {
        console.log(error)
    });

    API('/null', {age: 10}).then(res => {
        let { code, data, errorInfo } = res;

        if (code == 0) {

        }
    }).catch(error => {
        console.log(error)
    });

    API('/sddf', {name:'sdsd'},'json').then(res => {
        let { code, data, errorInfo } = res;

        if (code == 0) {

        }
    }).catch(error => {
        console.log(error)
    });
})

const router = useRouter()
const goHome = () => {
    router.push({
        path: '/home',
        query: {
            id: 100
        }
    })
}
</script>

<style scoped></style>
