<template>
    <div class="card">
        <img src="https://wiki.swapskins.com/_nuxt/img/3e9bef3.png" alt="#">
        <h3>AK-Bloody Sport</h3>
        <p>{{props.body}}</p>
    </div>
</template>

<script setup lang="ts">
interface Props{
    body: string
}
const props = defineProps<Props>()
</script>

<style scoped>
.card{
    margin-top: 50px;
    width: 300px;
    height: 400px;
    border: 1px solid red;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transition: 0.3s;
}
.card:hover{
    scale: 1.1;
}
.card img{
    width: 290px;
}
</style>