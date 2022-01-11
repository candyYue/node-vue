<template>
  <input type="text" v-model="time" placeholder="请输入时间" class="y-input">
  <input type="text" v-model="date" placeholder="请输入日期" class="y-input">
  <input type="text" v-model="location" placeholder="请输入地址" class="y-input">

  <input type="file" accept="image/*" class="y-input" id="upload" @change='imgChange'>
  <button @click="run" class="y-button"> 生成水印 </button>
  <div class="watermask"></div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import {useStore} from 'vuex';

const time = ref('')
const date = ref('')
const location = ref('')
  /**
 * 图片路径转成canvas
 * @param {图片url} url
 */
async function imgToCanvas(url) {
  // 创建img元素
  const img = document.createElement("img");
  img.src = url;
  img.setAttribute("crossOrigin", "anonymous"); // 防止跨域引起的 Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported.
  await new Promise((resolve) => (img.onload = resolve));
  // 创建canvas DOM元素，并设置其宽高和图片一样
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  // 坐标(0,0) 表示从此处开始绘制，相当于偏移。
  canvas.getContext("2d").drawImage(img, 0, 0);
  return canvas;
}

async function addIcon(canvas){
  const ctx = canvas.getContext("2d");
  ctx.textBaseline = "middle";
  var iconImage = new Image();
  var iconImage2 = new Image();
  iconImage.src = './watermask-location.png'
  iconImage2.src = './watermask-name.png'
  // iconImage.crossOrigin = 'Anonymous';
  await new Promise((resolve) => (iconImage.onload = resolve));
  await new Promise((resolve) => (iconImage2.onload = resolve));
  ctx.drawImage(iconImage , 20, 50 ,14,14);
  console.log(iconImage)
  ctx.drawImage(iconImage2 , 20, 80 ,14,14);
  return canvas
}

/**
 * canvas添加水印
 * @param {canvas对象} canvas
 * @param {水印文字} text
 */
async function addWatermark(tempcanvas, {time,date,location,name}) {
  const canvas = await addIcon(tempcanvas)
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.textBaseline = "middle";
  ctx.font = '24px PingFang SC Semibold';
  
  ctx.fillText(time, 20, 30 );
  ctx.font = '13px PingFang SC Semibold';
  ctx.fillText(date, 100, 30);
  ctx.fillText(location, 40, 60);
  ctx.fillText(name, 40, 90);
  // ctx.drawImage(logoImg, 0, 0);
  return canvas;
}


/**
 * canvas转成img
 * @param {canvas对象} canvas
 */
function convasToImg(canvas) {
  // 新建Image对象，可以理解为DOM
  var image = new Image();
  // canvas.toDataURL 返回的是一串Base64编码的URL
  // 指定格式 PNG
  image.src = canvas.toDataURL("image/png");
  
  return image;
}



// 运行示例
async function run() {
  const imgUrl ="./login.png";
  // 1.图片路径转成canvas
  const tempCanvas = await imgToCanvas(imgUrl);
  // 2.canvas添加水印
  const canvas = await addWatermark(tempCanvas, 
    {
      time: time.value,
      date: date.value,
      location: location.value,
      name:'张三'
    },
  );
  // 3.canvas转成img
  const img = convasToImg(canvas);
  // 查看效果
  document.querySelector('.watermask').appendChild(img);
}

const store = useStore();
const imgChange = (e)=>{
  const file = e.target.files[0]
  console.log(file)
  // store.dispatch('uploadAudioFile' ,file) 
  
}
onMounted(()=>{
  // run()
})
</script>

<style lang="scss" scoped>

</style>