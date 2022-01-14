<template>
  <div class="water-mask">
    <div class="water-mask-input">
      请输入水印时间：<input type="text" v-model="time" placeholder="请输入时间" class="y-input">
    </div>
    <div>
      请输入水印日期：<input type="text" v-model="date" placeholder="请输入日期" class="y-input">
    </div>
    <div>
      请输入水印地址：<input type="text" v-model="location" placeholder="请输入地址" class="y-input">
    </div>
    <input type="file" accept="image/*" class="y-input" id="upload" @change='imgChange'>
    <button @click="run" class="y-button"> 点击生成水印 </button>
    <div class="watermask"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import {useStore} from 'vuex';
import { getTime, getDate} from '@/utils/helper'
const time = ref(getTime())
const date = ref(getDate())
const location = ref('')

const baseWidth = 1080
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
  const basePx = baseWidth/canvas.width
  const ctx = canvas.getContext("2d");
  ctx.textBaseline = "middle";
  var iconImage = new Image();
  var iconImage2 = new Image();
  var lineImage = new Image();
  var logoImage = new Image();
  iconImage.src = './img/watermask-location.png'
  iconImage2.src = './img/watermask-name.png'
  lineImage.src = './img/line.png'
  logoImage.src = './img/dingdinglogo.png'
  // iconImage.crossOrigin = 'Anonymous';
  await new Promise((resolve) => (iconImage.onload = resolve));
  await new Promise((resolve) => (iconImage2.onload = resolve));
  await new Promise((resolve) => (lineImage.onload = resolve));
  await new Promise((resolve) => (logoImage.onload = resolve));
  ctx.drawImage(iconImage , 80/basePx, 160/basePx , 32/basePx, 32/basePx);
  ctx.drawImage(iconImage2 , 80/basePx, 240/basePx, 32/basePx, 32/basePx);
  ctx.drawImage(lineImage , 40/basePx, 60/basePx, 5/basePx, 220/basePx);
  ctx.drawImage(logoImage , (canvas.width - 250/basePx), 30/basePx, 223/basePx, 109/basePx);
  return canvas
}

/**
 * canvas添加水印
 * @param {canvas对象} canvas
 * @param {水印文字} text
 */
async function addWatermark(tempcanvas, {time,date,location,name}) {
  const canvas = await addIcon(tempcanvas)
  const basePx = baseWidth/canvas.width
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.textBaseline = "middle";
  ctx.font = `${64/basePx}px PingFang SC Semibold`;
  
  ctx.fillText(time, 80/basePx, 100/basePx );
  ctx.font = `${32/basePx}px PingFang SC Semibold`;
  ctx.fillText(date, 300/basePx, 100/basePx);
  ctx.fillText(location, 120/basePx, 180/basePx);
  ctx.fillText(name, 120/basePx, 260/basePx);
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


let imgUrl = ""
// 运行示例
async function run() {
  document.querySelector('.watermask').innerHTML = ''
  // 1.图片路径转成canvas
  const tempCanvas = await imgToCanvas(imgUrl);
  // 2.canvas添加水印
  const canvas = await addWatermark(tempCanvas, 
    {
      time: time.value,
      date: date.value,
      location: location.value,
      name:'陶源'
    },
  );
  // 3.canvas转成img
  const img = convasToImg(canvas);
  // 查看效果
  document.querySelector('.watermask').appendChild(img);
}

// const store = useStore();
const imgChange = (e)=>{
  const file = e.target.files[0]
  const url = window.URL.createObjectURL(file)
  imgUrl = url
  // store.dispatch('uploadAudioFile' ,file) 
  
}
onMounted(()=>{
  // run()
})
</script>

<style lang="scss">
  .water-mask-input{
    margin-bottom: 10px;
  }
</style>