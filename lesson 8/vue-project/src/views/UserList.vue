<template>
  <div>
    <div class="nav__users">
      <select name="filter" id="filterUsers">
        <option value="default">Default</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
      </select>
      <button @click="addrelocate()" id="userAdd">Add User</button>
    </div>
    <user-card
      v-for="user in users"
      :key="user.id"
      :user-id="user.id"
      :name="user.name"
      :surname="user.surname"
      :father="user.father"
      :role="user.role"
    ></user-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import UserCard from '@/components/UserCard.vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const data = [
  {
    id: 1,
    name: 'Leanne',
    surname: 'Graham',
    father: 'Bret',
    role: 'student',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442'
  },
  {
    id: 2,
    name: 'Ervin',
    surname: 'Howell',
    father: 'Antonette',
    role: 'student',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125'
  },
  {
    id: 3,
    name: 'Clementine',
    surname: 'Bauch',
    father: 'Samantha',
    role: 'student',
    email: 'Nathan@yesenia.net',
    phone: '1-463-123-4447'
  },
  {
    id: 1079584103849231,
    name: 'Temirlan',
    surname: 'Tuleubayev',
    father: 'NN',
    role: 'teacher',
    email: '@u2kox',
    phone: '87770009911'
  }
]
onMounted(() => {
    if(!localStorage.getItem('UsersData')){
        localStorage.setItem('UsersData', JSON.stringify(data))
    }
})
const users = ref(JSON.parse(localStorage.getItem('UsersData') as string))
function addrelocate() {
  // location.replace('http://127.0.0.1:5173/users/add')
  router.push({name:'UserAdd'})
}
</script>

<style scoped>
.nav__users {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 20px;
}
</style>
