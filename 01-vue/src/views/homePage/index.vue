<template>
  <div id="container" style="position:relative">
    {{plusOne}}
  </div>
</template>

<script>
import {useStore} from 'vuex';
import { ref, computed, onMounted } from 'vue'
export default {
  name: 'homePage',
  setup() {//两个参数props, context
    // context包含三个属性：context.attrs,context.slots,context.emit
    const store = useStore();
    store.commit('getNumber' ,10) //触发
    // store.dispatch('getNumber' ,10) //触发
    console.log(store.getters.number) //获取
    const count = ref(1)
    const plusOne = computed(() => count.value + 10)
    
    return {
       plusOne,
    }
  },
}
</script>

<style>
</style>
