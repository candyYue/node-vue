<template>
  <g>
    <g v-for="(item,index) in props.nodes" :key="index" :transform="`translate(${item.y},${item.x})`">
      <foreignObject width="100" height="40" x="-10" y="-40">
      {{item.data.name}}
      </foreignObject>
      <g @click="toggleCircle(item)">
        <circle r="10" fill="transparent" stroke-width="1" stroke="pink"></circle>
        <line x1="-4" y1="0" x2="4" y2="0" stroke-width="1" stroke="pink"></line>
        <line x1="0" y1="4" x2="0" y2="-4" stroke-width="1" stroke="pink"></line>
      </g>
    </g>
  </g>
</template>
<script setup>
import { onMounted ,defineProps,defineEmits} from 'vue';
import * as d3 from 'd3'
import { toggle } from './handle/action'
const props = defineProps({
  nodes:{
    type: Array,
    default: () => []
  },
  toggle:{
    type: Function,
  }
})
// const emit= defineEmits(['toggle'])
const toggleCircle = (item)=>{
  props.toggle(item)
  // emit('toggle',item)
}
onMounted(()=>{
  
})

</script>

<style lang="scss" scoped>

</style>