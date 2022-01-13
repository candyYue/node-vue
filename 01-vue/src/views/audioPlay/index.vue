<template>
  <div>
    <div id="wave-form"></div>

    <button class="play-pause" id="play-pause">play/pause</button>
    <label for="track">
        <input type="radio" name="track" value="left"> left
    </label>
    <label for="track">
        <input type="radio" name="track" value="right"> right
    </label>
    <label for="track">
        <input type="radio" name="track" value="both" checked> both
    </label>
    <label class="fileBtn">
        <input type="file" class="fileIpt" id="fileIpt"> Load Music
    </label>
  </div>
</template>

<script setup>
  import { onMounted } from '@vue/runtime-core'
  import WaveSurfer from 'wavesurfer.js'

  const initFn = () =>{
    const fileIpt = document.querySelector('#fileIpt')
    const trackIpts = document.querySelectorAll('input[name="track"]')
    const playPause = document.querySelector('#play-pause')
    let leftAudioBuffer, rightAudioBuffer, nullAudioBuffer, currentAudioBuffer
    //创建一个波形图像
    const myWave = WaveSurfer.create({
        container: '#wave-form',
        backend: 'WebAudio',
        splitChannels: true
    })
    //加载文件完成后，触发ready事件。
    myWave.on('ready', () => {
      currentAudioBuffer = myWave.backend && myWave.backend.buffer
      if (currentAudioBuffer && currentAudioBuffer.numberOfChannels === 2) {
        nullAudioBuffer = new Float32Array(currentAudioBuffer.length)
        leftAudioBuffer = new Float32Array(currentAudioBuffer.length)
        rightAudioBuffer = new Float32Array(currentAudioBuffer.length)

        //copyFromChannel方法 将样本从AudioBuffer的指定通道复制到目标数组中
        currentAudioBuffer.copyFromChannel(leftAudioBuffer, 0, 0)  
        currentAudioBuffer.copyFromChannel(rightAudioBuffer, 1, 0)
      }
    })
    fileIpt.addEventListener("change", () => {
        myWave.loadBlob(fileIpt.files[0]) //从一个Blob或File对象加载音频
    });
    playPause.addEventListener("click", () => {
        myWave.playPause() //如果暂停则播放，如果播放则暂停
    });
    trackIpts.forEach(trackIpt => {
      trackIpt.addEventListener("change", () => {
        const track = trackIpt.value
        let left,right
        if(track === 'right'){
            left = nullAudioBuffer
            right = rightAudioBuffer
        } else if (track === 'left'){
            left = leftAudioBuffer
            right = nullAudioBuffer
        } else if (track === 'both'){
            left = leftAudioBuffer
            right = rightAudioBuffer
        }
        //change声道的数据 将样本AudioBuffer从源数组复制到指定通道
        currentAudioBuffer.copyToChannel(left, 0, 0) 
        currentAudioBuffer.copyToChannel(right, 1, 0)
        myWave.drawBuffer()
        myWave.play()
      })
    })
  }

  onMounted(()=>{
    initFn()
  })
</script>

<style lang="scss">
.fileBtn {
  margin: 5px;
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
}

.fileIpt {
    display: none;
}
</style>