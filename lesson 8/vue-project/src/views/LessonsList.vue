<template>
    <div>
      <div class="nav__lessons">
        <select name="filter" id="filterLessons">
          <option value="default">Default</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
        <button @click="addrelocate()" id="lessonAdd">Add Lesson</button>
      </div>
      <lesson-card v-for="lesson in lessons"
      :key="lesson.id"
      :name="lesson.name"
      :surname="lesson.surname"
      :father="lesson.father"
      :title="lesson.title"
      :time="lesson.time"
      ></lesson-card>
    </div>
  </template>
  
  <script setup lang="ts">
import { ref, onMounted } from 'vue'
import LessonCard from '@/components/LessonCard.vue'
const data = [
  {
    id: 1,
    name: 'Temirlan',
    surname: 'Tuleubayev',
    father: 'NN',
    title: 'Vue.js Lesson',
    time: '19:00'
  }
]
onMounted(() => {
    if(!localStorage.getItem('LessonsData')){
        localStorage.setItem('LessonsData', JSON.stringify(data))
    }
})
const lessons = ref(JSON.parse(localStorage.getItem('LessonsData') as string))

  function addrelocate() {
    location.replace('http://127.0.0.1:5173/lessons/add')
  }
  </script>
  
  <style scoped>
  .nav__lessons {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: 20px;
  }
  </style>
  