<template>
  <div class="todolist">
    <h3>nodelist入门 增删改</h3>

    <button @click="addItem" class="y-button">add </button>
    <div class="todolist-form">
      <div class="todolist-title"></div>
      <div v-for="(item,index) in todoList" :key="index" class="todolist-item">
        <span>{{index+1}}</span>
        <input type="text" v-model="item.content" class="y-input" style="width:200px">
        <input type="text" v-model="item.tip" class="y-input" style="width:200px">
        <button @click="deleteItem(item,index)" class="y-button">delete</button>
        <button @click="saveListItem(item,index)" class="y-button">save </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import {
  getTodolist,
  addTodolist,
  modifyTodolist,
  deleteTodolist
} from '@/request/action'
  const todoList = ref([])
  const deleteItem = (item,index)=>{
    deleteTodolist({id:item._id}).then(res=>{
      if(res.status===0){
        updateList()
      }
    })
  }

  const addItem = () =>{
    todoList.value.push({
      content:'',
      tip:''
    })
  }
  const saveListItem = (item,index) =>{
    addTodolist(item).then(res=>{
      if(res.status===0){
        updateList()
      }
    })
  }

  const updateList = ()=>{
    getTodolist().then(res=>{
      if(res.status===0){
        const list = res.result.list
        todoList.value = list 
      }
    })
  }
  onMounted(()=>{
    updateList()
  })
</script>

<style lang="scss">
.todolist{
  text-align: center;
  h3{
    margin-bottom: 20px;
  }
}
.todolist-form{
  .todolist-item{
    margin: 10px 0;
    span{
      line-height: 34px;
      padding: 0 20px;
    }
    input,button{
      margin-right:10px
    }
  }
}
</style>