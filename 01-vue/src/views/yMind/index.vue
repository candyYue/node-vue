<template>
  <div style="width:100%;height:100%">
    <svg width="100%" height="100%" ref="svg">
      <g transform="translate(60,400)" class="y-mind-link-content">
      </g>
      <g transform="translate(60,400)" class="y-mind-node-content">
      </g>
    </svg>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from '@vue/runtime-core';
import { createApp } from 'vue'
import { VueElement } from '@vue/runtime-dom';
import * as d3 from 'd3'
import { drawLink, drawNode } from './handle/action'

import Node from './Node.vue'
import Link from './Link.vue'

//数据
var data = {
    name: "中国",
    children: [
      {
        name: "浙江",
        children: [
          {name: "杭州", value: 100},
          {name: "宁波", value: 100},
          {name: "温州", value: 100},
          {name: "绍兴", value: 100}
        ]
      },
      {
        name: "广西",
        children: [
          {
            name: "桂林",
            children: [
              {name: "秀峰区", value: 100},
              {name: "叠彩区", value: 100},
              {name: "象山区", value: 100},
              {name: "七星区", value: 100}
            ]
          },
          {name: "南宁", value: 100},
          {name: "柳州", value: 100},
          {name: "防城港", value: 100}
        ]
      },
      {
        name: "黑龙江",
        children: [
          {name: "哈尔滨", value: 100},
          {name: "齐齐哈尔", value: 100},
          {name: "牡丹江", value: 100},
          {name: "大庆", value: 100}
        ]
      },
      {
        name: "新疆",
        children: [
          {name: "乌鲁木齐"},
          {name: "克拉玛依"},
          {name: "吐鲁番"},
          {name: "哈密"}
        ]
      }
    ]
};
var links
var nodes
function toggle(d){  
  console.log(d)
  if(d.children){  //如果有子节点
    d._children = d.children; //将该子节点保存到 _children  
    d.children = null;  //将子节点设置为null  
  }else{  //如果没有子节点  
    d.children = d._children; //从 _children 取回原来的子节点   
    d._children = null; //将 _children 设置为 null  
  }
  console.log(links)
}
var margin = 60;
const init = ()=>{
  var svg = d3.select("svg");
  var width = svg.attr("width");
  var height = svg.attr("height");

  //创建分组
  var g = svg.append("g")
    .attr("transform","translate("+ margin +","+ margin +")");
  //创建一个层级布局
  var hierarchyData = d3.hierarchy(data)
    .sum(function (d,i) {
        return d.value;
    });
  // 返回的节点和每一个后代会被附加如下属性:
  //  node.data - 关联的数据，由 constructor 指定.
  //  node.depth - 当前节点的深度, 根节点为 0.
  //  node.height - 当前节点的高度, 叶节点为 0.
  //  node.parent - 当前节点的父节点, 根节点为 null.
  //  node.children - 当前节点的孩子节点(如果有的话); 叶节点为 undefined.
  //  node.value - 当前节点以及 descendants(后代节点) 的总计值; 可以通过 node.sum 和 node.count 计算.
  // console.log(hierarchyData);

  //创建一个树状图
  var tree = d3.tree()
    .size([width-400,height-200])
    .separation(function (a,b) {
        return (a.parent==b.parent?1:2)/a.depth;//一种更适合于径向布局的变体，可以按比例缩小半径差距:
    })
    .nodeSize([70,100]) ;

  //初始化树状图数据
  var treeData = tree(hierarchyData)
  // console.log(treeData);//这里的数据treeData与hierarchyData 相同
  //生成svg边和节点
  nodes = treeData.descendants()
  links = treeData.links()
  const linkComp = createApp(Link,{ links })
  const linkInstance = linkComp.mount(document.querySelector('.y-mind-link-content'))
  const nodeComp = createApp(Node,{ 
    nodes,
    toggle
  })
  const nodeInstance = nodeComp.mount(document.querySelector('.y-mind-node-content'))
  // drawLink(g,links)
  // drawNode(g,nodes)
  console.log(links)
}
onMounted(()=>{
  init()
})

</script>

<style lang="scss" scoped>

</style>