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
const select = ref(111)
const defaultSelect = {value:111,label:111}
const changeSelect = (val)=>{
  select.value = val
}
const changeValue = ()=>{
  select.value = 222
}
</script>

<style lang="scss" scoped>

</style>