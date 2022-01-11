<template>
  <div class="sider-bar">

    <ul>
      <li v-for="(item,index) in siderList" :key="index">
        <router-link :to="{name: `${item.name}`}" :title="item.label">{{item.label}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {siderList} from '@/utils/config/type'

</script>

<style lang="scss" scoped>
.sider-bar{
  li{
    line-height: 34px;
    text-overflow:ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>