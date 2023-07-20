<template>
  <div>
    <input type="text" name="title" id="title" placeholder="title" v-model="lesson.title" /><br>
    <select name="teacher" id="teacher" v-model="fullname">
      <option value="None">None</option>
    </select><br>
    <input type="text" name="time" id="time" placeholder="19:00" v-model="lesson.time" /><br>
    <button @click="lessonAddData(lesson)">Сохранить</button><br>
    <button @click="cancel()">Отмена</button>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue'
import type { Lesson } from '@/types/lesson'
const fullname = ref(``)
const lesson = ref<Lesson>({
  name: ``,
  surname: ``,
  father: ``,
  title: '',
  time: ''
})
const teachers:any = []
onMounted(()=>{
  const users = JSON.parse(localStorage.getItem('UsersData') as string)
  users.forEach((user: any) => {
    if(user.role == 'teacher'){
      let teacher = {
        id: user.id,
        fullName: `${user.name} ${user.surname} ${user.father}`
      }
      teachers.push(teacher)
    }
  });
  let select = document.querySelector(`#teacher`)
  for(let teacher of teachers){
    let option = document.createElement('option')
    option.setAttribute('value', teacher.fullName)
    option.innerHTML = `${teacher.fullName}`
    select?.appendChild(option)
  }
})
function lessonAddData(obj: any){
  let lessons = JSON.parse(localStorage.getItem('LessonsData') as string)
  let currentName = fullname.value.split(' ')
  obj.name = currentName[0]
  obj.surname = currentName[1]
  obj.father = currentName[2]
  let newLesson = Object.assign({ id: new Date().getTime() } as Lesson, obj)
  lessons.push(newLesson)
  localStorage.setItem('LessonsData', JSON.stringify(lessons))
  
  location.replace(`http://127.0.0.1:5173/lessons/${newLesson.id}`)
}
function cancel(){
  location.replace('http://127.0.0.1:5173/lessons')
}
</script>

<style scoped></style>
