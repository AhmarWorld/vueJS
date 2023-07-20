<template>
  <div>
    <h1>Home page</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'HomePage' }">Главная</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'TaskList' }">Лист Задач</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'AboutPage' }">О нас</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'UserPage' }">Users</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'LessonPage' }">Lessons</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>