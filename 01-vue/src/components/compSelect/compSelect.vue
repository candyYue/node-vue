<template>
  <div class="y-select">
      <input type="text" class="y-input" :placeholder="props.placeholder" v-model="inputSelect"
      ref="select-input"
      @focus="selectFocus" 
      @blur="selectBlur">
      <div class="y-select-suffix-icon" @click="clearSelect">
        <i :class="['y-icon y-icon-down-arrow', isShowDrop&&!isMouseMove?'y-icon-show-drop':'', !isShowDrop&&isMouseMove?'y-icon-clear':'']"></i>
      </div>
  </div>
  <div class="y-select-dropdown" v-if="isShowDrop">
    <ul>
      <li v-for="(item, index) in list" :key="index" class="y-select-dropdown-item"
      @click="changeChoose(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { 
  ref, reactive, 
  toRefs, // 借用 toRefs 解构 可以将 reactive() 创建出来的响应式对象，转换为普通的对象，相当于变成一个个的ref()
  toRaw,  // toRaw返回响应式对象的target。UI界面不变
  onMounted, watchEffect, watch,
  defineProps,// 获取组件传值
  defineEmits, // 子组件向父组件事件传递
  defineExpose // 组件暴露自己的属性
} from "vue";
import InfiniteLoading from 'vue-infinite-loading';
const props = defineProps({
  value: {
    type: [Number,String],
    default: ''
  },
  defaultSelect:{
    type: Array,
    default: () => []
  },
  placeholder: {
    type: String,
    default: '请选择'
  },
  selectList:{
    type: Array,
    default: ()=>[
      {value:111,label:111},
      {value:222,label:222},
      {value:333,label:333},
    ]
  }
})


const {value, selectList} = toRefs(props)

const selectInputDom = ref(null)
const list = reactive(selectList.value)
const isShowDrop = ref(false) 
const isMouseMove = ref(false) 
const inputSelect = ref(value.value)

watch(value,(newVal)=>{
  inputSelect.value = newVal
})
const emit= defineEmits(['changeSelect'])
const changeChoose = (item)=>{
  inputSelect.value = toRaw(item).value
  emit('changeSelect',inputSelect.value)
  isShowDrop.value = false
}

const selectFocus = ()=>{ 
  isShowDrop.value = true 
  isMouseMove.value = false 
}
const clearSelect= (event) => {
  event.stopPropagation(); 
  event.preventDefault(); 
  inputSelect.value = ''
}
const selectBlur = ()=>{ 
  // isShowDrop.value = false
}
const initHover = ()=>{
  document.querySelector('.y-select').addEventListener('mousemove',(event)=>{
    if(!isShowDrop.value){
      isMouseMove.value = true
    }
  })
  document.querySelector('.y-select').addEventListener('mouseleave',(event)=>{
    isMouseMove.value = false
  })
}
onMounted(()=>{
  initHover()
})
</script>

<style lang="scss" scoped>
@import '~@/assets/css/component/select.scss';
</style>