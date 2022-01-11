import * as d3 from 'd3'
function toggle(d){  
  if(d.children){  //如果有子节点
    d._children = d.children; //将该子节点保存到 _children  
    d.children = null;  //将子节点设置为null  
  }else{  //如果没有子节点  
    d.children = d._children; //从 _children 取回原来的子节点   
    d._children = null; //将 _children 设置为 null  
  }  
}
//创建贝塞尔曲线生成器
var link = d3.linkHorizontal()
  .x(function(d) { return d.y; })//生成的曲线在曲线的终点和起点处的切线是水平方向的
  .y(function(d) { return d.x; });

//绘制边
const drawLink = (g,links)=>{
  g.append('g')
  .selectAll('path')
  .data(links)
  .enter()
  .append('path')
  .attr('d',function (d,i) {
      var start = {x:d.source.x,y:d.source.y};
      var end = {x:d.target.x,y:d.target.y};
      return link({source:start,target:end});
  })
  .attr('stroke','pink')
  .attr('stroke-width',1)
  .attr('fill','none');
}


const drawNode = (g,nodes)=>{
  //创建节点与文字分组
  var gs = g.append('g')
  .selectAll('.g')
  .data(nodes)
  .enter()
  .append('g')
  .attr('transform',function (d,i) {
      return 'translate('+ d.y +','+ d.x +')';
  });
  //绘制文字和节点
  gs.append('circle')
  .attr('r',10)
  .attr('fill','blue')
  .attr('stroke-width',1)
  .attr('stroke','pink');


  gs.append('text')
  .attr('x',function (d,i) {
      return d.children?-60:10;//有子元素的话  当前节点的文字前移40
  })
  .attr('y',-5)
  .attr('dy',10)
  .text(function (d,i) {
      return d.data.name;
  })
}

export{
  drawLink,
  drawNode
}