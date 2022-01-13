<template>
  <div class="header-bar">
    <h3>
      <span v-if="props.minLayout" @click.stop="toogleMenu"> XY </span>
      
      <ul v-if="showMenu" class="header-bar-menu" @click.stop ref="menu">
        <li v-for="(item,index) in siderList" :key="index" :title="item.label" @click="changePage(item)">
          {{item.label}}
        </li>
      </ul>
    </h3>
    <p v-for="(item,index) in headList" :key="index" class="head-item">
      <router-link :to="{name: `${item.name}`}">{{item.label}}</router-link>
    </p>
  </div>
</template>

<script setup>
import { headList , siderList } from '@/utils/config/type'
import { useRoute, useRouter } from "vue-router";
import { defineProps, onMounted, ref } from 'vue'
const props = defineProps({
  minLayout:{
    type:Boolean,
    default:false
  }
})
const showMenu = ref(false)
const menu = ref(null)
let router = useRouter();

const toogleMenu = ()=>{
  showMenu.value = !showMenu.value
}
const changePage = (item)=>{
  console.log(router)
  router.push({
    name:item.name
  })
  showMenu.value = false
}
onMounted(()=>{
  document.querySelector('#app').addEventListener('click', (e)=>{
    if( menu.value && menu.value.contains(e.target)){
      console.log(1)
    }else{
      showMenu.value = false
    }
  })
})
</script>

<style lang="scss">
@import '~@/assets/css/common.scss';
.header-bar{
  padding: 0 30px;
  h3{
    color: #fff;
    line-height: $header-height;
    float: left;
    span{
      display: inline-block;
      width: 50px;
      height: 100%;
      text-align: center;
    }
  }
  .head-item{
    margin-right: 20px;
    float: right;
  }
}
</style>