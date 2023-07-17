<template>
  <div>
    <h1>Main Store Page</h1>
    <div class="sell">
      <goods-card v-for="skin in skins" :key="skin.id" :body="skin.body"></goods-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import GoodsCard from '@/components/GoodsCard.vue'
import {ref, onMounted} from 'vue'
const skins = ref([
    {
        id:1,
        body:'Best skin forever'
    },
    {
        id:2,
        body:'Buu skin'
    },
    {
        id:2,
        body:'Brilliant Skin'
    },
])
onMounted(()=>{
    const cards = document.querySelectorAll('.card')
    cards.forEach(card=> card.addEventListener(`click`,()=>{
        location.replace('http://localhost:5173/cart')
    }))
})
</script>

<style scoped>
.sell {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
