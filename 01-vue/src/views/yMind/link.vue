<template>
{{props.nodes}}
  <g>
    <path 
    d="M0,300C83.33333333333333,300,83.33333333333333,100,166.66666666666666,100"
    stroke="pink" stroke-width='1' fill='none'>
    
    </path>
  </g>
</template>

<script setup>
import { onMounted ,defineProps} from 'vue';
import * as d3 from 'd3'
import { drawLink, drawNode } from './handle/action'
const props = defineProps({
  links:{
    type: Array,
    default: () => []
  },
})
console.log(props)
onMounted(()=>{
  
})

</script>

<style lang="scss" scoped>

</style>