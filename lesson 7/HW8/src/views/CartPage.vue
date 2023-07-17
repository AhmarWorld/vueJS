<template>
    <div>
        <h1>Cart</h1>
        <goods-card :body="'Briliant skin'"></goods-card>
        <h3>Price: 50$</h3>
        <a class="button" href="http://localhost:5173/pay">Pay</a>
    </div>
</template>

<script setup lang="ts">
import GoodsCard from '@/components/GoodsCard.vue'
</script>

<style scoped>
.button{
    text-decoration: none;
    color: wheat;
    padding: 5px 10px 5px 10px;
    background-color: teal;
    border-radius: 8px;
}
</style>