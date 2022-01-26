<template>
  <div id="main" style="width: 100%;height:400px;"></div>
</template>

<script setup>
import { onMounted, ref } from '@vue/runtime-core'
import { useStore } from 'vuex';
import * as echarts from 'echarts'
import { getChinaDis } from '@/request/action'
import { chinaCity } from './utils/type'

const cityX = chinaCity.map(v=>v.name)

let cityY = []
let cityadd = []
let citytotal = []
const render = ()=>{
  let myChart = echarts.init(document.getElementById("main"));
      // 绘制图表
  myChart.setOption({
    xAxis: {
      data: cityX
    },
    yAxis:{
      min:0,  //取0为最小刻度
      scale: true, //自适应
      minInterval: 1, //分割刻度
      axisLabel:{
         color:"#797979",
         fontSize:13,
         formatter: function (value) {
          console.log(value)
          return value;
        }
      },
    },
    dataZoom: [{
      type: 'slider',
      show: true,
      xAxisIndex: [0],
      left: '9%',
      bottom: -5,
      start: 10,
      end: 100 //初始化滚动条
    }],
    series: [
      {
        name: "今日新增",
        type: "bar",
        data: cityadd
      },
      {
        name: "累计",
        type: "bar",
        data: citytotal
      }
    ]
  });
}

const renderChart = ()=>{
  getChinaDis().then(res=>{
    const chinaData = JSON.parse(res.data)
    cityY = chinaData.areaTree[0].children
    cityadd = cityY.map(v=>v.today.confirm)
    console.log(cityY)
    render()
  })
}
// const store = useStore();
onMounted(()=>{
  renderChart()
  
})
</script>

<style lang="scss" scoped>

</style>