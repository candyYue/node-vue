<template>
  <g>
    <path v-for="(item,index) in props.links" :key="index"
    :d="`M${item.source.y+10},${item.source.x} C${1/2*(item.target.y + item.source.y)},${item.source.x},${1/2*(item.target.y + item.source.y)},${item.target.x},${item.target.y-10},${item.target.x}`"
    stroke="pink" stroke-width='1' fill='none'>
    </path>
  </g>
</template>
<script setup>
import { onMounted ,defineProps} from 'vue';
//  <path :d="`M${item.source.y},${item.source.x} L${item.target.y},${item.target.x}`" stroke="pink" stroke-width='1' fill='none' v-for="(item,index) in props.links" :key="index">
//  </path>
// <path v-for="(item,index) in props.links" :key="index"
//     :d="`M${item.source.y+10},${item.source.x} C${1/2*(item.target.y + item.source.y)},${item.source.x},${1/2*(item.target.y + item.source.y)},${item.target.x},${item.target.y-10},${item.target.x}`"
//     stroke="pink" stroke-width='1' fill='none'>
//     </path>
import * as d3 from 'd3'
import { drawLink, drawNode } from './handle/action'
const props = defineProps({
  links:{
    type: Array,
    default: () => []
  },
})

onMounted(()=>{
  
})

</script>

<style lang="scss" scoped>

</style>