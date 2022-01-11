<template>
  <div class="header-bar">
    <h3>XY</h3>
    <p v-for="(item,index) in headList" :key="index" class="head-item">
      <router-link :to="{name: `${item.name}`}">{{item.label}}</router-link>
    </p>
  </div>
</template>

<script setup>
import {headList} from '@/utils/config/type'


</script>

<style lang="scss">
@import '~@/assets/css/common.scss';
.header-bar{
  padding: 0 30px;
  h3{
    line-height: $header-height;
    float: left;
  }
  .head-item{
    margin-right: 20px;
    float: right;
  }
}
</style>