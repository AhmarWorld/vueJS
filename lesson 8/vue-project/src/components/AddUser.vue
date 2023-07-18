<template>
  <div>
    <input type="text" name="name" id="name" placeholder="name" v-model="user.name" /><br>
    <input type="text" name="surname" id="surname" placeholder="surname" v-model="user.surname" /><br>
    <input type="text" name="father" id="father" placeholder="father name" v-model="user.father" /><br>
    <input type="text" name="role" id="role" placeholder="role" v-model="user.role" /><br>
    <input type="date" name="birth" id="birthDate" v-model="user.birthDate" /><br>
    <button @click="userAddData(user)">Сохранить</button><br>
    <button @click="cancel()">Отмена</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { User } from '@/types/user'

const user = ref<User>({
  name: '',
  surname: '',
  father: '',
  role: '',
  birthDate: ''
})
function userAddData(obj: object){
  const users = JSON.parse(localStorage.getItem('UsersData') as string)
  let newUser = Object.assign({ id: new Date().getTime() } as User, obj)
  users.push(newUser)
  localStorage.setItem('UsersData', JSON.stringify(users))
  location.replace(`http://127.0.0.1:5173/users/${newUser.id}`)
}
function cancel(){
  location.replace('http://127.0.0.1:5173/users')
}
</script>

<style scoped></style>
