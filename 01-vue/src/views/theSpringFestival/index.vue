<template>
  <div id="container" style="position:relative">
    <canvas id="canvas" ref="canvas" width="500"></canvas>
    <br>
    <img id="img" src="../../assets/img/jie.png" style="opacity:0">
    <br>
  </div>
</template>

<script>
import {useStore} from 'vuex';
import { ref, computed, onMounted } from 'vue'
export default {
  name: 'theSpringFestival',
  setup() {//两个参数props, context
    // context包含三个属性：context.attrs,context.slots,context.emit
    const store = useStore();
    store.commit('getNumber' ,10) //触发
    // store.dispatch('getNumber' ,10) //触发
    console.log(store.getters.number) //获取
    const count = ref(1)
    const plusOne = computed(() => count.value + 10)
    
    const canvas = ref(null);
    
    const drawCanvas = ()=>{
      const img = document.getElementById('img')
      const ctx = canvas.value.getContext('2d')
      const side = img.width / 500// 固定的宽度值
      const _y = img.height / side// 得到响应高度
      canvas.value.height = _y
      const image = new Image()
      image.src = '/jianying.png'
      image.onload = ()=>{
        const x = 500
        const y = _y
        ctx.drawImage(image,0,0,500,_y)
        const imageData = ctx.getImageData(0,0,x,y).data;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0,0,x,y);
        const gap = 5;
        for (var h = 0; h < y; h+=gap) {
          for(var w = 0; w < x; w+=gap){
            const cb = ctx.getImageData(h, w, 1, 1).data
            const position = (x * h + w) * 4;
            const r = imageData[position], g = imageData[position + 1], b = imageData[position + 2];
            if(r+g+b==0){
                // ctx.fillStyle = "#000";
                // ctx.fillRect(w,h,4,4);
                var dragonScale = 2;
                var bubble = document.createElement("img");
                bubble.src = "./denglong.png";
                bubble.setAttribute("class","bubble");

                var bubbleSize = Math.random()*10+5;
                bubble.style.position = 'absolute'
                bubble.style.left = (w*dragonScale-bubbleSize/2) + "px";
                bubble.style.top = (h*dragonScale-bubbleSize/2) + "px";
                bubble.style.width = bubble.style.height = bubbleSize+"px";
                bubble.style.animationDuration = Math.random()*6+4 + "s";
                document.getElementById('container').appendChild(bubble);
            }
          }
        }
      }
    }
    onMounted(() => {
      setTimeout(()=>{
        drawCanvas()
      },500)
      
    });
    return {
       plusOne,
       canvas,
       drawCanvas
    }
  },
}
</script>

<style>
</style>
