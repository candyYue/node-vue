<template>
  <div>
    <!-- <button @click="changeValue">changeValue</button><br> -->
    <compSelect :value="select"
      @changeSelect='changeSelect'
    ></compSelect>
  </div>
</template>

<script setup>
import compSelect from '@/components/compSelect/compSelect'
import { ref } from '@vue/reactivity'
import { getArticleList } from '@/request/action'
import { onMounted } from '@vue/runtime-core'

const select = ref(111)
const defaultSelect = {value:111,label:111}
const changeSelect = (val)=>{
  select.value = val
}
const changeValue = ()=>{
  select.value = 222
}

onMounted(()=>{
  getArticleList().then(res=>{
    console.log(res)
  })
})
</script>

<style lang="scss" scoped>

</style>