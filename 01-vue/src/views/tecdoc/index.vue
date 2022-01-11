<template>
  <div class="tec-doc">
    <div v-for="(item,index) in docList" :key="index" :id='item.name'>
        <h2 class="category">{{item.category}}</h2>
        <ul v-if="item.children&&item.children.length">
          <li v-for="(child,idx) in item.children" :key="idx">
            <p class="title">
              {{idx + 1}}、 <span v-if="!child.link">{{child.title}}</span><a :href="child.link" v-if="child.link">{{child.title}}</a>
            </p>

            <p v-if="child.des" class="des">{{child.des}}:</p>

            <div class="content" v-if="child.content&&child.content.length" >
              <p v-for="(ctx, i) in child.content" :key="i">{{ctx}}</p>
            </div>

            <img  class="img" :src='require("@/assets/img/"+child.img)' :alt="child.title" v-if="child.img">
          </li>
        </ul>
    </div>
  </div>
</template>

<script setup>
import docList from '@/utils/config/doc'
import { ref } from '@vue/reactivity'
</script>

<style lang="scss">
$textColor:#595d65;
.tec-doc{
  .category,.title{
    font-weight: 700;
    margin-bottom: 10px;
  }
  .title{
    font-size: 16px;
  }
  .des{
    color: $textColor;
  }
  .content,.img{
    margin: 10px 0 10px 20px;
  }
}
</style>