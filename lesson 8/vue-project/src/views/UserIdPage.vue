<template>
  <div>
    <p>{{ currentUser.name }} {{ currentUser.surname }} {{ currentUser.father }}</p>
    <button @click="back()">Users</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { User } from '@/types/user'
import {useRouter} from 'vue-router'
const router = useRouter()

interface Props {
  id: string
}
const props = defineProps<Props>()
const currentUser = ref<User>({} as User)
onMounted(()=>{
    const users = JSON.parse(localStorage.getItem('UsersData') as string)
    users.forEach((item:any) => {
        if (item.id == props.id) currentUser.value = item;
    })
})
function back(){
    // location.replace('http://127.0.0.1:5173/users')
    router.push({name:'UserPage'})
}
</script>

<style scoped></style>
