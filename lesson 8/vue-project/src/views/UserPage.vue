<template>
    <div>
        <h1>Users Page</h1>
        <button @click="toMain()">Home Page</button>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
const router = useRouter()
function toMain(){
    // location.replace('http://127.0.0.1:5173')
    router.push({name:'HomePage'})
}
</script>

<style scoped>
</style>