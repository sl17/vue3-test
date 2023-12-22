<template>
    <div>
        <p>home 一级路由
            <router-link to="/login">login</router-link>
        </p>
        <div class="tab">
            <router-link to="/home/props">props</router-link>
            <router-link to="/home/cuctom-event">cuctom-event</router-link>
            <router-link to="/home/event-bus">event-bus</router-link>
            <router-link to="/home/v-model">v-model</router-link>
            <router-link to="/home/ref-parent">ref-parent</router-link>
            <router-link to="/home/provide-inject">provide-inject</router-link>
            <router-link to="/home/pinia">pinia</router-link>
            <router-link to="/home/solt">solt</router-link>
            
        </div>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"

</script>

<style scoped>
.tab{
    display: flex;
}
.tab a{
    margin-right: 20px;
    border-bottom: 1px solid #999;
}
.tab a.router-link-active{
    border-bottom: 2px solid #000;
}
</style>
