<template>
    <div>
      <p>{{ currentLesson.name }} {{ currentLesson.surname }} {{ currentLesson.father }}</p>
      <button @click="back()">Lessons</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import type { Lesson } from '@/types/lesson'
  
  interface Props {
    id: string
  }
  const props = defineProps<Props>()
  const currentLesson = ref<Lesson>({} as Lesson)
  onMounted(()=>{
      const users = JSON.parse(localStorage.getItem('LessonsData') as string)
      users.forEach((item:any) => {
          if (item.id == props.id) currentLesson.value = item;
      })
  })
  function back(){
      location.replace('http://127.0.0.1:5173/lessons')
  }
  </script>
  
  <style scoped></style>
  